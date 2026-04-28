# Deployment Guide for GitHub Pages

## Step-by-Step GitHub Pages Setup

### 1. Create GitHub Repository
- Go to https://github.com/new
- Name: `every-nation-finland-website` (or your preferred name)
- Description: "Every Nation Finland Church Website"
- Select "Public"
- Click "Create repository"

### 2. Push to GitHub
```bash
cd /path/to/your/website
git init
git add .
git commit -m "Initial commit: Every Nation Finland website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/every-nation-finland-website.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll to **Pages** (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select **Branch: main**
6. Select **Folder: / (root)**
7. Click **Save**

### 4. Wait for Deployment
- GitHub will process your site (usually 1-2 minutes)
- You'll see a green checkmark when ready
- Your site will be available at: `https://your-username.github.io/every-nation-finland-website`

## Using a Custom Domain

### 1. Add CNAME File
Create a file named `CNAME` (no extension) in your repository root:

```
everynation.fi
```

Push the file to GitHub:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

### 2. Update Domain DNS

**Option A: Point domain to GitHub Pages**

Add these `A` records to your DNS provider:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Option B: Use CNAME (easier)**

Add a `CNAME` record pointing to:
```
your-username.github.io
```

(Check your DNS provider's documentation for exact steps)

### 3. Verify DNS (takes 15-45 minutes)
```bash
nslookup everynation.fi
# Should resolve to GitHub's IP addresses
```

## Updating Your Website

### Make Changes
Edit `index.html`, `styles.css`, or `script.js` as needed

### Push to GitHub
```bash
git add .
git commit -m "Update website content"
git push origin main
```

Your changes will be live within minutes! ⚡

## File Structure for GitHub Pages

```
your-repo/
├── index.html          # Main page (GitHub Pages serves this)
├── styles.css          # Styling
├── script.js           # JavaScript
├── CNAME               # Optional: custom domain
├── .gitignore          # Files to ignore
└── README.md           # Documentation
```

**Important**: The main file MUST be named `index.html` in the root directory.

## Troubleshooting

### Site not showing up
- **Solution**: Wait 2-5 minutes after pushing
- Check Settings → Pages for errors
- Ensure branch is set to "main" and folder is "/" (root)

### Custom domain not working
- **Solution**: Verify DNS records are correct
- Check DNS propagation: https://dnschecker.org/
- Wait up to 48 hours for DNS to propagate
- Clear your browser cache

### CSS/JS not loading
- **Solution**: Refresh page (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)
- Verify file paths in HTML are correct

### 404 Error
- **Solution**: Ensure `index.html` is in repository root
- File names are case-sensitive on Linux servers
- Use lowercase for all filenames

## GitHub Pages Limits

✅ **Allowed**:
- Static HTML, CSS, JavaScript
- Images (PNG, JPG, GIF, SVG, WebP)
- Custom domains
- HTTPS (free)

❌ **Not Allowed**:
- Server-side code (PHP, Python, Node.js)
- Databases
- Large binary files (>100MB limit)
- Commercial websites

## Maintenance

### Keep Your Site Updated
```bash
# Pull latest changes
git pull origin main

# Edit files as needed
# Then push back
git add .
git commit -m "Update description"
git push origin main
```

### Backup Your Site
```bash
# GitHub is your backup, but you can also:
git clone https://github.com/YOUR-USERNAME/repository-name.git
```

## Analytics (Optional)

To track visitors, add this to `index.html` before `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Google Analytics ID.

## Need Help?

- **GitHub Pages Docs**: https://pages.github.com/
- **GitHub Support**: https://support.github.com/
- **DNS Help**: Contact your domain registrar

---

**You're all set!** 🚀 Your church website is now live on GitHub Pages!
