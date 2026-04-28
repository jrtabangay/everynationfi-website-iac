output "website_endpoint" {
  value       = aws_cloudfront_distribution.website.domain_name
  description = "CloudFront domain name to access the website"
}

output "s3_bucket" {
  value       = aws_s3_bucket.website.id
  description = "S3 bucket for website content"
}

output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.website.id
  description = "CloudFront distribution ID"
}

output "deployment_instructions" {
  value = <<-EOT
    Deployment Instructions:
    1. Build the Next.js project: npm run build && npm run export
    2. Deploy to S3: aws s3 sync out/ s3://${aws_s3_bucket.website.id}/
    3. Invalidate CloudFront cache: aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.website.id} --paths "/*"
  EOT
  description = "Instructions for deploying the website"
}
