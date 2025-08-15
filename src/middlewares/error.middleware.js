// middlewares/error.middleware.js
export const errorMiddleware = (err, req, res, next) => {
  console.error("❌ Error:", err.stack || err.message);

  res.status(err.status || 500).json({
    success: false,
    status_code: err.status_code,
    message: err.message || "Internal Server Error",
  });
};
