variable "root_domain_name" {
  type = string
  description = "Domain Name"
}

variable "application_subdomain" {
  type = string
  description = "Application Domain Name"
}

variable "access_key" {
  type = string
  description = "AWS Access Key"
}

variable "secret_access_key" {
  type = string
  sensitive = true
  description = "AWS Secret Access Key"
}

variable "my_phone_number" {
  type = string
  sensitive = true
  description = "My phone number to send SNS messages to"
}
