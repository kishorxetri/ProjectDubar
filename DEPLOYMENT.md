# Deployment Guide - Dubar Youth Society Website

This guide will help you deploy your website to free hosting services.

## 📋 Prerequisites

- GitHub account (you already have this)
- Your code is already pushed to GitHub ✅

---

## 🗄️ Step 1: Set Up MongoDB Atlas (Database)

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas/register
   - Sign up with Google or email
   - Choose the FREE tier (M0)

2. **Create Cluster**
   - Click "Build a Database"
   - Choose "FREE" (M0 Sandbox)
   - Select a region close to you (e.g., AWS Mumbai for Nepal)
   - Name it: `dubar-youth-society`
   - Click "Create"

3. **Create Database User**
   - Go to "Database Access" in left sidebar
   - Click "Add New Database User"
   - Username: `dubar-admin`
   - Password: Generate a secure password (SAVE THIS!)
   - Database User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Allow Network Access**
   - Go to "Network Access" in left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" in left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://dubar-admin:<password>@cluster0.xxxxx.mongodb.net/`
   - Replace `<password>` with your actual password
   - Add database name at the end: `mongodb+srv://dubar-admin:yourpassword@cluster0.xxxxx.mongodb.net/dubar-youth-society`
   - **SAVE THIS CONNECTION STRING!**

---

## 🚀 Step 2: Deploy Backend (Render)

1. **Create Render Account**
   - Go to https://render.com
   - Click "Get Started for Free"
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub repository: `ProjectDubar`
   - Click "Connect"

3. **Configure Service**
   - **Name**: `dubar-youth-society-api`
   - **Region**: Singapore (closest to Nepal)
   - **Branch**: `master`
   - **Root Directory**: `backend`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

4. **Add Environment Variables**
   Click "Advanced" → "Add Environment Variable"
   
   Add these three variables:
   
   | Key | Value |
   |-----|-------|
   | `MONGODB_URI` | Your MongoDB Atlas connection string from Step 1 |
   | `JWT_SECRET` | Any random secure string (e.g., `dubar-youth-2024-secret-key-xyz`) |
   | `PORT` | `5000` |

5. **Deploy**
   - Click "Create Web Service"
   - Wait 5-10 minutes for deployment
   - Once deployed, you'll get a URL like: `https://dubar-youth-society-api.onrender.com`
   - **SAVE THIS URL!**

6. **Test Backend**
   - Visit: `https://your-backend-url.onrender.com`
   - You should see: `{"message":"Dubar Youth Society API",...}`
   - ✅ Backend is live!

---

## 🌐 Step 3: Deploy Frontend (Vercel)

1. **Create Vercel Account**
   - Go to https://vercel.com/signup
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Find your `ProjectDubar` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)

4. **Add Environment Variable**
   - Click "Environment Variables"
   - Add:
     - **Name**: `VITE_API_URL`
     - **Value**: `https://your-backend-url.onrender.com/api`
     - (Replace with your actual Render backend URL from Step 2)
   - Click "Add"

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - You'll get a URL like: `https://project-dubar.vercel.app`
   - **This is your live website! 🎉**

---

## ✅ Step 4: Test Your Live Website

1. **Visit Your Website**
   - Go to your Vercel URL
   - Navigate through all pages

2. **Test Membership Form**
   - Scroll to "Become a Member"
   - Fill out the form
   - Submit
   - You should see success message

3. **Test Admin Dashboard**
   - Go to `/admin/login`
   - Login with your admin credentials
   - Check "Members" tab
   - Your test submission should appear!

---

## 🔧 Troubleshooting

### Backend Issues
- **"Failed to load notices"**: Check if backend URL is correct in Vercel environment variables
- **Database connection error**: Verify MongoDB connection string and network access settings

### Frontend Issues
- **404 on refresh**: Already fixed with `vercel.json`
- **API errors**: Check browser console (F12) for CORS or network errors

### Need to Update?
- **Backend**: Push to GitHub → Render auto-deploys
- **Frontend**: Push to GitHub → Vercel auto-deploys

---

## 📝 Important URLs to Save

After deployment, save these:

1. **Frontend URL**: `https://your-project.vercel.app`
2. **Backend URL**: `https://your-api.onrender.com`
3. **MongoDB Connection**: Your Atlas connection string
4. **Admin Credentials**: Your admin username/password

---

## 🎯 Next Steps (Optional)

1. **Custom Domain**
   - Buy a domain (e.g., dubaryouth.org)
   - Add to Vercel in project settings

2. **SSL Certificate**
   - Automatic on both Vercel and Render ✅

3. **Monitoring**
   - Check Render dashboard for backend logs
   - Check Vercel dashboard for frontend analytics

---

## 💡 Tips

- **Free Tier Limits**:
  - Render: Backend sleeps after 15 min of inactivity (wakes up in ~30 seconds)
  - MongoDB Atlas: 512 MB storage
  - Vercel: Unlimited bandwidth for personal projects

- **Keep Backend Awake** (Optional):
  - Use a service like UptimeRobot to ping your backend every 5 minutes

---

## 🆘 Need Help?

If you encounter any issues during deployment, check:
1. Render logs (in Render dashboard)
2. Vercel logs (in Vercel dashboard)
3. Browser console (F12)

Your website is now live and accessible to anyone in the world! 🌍
