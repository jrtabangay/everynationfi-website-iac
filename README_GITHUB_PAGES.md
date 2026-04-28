# Every Nation Finland Website

A beautiful, responsive church website built with pure **HTML, CSS, and JavaScript** — perfect for hosting on GitHub Pages!

## 🚀 Quick Start

### Local Development
1. Open `index.html` in your browser, or
2. Use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if installed)
npx http-server
```
Then visit: http://localhost:8000

### GitHub Pages Deployment

**Option 1: Automatic (Recommended)**
1. Fork or push this repo to GitHub
2. Go to **Settings → Pages**
3. Select **Branch: main** and **Folder: / (root)**
4. Click **Save**
5. Your site will be live at: `https://your-username.github.io/every-nation-finland-website`

**Option 2: Custom Domain**
1. Add a `CNAME` file with your domain name
2. Update your domain DNS to point to GitHub Pages
3. Go to **Settings → Pages** and select your custom domain

## 📁 File Structure

```
.
├── index.html       # Main website (all content)
├── styles.css       # All styling (no build required!)
├── script.js        # JavaScript for interactivity
├── README.md        # This file
└── CNAME            # Optional: custom domain
```

## ✨ Features

✅ **Hero Section** - "Love God. Love People" tagline  
✅ **About Section** - Mission & 3 core values  
✅ **12 Finnish Cities** - All locations listed  
✅ **Campus Ministry** - University outreach info  
✅ **Events Section** - Upcoming gatherings  
✅ **Contact Form** - Collect visitor inquiries  
✅ **Responsive Design** - Mobile & desktop friendly  
✅ **Social Media Links** - Instagram, Facebook, YouTube  
✅ **Fast Loading** - No build process, pure HTML/CSS/JS  

## 🎨 Customize

### Update Church Information

Edit `index.html` and find these sections:

**Hero Section:**
```html
<h1>Love God.<br>Love People.</h1>
```

**Cities/Locations:**
```html
<div class="city-card">
    <h3>Every Nation Tampere</h3>
    <p class="city-tagline">One Foot on Campus, One Foot in the City</p>
    ...
</div>
```

**Events:**
```html
<div class="event-card">
    <h3>EN Finland National Conference</h3>
    ...
</div>
```

**Contact Information:**
Update `info@everynation.fi` and `+358 40 123 4567` throughout the file

### Change Colors

Edit `styles.css` and modify the color variables:

```css
:root {
    --primary: #1a1a1a;      /* Dark color */
    --secondary: #f97316;    /* Orange accent */
    --accent: #ffffff;       /* White */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1280px and up
- **Tablet**: 768px - 1279px
- **Mobile**: Below 768px

All styles are mobile-first and fully responsive!

## 🔒 No Dependencies

This website has **ZERO dependencies**:
- ✅ No Node.js required
- ✅ No build process
- ✅ No npm packages
- ✅ Works everywhere

Just HTML, CSS, and JavaScript!

## 🌐 GitHub Pages Features

- **Free hosting** - No costs
- **Automatic HTTPS** - Secure by default
- **Custom domains** - Use your own domain
- **Auto-deploy** - Push → Live instantly
- **Version control** - Full Git history

## 📝 Update Your Domain

### Option 1: GitHub Pages Default
Your site will be live at:
```
https://your-github-username.github.io/repository-name
```

### Option 2: Custom Domain
1. Create a file named `CNAME` (no extension) in the root
2. Add your domain name:
```
everynation.fi
```
3. Update your domain's DNS to point to GitHub Pages:
   - Type: `A` records point to GitHub's IPs
   - Or `CNAME` to `username.github.io`

## 🚀 Going Live

1. **Push to GitHub**: `git push origin main`
2. **Enable GitHub Pages**: Settings → Pages → Select "main" branch
3. **Wait 1-2 minutes** for deployment
4. **Visit your site**: `https://your-username.github.io/repository-name`

That's it! 🎉

## 🔧 Performance Tips

- Images are optimized (using emoji + CSS gradients)
- CSS is minified and combined
- No external frameworks
- Page loads in < 1 second

## 📞 Support

- **Email**: info@everynation.fi
- **Phone**: +358 40 123 4567
- **Website**: https://www.everynation.org/

## 📄 License

This project is open source and available for church use.

---

**Built for Every Nation Finland** ❤️

*Simple. Fast. Beautiful.*
