# Every Nation Finland Website

A modern, responsive church website built with **Next.js**, **React**, and **Tailwind CSS**, featuring all the components found on the Every Nation Finland reference website. Infrastructure is managed with **Terraform** for easy deployment to AWS.

## 🌟 Features

- ✨ **Hero Section** - Eye-catching landing section with call-to-action buttons
- 📖 **About Section** - Mission statement and core values (Christ-Centered, Spirit-Empowered, Socially Responsible)
- 🗺️ **Locations Page** - Display all 12 cities and campuses across Finland
- 🎓 **Campus Ministry** - Information about university outreach programs
- 📅 **Events Section** - Upcoming events and gatherings
- 💌 **Contact Form** - Easy way for visitors to get in touch
- 📱 **Responsive Design** - Mobile-first approach for all devices
- ⚡ **Performance** - Built with Next.js for optimal performance and SEO
- 🌐 **Social Media Integration** - Links to Instagram, Facebook, and YouTube

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Deployment**: Terraform (Infrastructure as Code)
- **Cloud**: AWS (S3 + CloudFront CDN)
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js 18+ and npm
- Terraform 1.14.9+
- AWS CLI configured with credentials
- GitHub account (for CI/CD)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/every-nation-finland-website.git
cd every-nation-finland-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Copy the example environment file and update with your values:

```bash
cp .env.example .env.local
```

### 4. Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
.
├── app/
│   ├── layout.jsx          # Root layout with navigation
│   └── page.jsx            # Home page
├── components/
│   ├── Navigation.jsx      # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About/values section
│   ├── Locations.jsx       # Cities and locations
│   ├── Campus.jsx          # Campus ministry section
│   ├── Events.jsx          # Events section
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer
├── infrastructure/
│   ├── main.tf             # Main Terraform config
│   ├── variables.tf        # Variable definitions
│   ├── terraform.tfvars    # Variable values
│   └── outputs.tf          # Output values
├── styles/
│   └── globals.css         # Global styles with Tailwind
├── package.json            # Node dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
└── deploy.ps1              # PowerShell deployment script
```

## 📦 Building for Production

### Build Static Export

```bash
npm run build
npm run export
```

This generates a static site in the `out/` directory.

## 🚀 Deployment

### Option 1: Using the Deploy Script (PowerShell)

Run the comprehensive deployment script:

```powershell
.\deploy.ps1
```

This script will:
1. Install dependencies
2. Build the Next.js project
3. Export static files
4. Initialize and apply Terraform
5. Deploy to S3
6. Invalidate CloudFront cache

### Option 2: Manual Deployment

```bash
# 1. Build the project
npm run build && npm run export

# 2. Initialize Terraform
cd infrastructure
terraform init

# 3. Plan and apply
terraform plan
terraform apply

# 4. Deploy to S3
aws s3 sync ../out/ s3://$(terraform output -raw s3_bucket_name)/ --delete

# 5. Invalidate CloudFront
aws cloudfront create-invalidation \
  --distribution-id $(terraform output -raw cloudfront_distribution_id) \
  --paths "/*"
```

## 🔐 AWS Deployment Configuration

The Terraform configuration creates:

- **S3 Bucket** - Stores the static website files
- **CloudFront Distribution** - CDN for fast global delivery
- **CloudWatch Logs** - Monitoring and logging

### Required AWS Permissions

Your AWS user/role needs permissions for:
- S3 (CreateBucket, PutObject, PutBucketPolicy)
- CloudFront (CreateDistribution, CreateInvalidation)
- CloudWatch Logs (CreateLogGroup)

## 🔄 CI/CD with GitHub Actions

The repository includes a GitHub Actions workflow that automatically:
- Builds the website on push to `main`
- Runs linting
- Deploys to AWS

To enable:
1. Add AWS credentials to GitHub Secrets
2. Push to main branch
3. Monitor deployment in GitHub Actions

## 📝 Customization

### Update Church Information

Edit the components with your church details:
- [Hero.jsx](components/Hero.jsx) - Main tagline and CTA
- [About.jsx](components/About.jsx) - Mission and values
- [Locations.jsx](components/Locations.jsx) - Your churches and campuses
- [Events.jsx](components/Events.jsx) - Upcoming events
- [Contact.jsx](components/Contact.jsx) - Contact information

### Styling

Customize colors in [tailwind.config.js](tailwind.config.js):

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a1a1a',      // Dark color
      secondary: '#f97316',    // Orange accent
      accent: '#ffffff',       // White
    },
  },
}
```

## 🧹 Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please reach out:
- Email: info@everynation.fi
- Website: [every-nation-finland-website.example.com](https://every-nation-finland-website.example.com)

## 🙏 Acknowledgments

Built for Every Nation Finland with ❤️ to honor God and reach every campus and every city.

---

**Made with Manus** ✨
