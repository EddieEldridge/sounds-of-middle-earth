# SSL Cert
data "aws_acm_certificate" "ssl_cert" {
   domain   = var.root_domain_name
   statuses = ["ISSUED"]
}