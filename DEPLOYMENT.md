# Kavin Sanjai Portfolio - Deployment Guide

## 🚀 Deploy to Deno Deploy (Easiest)

### Step 1: Create Account
Visit [dash.deno.com](https://dash.deno.com) and sign up with GitHub

### Step 2: Create New Project
1. Click "New Project"
2. Choose "Deploy from GitHub"
3. Select your repository (or upload this folder)

### Step 3: Configure
- **Entry Point**: `main.ts`
- **Environment**: Production
- **Auto Deploy**: Enable

### Step 4: Deploy
Click "Deploy" - Your site will be live at `https://your-project.deno.dev`

---

## 🌐 Alternative: Manual Deployment

### Using Deno Deploy CLI:
```bash
# Install CLI
deno install -Arf https://deno.land/x/deploy/deployctl.ts

# Login
deployctl login

# Deploy
deployctl deploy --project=kavin-portfolio main.ts
```

---

## 📦 Deploy to Netlify (Static Alternative)

### Option 1: Drag & Drop
1. Visit [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `public` folder
3. Done!

### Option 2: Using CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --dir=public --prod
```

---

## 🔧 Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📋 What I've Prepared:
✅ `deno.deploy.json` - Deno Deploy configuration
✅ All files are ready for deployment
✅ Server configured to run on port 8000

## 🎯 Recommended: Deno Deploy
- ✅ Free hosting
- ✅ Native Deno support
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Zero configuration

## 📞 Next Steps:
1. Visit [dash.deno.com](https://dash.deno.com)
2. Sign up/Login
3. Click "New Project"
4. Upload this folder or connect GitHub
5. Set entry point to `main.ts`
6. Deploy!

Your portfolio will be live in seconds! 🎉
