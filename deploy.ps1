# Deployment Script for Every Nation Finland Website

$ErrorActionPreference = "Stop"

Write-Host "🚀 Deploying Every Nation Finland Website" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

# Check if Node.js is installed
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if Terraform is installed
if (-not (Get-Command terraform -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Terraform is not installed. Please install Terraform first." -ForegroundColor Red
    exit 1
}

# Check if AWS CLI is installed
if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
    Write-Host "❌ AWS CLI is not installed. Please install AWS CLI first." -ForegroundColor Red
    exit 1
}

# Step 1: Install dependencies
Write-Host "`n📦 Installing dependencies..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ npm install failed" -ForegroundColor Red
    exit 1
}

# Step 2: Build the Next.js project
Write-Host "`n🔨 Building Next.js project..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ npm run build failed" -ForegroundColor Red
    exit 1
}

# Step 3: Export static site
Write-Host "`n📤 Exporting static site..." -ForegroundColor Cyan
npm run export
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ npm run export failed" -ForegroundColor Red
    exit 1
}

# Step 4: Initialize Terraform
Write-Host "`n🏗️  Initializing Terraform..." -ForegroundColor Cyan
Set-Location infrastructure
terraform init
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Terraform init failed" -ForegroundColor Red
    Set-Location ..
    exit 1
}

# Step 5: Plan Terraform
Write-Host "`n📋 Planning Terraform deployment..." -ForegroundColor Cyan
terraform plan -out=tfplan
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Terraform plan failed" -ForegroundColor Red
    Set-Location ..
    exit 1
}

# Step 6: Apply Terraform
Write-Host "`n✅ Applying Terraform configuration..." -ForegroundColor Cyan
terraform apply tfplan
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Terraform apply failed" -ForegroundColor Red
    Set-Location ..
    exit 1
}

# Step 7: Get outputs
Write-Host "`n📊 Getting deployment outputs..." -ForegroundColor Cyan
$S3Bucket = terraform output -raw s3_bucket_name
$CloudFrontDomain = terraform output -raw cloudfront_domain_name

Set-Location ..

# Step 8: Deploy to S3
Write-Host "`n☁️  Uploading website to S3..." -ForegroundColor Cyan
aws s3 sync out/ "s3://$S3Bucket/" --delete
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ S3 sync failed" -ForegroundColor Red
    exit 1
}

# Step 9: Invalidate CloudFront cache
Write-Host "`n♻️  Invalidating CloudFront cache..." -ForegroundColor Cyan
Set-Location infrastructure
$DistributionId = terraform output -raw cloudfront_distribution_id
Set-Location ..

aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/*"
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ CloudFront invalidation failed" -ForegroundColor Red
    exit 1
}

Write-Host "`n✨ Deployment completed successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "📍 Website URL: https://$CloudFrontDomain" -ForegroundColor Yellow
Write-Host "🪣 S3 Bucket: $S3Bucket" -ForegroundColor Yellow
