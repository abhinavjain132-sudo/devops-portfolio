terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = var.aws_region
}
resource "aws_s3_bucket" "terraform_practice" {
  bucket = var.bucket_name

  tags = {
    Project     = "terraform-learning"
    Environment = "staging"
  }
}