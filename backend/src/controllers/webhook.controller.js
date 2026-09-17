// import { Webhook } from 'svix'
// import User from '../models/User.js'

// /**
//  * Clerk sends a webhook (user.created / user.updated / user.deleted) any
//  * time a user signs up, edits their profile, or deletes their account.
//  * This is how our own MongoDB stays in sync with Clerk without us having
//  * to build our own signup form or password handling.
//  *
//  * Clerk signs each payload using Svix, so we verify the signature before
//  * trusting anything in the body — otherwise anyone could POST a fake
//  * "user.created" event to this endpoint.
//  */
// export async function handleClerkWebhook(req, res, next) {
//   try {
//     const webhookSecret = process.env.CLERK_WEBHOOK_SECRET

//     if (!webhookSecret) {
//       throw new Error('CLERK_WEBHOOK_SECRET is not set in your .env file')
//     }

//     // These three headers are what svix uses to verify the payload actually
//     // came from Clerk and wasn't tampered with in transit.
//     const svixId = req.headers['svix-id']
//     const svixTimestamp = req.headers['svix-timestamp']
//     const svixSignature = req.headers['svix-signature']

//     if (!svixId || !svixTimestamp || !svixSignature) {
//       return res.status(400).json({ error: 'Missing svix headers' })
//     }

//     const wh = new Webhook(webhookSecret)

//     // req.body must be the raw, unparsed request body (a Buffer/string) for
//     // this signature check to work — see the express.raw() middleware
//     // applied on this specific route in routes/webhook.routes.js.
//     let event
//     try {
//       event = wh.verify(req.body, {
//         'svix-id': svixId,
//         'svix-timestamp': svixTimestamp,
//         'svix-signature': svixSignature,
//       })
//     } catch (err) {
//       console.error('Webhook signature verification failed:', err.message)
//       return res.status(400).json({ error: 'Invalid webhook signature' })
//     }

//     const { type, data } = event

//     switch (type) {
//       case 'user.created':
//       case 'user.updated': {
//         const primaryEmail = data.email_addresses?.find(
//           (e) => e.id === data.primary_email_address_id
//         )?.email_address

//         await User.findOneAndUpdate(
//           { clerkId: data.id },
//           {
//             clerkId: data.id,
//             email: primaryEmail ?? '',
//             firstName: data.first_name ?? '',
//             lastName: data.last_name ?? '',
//             imageUrl: data.image_url ?? '',
//           },
//           { upsert: true, new: true, setDefaultsOnInsert: true }
//         )
//         break
//       }

//       case 'user.deleted': {
//         await User.findOneAndDelete({ clerkId: data.id })
//         break
//       }

//       default:
//         // Ignore event types we don't care about yet (sessions, orgs, etc.)
//         break
//     }

//     // Clerk expects a 2xx response quickly — it will retry on failure,
//     // so returning fast here avoids duplicate retries piling up.
//     res.status(200).json({ received: true })
//   } catch (err) {
//     next(err)
//   }
// }



import { Webhook } from 'svix'
import User from '../models/User.js'

export async function handleClerkWebhook(req, res, next) {
  try {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET

    if (!webhookSecret) {
      throw new Error('CLERK_WEBHOOK_SECRET is not set in your .env file')
    }

    const svixId = req.headers['svix-id']
    const svixTimestamp = req.headers['svix-timestamp']
    const svixSignature = req.headers['svix-signature']

    console.log('--- Incoming webhook ---')
    console.log('Headers present:', { svixId: !!svixId, svixTimestamp: !!svixTimestamp, svixSignature: !!svixSignature })
    console.log('req.body type:', typeof req.body, Buffer.isBuffer(req.body) ? '(is a Buffer)' : '(NOT a Buffer)')
    console.log('req.body length:', req.body?.length)

    if (!svixId || !svixTimestamp || !svixSignature) {
      return res.status(400).json({ error: 'Missing svix headers' })
    }

    const wh = new Webhook(webhookSecret)

    const rawBody = req.body.toString('utf8')

    try {
      // verify() only checks the signature — it doesn't return the payload,
      // so we parse the body ourselves once we know it's genuinely from Clerk.
      wh.verify(rawBody, {
        'svix-id': svixId,
        'svix-timestamp': svixTimestamp,
        'svix-signature': svixSignature,
      })
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message)
      return res.status(400).json({ error: 'Invalid webhook signature' })
    }

    const event = JSON.parse(rawBody)

    const { type, data } = event

    switch (type) {
      case 'user.created':
      case 'user.updated': {
        const primaryEmail = data.email_addresses?.find(
          (e) => e.id === data.primary_email_address_id
        )?.email_address

        await User.findOneAndUpdate(
          { clerkId: data.id },
          {
            clerkId: data.id,
            email: primaryEmail ?? '',
            firstName: data.first_name ?? '',
            lastName: data.last_name ?? '',
            imageUrl: data.image_url ?? '',
          },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        )
        break
      }

      case 'user.deleted': {
        await User.findOneAndDelete({ clerkId: data.id })
        break
      }

      default:
        break
    }

    res.status(200).json({ received: true })
  } catch (err) {
    next(err)
  }
}