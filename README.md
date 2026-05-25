# MYRVO Technologies — Website

Production-grade SaaS website for MYRVO Technologies. Built with Vite + React + React Router, with Firebase Authentication baked in.

---

## What you got

- **8 pages** — Home, About, Services, Careers, Contact, Login, Signup, Dashboard (protected), 404
- **Mobile responsive** — works from 320px up
- **Firebase Authentication** — email/password + Google sign-in, route protection
- **Sticky navbar with mobile hamburger menu**
- **Working contact form** with client-side validation
- **SPA routing** correctly configured for Vercel
- **Clean SaaS design system** matching your approved UI

---

## 1 — Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 — the site is live with everything working except auth (until you do step 2).

---

## 2 — Firebase setup (login system)

The auth pages are wired but need your Firebase project credentials.

### Create a Firebase project

1. Go to https://console.firebase.google.com
2. Click **Add project**, name it `myrvo` (or anything)
3. Skip Google Analytics if you want (optional)

### Enable Authentication

1. In the left sidebar → **Build → Authentication**
2. Click **Get started**
3. Under **Sign-in method**, enable:
   - **Email/Password**
   - **Google** (recommended)

### Get your config

1. In Firebase Console → click the gear icon → **Project settings**
2. Scroll to **Your apps** → click the `</>` (web) icon
3. Register the app with nickname `myrvo-web`
4. You'll see a `firebaseConfig` object — copy those values

### Add config to your project

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Fill in `.env` with your Firebase values:
   ```
   VITE_FIREBASE_API_KEY=AIzaSy...
   VITE_FIREBASE_AUTH_DOMAIN=myrvo-xxx.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=myrvo-xxx
   VITE_FIREBASE_STORAGE_BUCKET=myrvo-xxx.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
   VITE_FIREBASE_APP_ID=1:123456789012:web:abc123
   ```
3. Restart `npm run dev` — the warning banner on Login/Signup disappears once it picks up the new env vars.
4. Test by creating an account on `/signup`.

---

## 3 — Deploy to Vercel

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/myrvo-website.git
git push -u origin main
```

### Connect to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **Add New → Project**
3. Import the `myrvo-website` repo
4. Vercel auto-detects Vite — leave the defaults
5. Click **Environment Variables** and add all six `VITE_FIREBASE_*` keys from your `.env`
6. Click **Deploy**

You'll get a live URL like `myrvo-website.vercel.app` in about 60 seconds.

---

## 4 — Connect your domain (myrvo.tech)

### In Vercel

1. Open your project → **Settings → Domains**
2. Add `myrvo.tech` and `www.myrvo.tech`
3. Vercel will show you the DNS records you need to add

### In your domain registrar (Namecheap / GoDaddy / etc.)

Set these DNS records (Vercel will tell you the exact values, but typically):

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | `76.76.21.21`          |
| CNAME | www  | `cname.vercel-dns.com` |

Wait 5–30 minutes for DNS to propagate. Vercel will auto-issue an SSL certificate.

### Add domain to Firebase (so Google sign-in works)

1. Firebase Console → **Authentication → Settings → Authorised domains**
2. Click **Add domain** and add `myrvo.tech`

---

## 5 — Done

You're live at https://myrvo.tech with:

- ✅ Public marketing site
- ✅ Sign up / Sign in flow
- ✅ Protected dashboard
- ✅ Mobile responsive
- ✅ SSL / HTTPS
- ✅ Global CDN

---

## Project structure

```
myrvo-website/
├── index.html              ← root HTML
├── package.json
├── vite.config.js
├── vercel.json             ← SPA fallback routing
├── .env.example            ← Firebase config template
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            ← entry point
    ├── App.jsx             ← routes + AuthProvider
    ├── styles.css          ← all styling
    ├── firebase.js         ← Firebase init
    ├── AuthContext.jsx     ← auth state + actions
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Icon.jsx        ← all inline SVG icons
    │   ├── PrivateRoute.jsx
    │   └── ScrollToTop.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Careers.jsx
        ├── Contact.jsx
        ├── Login.jsx
        ├── Signup.jsx
        ├── Dashboard.jsx   ← protected
        └── NotFound.jsx
```

---

## Common things you'll want to change

| What | Where |
|------|-------|
| Hero image / About image | `src/pages/Home.jsx` — swap the Unsplash URLs |
| Stats numbers | `src/pages/Home.jsx` — `STATS` array |
| Services list | `src/pages/Home.jsx` (Home card grid) and `src/pages/Services.jsx` (detail page) |
| Open job roles | `src/pages/Careers.jsx` — `ROLES` array |
| Contact email / phone | `src/pages/Contact.jsx` |
| Brand colours | `src/styles.css` — `:root` block at the top |
| Logo / brand name | `src/components/Navbar.jsx` and `src/components/Footer.jsx` |

---

## Roadmap (v2+)

The structure is set up so you can extend without rewrites:

- **Firestore** for project tracking / admin data
- **Stripe** for billing on the dashboard
- **Admin panel** route (gate by user claim / role)
- **AI tools page** (extend `/services` or add a new `/ai-tools` route)
- **Blog** (add `/blog` route, plug in markdown or a headless CMS)
