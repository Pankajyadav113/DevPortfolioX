export const getHome = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to DevPortfolioX Backend API 🚀",
    version: "1.0.0"
  });
};

export const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    status: "Healthy",
    uptime: process.uptime(),
    timestamp: new Date()
  });
};