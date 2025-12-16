# GitHub Setup Instructions

Your local Git repository has been initialized and your first commit has been made. Follow these steps to push your code to GitHub:

## Option 1: Using GitHub Web Interface (Recommended)

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `fresh-nature` (or any name you prefer)
   - Description: "Natural products website built with Next.js"
   - Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push your code to GitHub:**
   Run these commands in your terminal:

```bash
cd "/Users/juan/Desktop/Fresh Nature"
git remote add origin https://github.com/YOUR_USERNAME/fresh-nature.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Option 2: Using SSH (if you have SSH keys set up)

If you prefer SSH, use this instead:

```bash
cd "/Users/juan/Desktop/Fresh Nature"
git remote add origin git@github.com:YOUR_USERNAME/fresh-nature.git
git branch -M main
git push -u origin main
```

## Option 3: Install GitHub CLI (Alternative)

If you want to create the repository from the command line:

1. Install GitHub CLI:
   ```bash
   brew install gh
   ```

2. Authenticate:
   ```bash
   gh auth login
   ```

3. Create and push:
   ```bash
   cd "/Users/juan/Desktop/Fresh Nature"
   gh repo create fresh-nature --public --source=. --remote=origin --push
   ```

## After Pushing to GitHub

Once your code is on GitHub, you can:

1. **Connect to Railway:**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `fresh-nature` repository
   - Railway will automatically detect the Dockerfile and deploy

2. **Set Environment Variables in Railway:**
   - Add `NEXT_PUBLIC_BASE_URL` with your Railway app URL
   - This is used for sitemap and robots.txt

## Troubleshooting

If you get authentication errors:
- Make sure you're logged into GitHub
- You may need to use a Personal Access Token instead of password
- Or set up SSH keys for easier authentication

