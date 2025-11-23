# Barber App (Standalone)

This directory contains a standalone copy of the BarberTop customer-facing site so you can host it as its own repository.

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 to preview the landing experience.

## Building for production
```bash
npm run build
npm start
```

## Creating a dedicated Git repository
You can export this directory into a fresh repository automatically:

```bash
# from inside barber-app
./scripts/create_repo.sh ../barber-app-repo
```

The script copies the app (excluding build artifacts), initializes git, and makes the first commit. If you prefer to do it manually, run:

```bash
git init
git add .
git commit -m "Initialize BarberTop app"
```
Then push to your preferred remote:
```bash
git remote add origin <YOUR_REMOTE_URL>
git push -u origin main
```
