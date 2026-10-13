# Janata Chitralaya — 100% Free Hosting & Deployment Guide

This guide explains how to host your new Janata Chitralaya website on your custom domain **`janatachitralaya.in`** with **₹0 recurring hosting fees**, free automatic SSL (HTTPS), global high-speed CDN, and 100% full access.

---

## Why This Architecture Costs ₹0 Forever
Unlike WordPress or shared cPanel hosting (which charge ₹3,000 to ₹10,000+ per year for database and server renewals), this website is built with clean, modern HTML5, CSS3, and JavaScript:
- **No server crash risk:** Static files are served directly from global edge servers.
- **No database fees:** Order inquiries and bookings flow directly to your WhatsApp.
- **No maintenance or plugin updates:** Zero security vulnerabilities from outdated plugins.
- **Free SSL Certificate:** Automatically renewed at zero cost.

---

## Option 1: Cloudflare Pages (Recommended - 100% Free Forever)

Cloudflare Pages provides unlimited bandwidth, the fastest CDN in India, and free SSL.

### Step-by-Step Instructions:
1. **Create a Free Account:**
   * Go to [dash.cloudflare.com](https://dash.cloudflare.com/) and sign up for a free account.
2. **Deploy via Direct Upload or GitHub:**
   * **Direct Upload (Simplest, no GitHub required):**
     1. In Cloudflare Dashboard, click **Workers & Pages** → **Create application** → **Pages** → **Upload assets**.
     2. Give your project a name (e.g., `janata-chitralaya`).
     3. Drag and drop the files from `/home/sp/janatachitralaya` (`index.html`, `css/`, `js/`, `assets/`, `CNAME`).
     4. Click **Deploy Site**.
   * Your site is live immediately on a free `.pages.dev` URL!
3. **Connect Your Custom Domain (`janatachitralaya.in`):**
   * Go to your project in Cloudflare Pages → **Custom Domains** tab.
   * Click **Set up a custom domain** and enter `janatachitralaya.in` and `www.janatachitralaya.in`.
   * Cloudflare will provide simple DNS records (CNAME / A records). Update them where you bought your domain (GoDaddy, BigRock, Namecheap, etc.).
   * SSL is activated automatically within minutes.

---

## Option 2: GitHub Pages (100% Free Forever)

If you already use or prefer GitHub:
1. Create a GitHub repository (e.g. `janatachitralaya-website`).
2. Push or upload all files from `/home/sp/janatachitralaya`.
3. Go to **Settings** → **Pages** → Source: **Deploy from a branch (`main` / root)**.
4. Under **Custom domain**, enter `janatachitralaya.in` and check **Enforce HTTPS**.
5. In your domain registrar's DNS panel, add:
   * **CNAME** record: `www` pointing to `<your-github-username>.github.io`
   * **A** records for apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

---

## How You Maintain & Update the Website
* **To change costume prices or details:**
  Open `js/main.js` and edit the `COSTUMES_DATA` array.
* **To update phone numbers or branch addresses:**
  Open `js/main.js` and edit the `BRANCHES` object at the top.
* **To add more photos:**
  Place new photos in `assets/images/` and reference them in `js/main.js` or `index.html`.

You have complete ownership of all files and zero dependency on any agency or monthly fee!
