# 🛠 DevPortfolioX Troubleshooting Guide

Common issues and resolution steps for developing, building, and running DevPortfolioX locally or in containers.

---

## 1. Frontend Issues

### Error: `tsc -b && vite build` TypeScript Error
- **Cause**: Unused imports or missing type annotations.
- **Fix**: Check `tsconfig.app.json`. Run `npm run build` in `frontend/` to view exact compiler line output.

---

## 2. Backend Issues

### Error: `'nodemon' is not recognized`
- **Cause**: Backend dependencies not installed.
- **Fix**: Run `npm install` inside the `backend/` directory.

### Error: `MongoDB Connection Failed`
- **Cause**: Local MongoDB service is not running or `MONGODB_URI` environment variable is invalid.
- **Fix**: Ensure MongoDB is running on port 27017 or set `MONGODB_URI` in `backend/.env`.

---

## 3. Docker Issues

### Port 8080 Conflict
- **Fix**: Change port mapping in `docker-compose.yml` to another port such as `9090:80`.
