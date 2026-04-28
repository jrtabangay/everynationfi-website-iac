# Troubleshooting Guide for Every Nation Finland Website

## Common Issues and Solutions

### 1. npm install fails

**Problem**: `npm ERR! code ERESOLVE`

**Solution**:
```bash
npm install --legacy-peer-deps
```

### 2. Next.js build fails

**Problem**: Build fails with module not found errors

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### 3. Terraform state errors

**Problem**: Terraform state lock or conflicts

**Solution**:
```bash
cd infrastructure
terraform force-unlock <LOCK_ID>  # if lock is stuck
```

### 4. S3 upload fails

**Problem**: AWS credentials not found

**Solution**:
```bash
# Configure AWS credentials
aws configure

# Or set environment variables
$env:AWS_ACCESS_KEY_ID = "your-key"
$env:AWS_SECRET_ACCESS_KEY = "your-secret"
$env:AWS_REGION = "eu-west-1"
```

### 5. CloudFront invalidation takes time

**Problem**: Changes not visible immediately

**Solution**: CloudFront invalidation can take 5-10 minutes. Check cache TTL in `main.tf`:
```hcl
default_ttl = 3600  # Change to lower value for faster updates
max_ttl     = 86400
```

### 6. Styles not loading

**Problem**: Tailwind CSS not applied

**Solution**:
```bash
# Rebuild Tailwind CSS
npm run build
```

## Getting Logs

### Next.js Development
```bash
npm run dev
```

### Terraform
```bash
TF_LOG=DEBUG terraform apply
```

### CloudWatch Logs
```bash
aws logs tail /aws/s3/every-nation-finland-website --follow
```

## Local Testing

### Test static export
```bash
npm run export
npx http-server out -p 3000
```

### Test with Docker
```bash
docker-compose up
```

## Performance Optimization

### Reduce CloudFront TTL for faster updates
Edit `infrastructure/main.tf`:
```hcl
default_ttl = 300  # 5 minutes instead of 1 hour
```

### Optimize images
- Use Next.js Image component
- Consider image optimization service

### Enable compression
- Already configured in CloudFront
- Ensure gzip is enabled

## Security Checklist

- [ ] AWS credentials stored securely
- [ ] S3 bucket versioning enabled
- [ ] CloudFront HTTPS enforced
- [ ] Environment variables in `.env.local` (not committed)
- [ ] GitHub Actions secrets configured
- [ ] Terraform state file encrypted

## Need Help?

- Check [README.md](README.md)
- Review [Next.js docs](https://nextjs.org/docs)
- Check [Terraform docs](https://www.terraform.io/docs)
- Contact: info@everynation.fi
