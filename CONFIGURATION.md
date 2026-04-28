# Configuration Guide

## Environment Variables

### Local Development (.env.local)

Copy from `.env.example` and update:

```env
# Site Configuration
NEXT_PUBLIC_DOMAIN=localhost:3000
NEXT_PUBLIC_SITE_NAME=Every Nation Finland

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@everynation.fi
NEXT_PUBLIC_PHONE=+358 40 123 4567

# Social Media
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/everynationfinland
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/everynationfinland
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/everynationfinland

# Email Configuration (optional - for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# AWS Configuration
AWS_REGION=eu-west-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
```

### Production Deployment

For GitHub Actions, add these as GitHub Secrets:
- `AWS_ROLE_TO_ASSUME`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

## Terraform Configuration

### Variables (infrastructure/variables.tf)

```hcl
variable "aws_region" {
  default = "eu-west-1"
}

variable "domain_name" {
  default = "every-nation-finland-website"
}

variable "log_retention_days" {
  default = 30
}
```

### Custom Terraform Variables

Create `infrastructure/terraform.tfvars` for custom settings:

```hcl
aws_region        = "eu-west-1"
domain_name       = "my-custom-domain"
log_retention_days = 7
```

## Next.js Configuration

### next.config.js

Customize Next.js behavior:

```javascript
// Image optimization
images: {
  domains: ['example.com'],
}

// Build optimization
swcMinify: true

// Redirects
async redirects() {
  return [
    {
      source: '/old-page',
      destination: '/new-page',
      permanent: true,
    },
  ]
}
```

### Build Output

Export static files for deployment:
```bash
npm run export  # Creates /out directory
```

The `/out` directory contains static HTML/CSS/JS ready for S3.

## Tailwind CSS Customization

### tailwind.config.js

```javascript
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#f97316',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

## AWS Configuration

### AWS CLI Setup

```bash
aws configure
AWS Access Key ID: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region: eu-west-1
Default output format: json
```

### S3 Bucket Permissions

Required IAM policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::every-nation-finland-website",
        "arn:aws:s3:::every-nation-finland-website/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetDistribution"
      ],
      "Resource": "*"
    }
  ]
}
```

## CloudFront Configuration

### Cache Behavior

Edit `infrastructure/main.tf`:

```hcl
# Default cache TTL (time to live)
default_ttl = 3600    # 1 hour
max_ttl     = 86400   # 1 day

# For faster updates, reduce these values:
# default_ttl = 300   # 5 minutes
# max_ttl     = 3600  # 1 hour
```

### Custom Domain

Point your domain to CloudFront:
1. Get CloudFront domain: `terraform output cloudfront_domain_name`
2. Create CNAME record in DNS pointing to CloudFront domain
3. Update domain in CloudFront distribution SSL certificate

## GitHub Actions Configuration

### Required Secrets

Add these to GitHub repository settings:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` (optional, defaults to eu-west-1)

### Workflow File

Edit `.github/workflows/deploy.yml` to:
- Change branch triggers
- Update AWS region
- Add additional steps

## Docker Configuration

### docker-compose.yml

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_DOMAIN=localhost:3000
```

Run with:
```bash
docker-compose up
```

## Performance Configuration

### Enable Compression

Already configured in Tailwind + Next.js

### Image Optimization

Edit `next.config.js`:
```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200],
  imageSizes: [16, 32, 48, 64, 96],
}
```

### Code Splitting

Automatic with Next.js, no configuration needed.

## Monitoring & Logging

### CloudWatch Logs

View logs:
```bash
aws logs tail /aws/s3/every-nation-finland-website --follow
```

### Performance Monitoring

Monitor with:
- AWS CloudWatch
- Vercel Analytics (if using Vercel)
- Google Analytics (add `NEXT_PUBLIC_GA_ID`)

## Backup & Recovery

### Backup S3 Data

```bash
aws s3 sync s3://every-nation-finland-website ./backup
```

### Restore from Backup

```bash
aws s3 sync ./backup s3://every-nation-finland-website
```

## Security Configuration

### Environment Variables

Never commit `.env.local`:
```bash
# Already in .gitignore
```

### AWS Security

- Use IAM roles instead of root credentials
- Enable MFA on AWS account
- Rotate access keys regularly
- Use least-privilege policies

### Website Security

- HTTPS enforced by CloudFront
- Security headers configured
- CORS restrictions in S3 policy

---

For more help, contact: info@everynation.fi
