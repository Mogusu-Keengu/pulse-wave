/**
 * Catch-all error handler. Express recognizes this as an error handler
 * specifically because it takes 4 arguments (err, req, res, next) —
 * that's not just a style choice, Express checks the function's arity.
 *
 * Any route/middleware that calls next(err) — or throws inside an async
 * handler wrapped in a try/catch that calls next(err) — ends up here.
 */
export function errorHandler(err, req, res, next) {
  console.error(err.stack)

  const status = err.status || 500
  res.status(status).json({
    error: err.message || 'Something went wrong on our end.',
  })
}

/**
 * Catches requests to routes that don't exist. Mount this AFTER all your
 * real routes and BEFORE errorHandler.
 */
export function notFound(req, res, next) {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` })
}