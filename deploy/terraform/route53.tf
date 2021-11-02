# Route53/DNS
resource "aws_route53_zone" "zone" {
  name = var.root_domain_name
}

resource "aws_route53_record" "frontend_record" {
  zone_id = aws_route53_zone.zone.zone_id
  name    = var.application_subdomain
  type    = "A"
  alias {
    name = aws_cloudfront_distribution.frontend_cloudfront_distribution.domain_name
    zone_id = aws_cloudfront_distribution.frontend_cloudfront_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}