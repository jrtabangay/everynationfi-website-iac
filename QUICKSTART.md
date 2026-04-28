# Quick Start Guide

Get your Every Nation Finland website up and running in minutes!

## 5-Minute Setup

### Step 1: Install Prerequisites
Ensure you have installed:
- [Node.js 18+](https://nodejs.org/)
- [Terraform 1.14.9+](https://www.terraform.io/downloads)
- [AWS CLI](https://aws.amazon.com/cli/)

### Step 2: Clone & Install
```bash
git clone <repository-url>
cd every-nation-finland-website
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000 ✨

### Step 4: Build Static Files
```bash
npm run build && npm run export
```

### Step 5: Deploy to AWS
```bash
# First time setup
cd infrastructure
terraform init

# Deploy
terraform apply
cd ..
aws s3 sync out/ s3://$(cd infrastructure && terraform output -raw s3_bucket_name)/ --delete
```

## Environment Setup

### Local Development
Copy and edit environment file:
```bash
cp .env.example .env.local
```

### AWS Credentials
```bash
aws configure
# Enter: AWS Access Key ID
# Enter: AWS Secret Access Key
# Enter: Default region (eu-west-1)
```

## Project Structure at a Glance

```
📁 Project Root
├── 📁 app/              → Next.js pages and layout
├── 📁 components/       → React components
├── 📁 infrastructure/   → Terraform config
├── 📁 styles/           → CSS and Tailwind
├── package.json         → Dependencies
└── deploy.ps1           → One-click deployment
```

## Available Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run export       # Export static site
npm run lint         # Run ESLint
./deploy.ps1         # Deploy everything (PowerShell)
```

## Customize Your Website

### 1. Update Church Info
Edit these files with your information:
- `components/Hero.jsx` - Main message
- `components/About.jsx` - Mission & values
- `components/Locations.jsx` - Your churches
- `components/Events.jsx` - Your events
- `components/Contact.jsx` - Contact details
- `components/Footer.jsx` - Links & social media

### 2. Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1a1a1a',    // Main color
  secondary: '#f97316',  // Accent color
  accent: '#ffffff',     // Highlight
}
```

### 3. Add Your Logo
Replace images in components or add to `/public` folder

## Deployment Options

### Option 1: One-Click (Recommended)
```powershell
.\deploy.ps1
```

### Option 2: Manual Deployment
```bash
npm run build && npm run export
cd infrastructure
terraform init && terraform apply
cd ..
aws s3 sync out/ s3://your-bucket/ --delete
```

### Option 3: Docker
```bash
docker-compose up
```

## Next Steps

1. ✅ Run locally: `npm run dev`
2. ✅ Customize content (see sections above)
3. ✅ Test in browser at http://localhost:3000
4. ✅ Deploy to AWS (see Deployment Options)
5. ✅ Set up custom domain (optional)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm install` fails | Try `npm install --legacy-peer-deps` |
| Build fails | Clear cache: `rm -rf .next node_modules` then reinstall |
| AWS credentials not found | Run `aws configure` |
| Styles not showing | Clear Next.js cache: `rm -rf .next` |

For more help, see [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

## Need Help?

- 📖 Read [README.md](README.md) for detailed info
- 🐛 Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common issues
- 💬 Contact: info@everynation.fi

---

**Ready to launch your church website?** 🚀
