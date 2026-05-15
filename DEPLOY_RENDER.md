# Deploying to Render

This guide explains how to deploy your Vite + React application to [Render](https://render.com) for free using their Static Site hosting.

## Option 1: Using the Render Dashboard (Recommended for beginners)

1. **Push your code to GitHub/GitLab:**
   - Create a new repository on GitHub.
   - Push your source code to the repository.

2. **Create a new Static Site on Render:**
   - Log in to your [Render Dashboard](https://dashboard.render.com/).
   - Click the **New +** button and select **Static Site**.
   - Connect your GitHub or GitLab account and select your repository.

3. **Configure the deployment:**
   - **Name:** Choose a name for your site (e.g., `chadha-restaurant`).
   - **Branch:** `main` (or whichever branch you use).
   - **Build Command:** `npm install && npm run build`
   - **Publish directory:** `dist`

4. **Advanced Settings (For React Router/SPA):**
   - Click on **Advanced**.
   - Under **Redirects/Rewrites**, add a new rule:
     - **Source:** `/*`
     - **Destination:** `/index.html`
     - **Action:** `Rewrite`
   - This ensures that if you add multiple pages/routes later, refreshing the page won't cause a 404 error.

5. **Deploy:**
   - Click **Create Static Site**.
   - Render will build your site and provide you with a live `.onrender.com` URL.

---

## Option 2: Using Infrastructure as Code (`render.yaml`)

We have created a `render.yaml` file in the root of your project. If you give Render access to your repository, it can automatically detect this file and set up the deployment for you.

1. Go to your Render Dashboard.
2. Click **New +** and select **Blueprint**.
3. Connect your repository. Render will read the `render.yaml` file and configure the Static Site automatically.
