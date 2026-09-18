/**
 * Returns the logged-in user's own record from MongoDB. By the time this
 * runs, requireAuth has already confirmed the Clerk session is valid, and
 * attachUser has already loaded the matching document onto req.user —
 * so this controller stays intentionally simple.
 */
export function getCurrentUser(req, res) {
  console.log({user: req.user});
  res.status(200).json({ user: req.user })
}