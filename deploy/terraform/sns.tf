resource "aws_sns_topic" "feedback_topic" {
  name = "some-feedback-topic"
}

resource "aws_sns_topic_subscription" "feedback_topic_subscription" {
  topic_arn = aws_sns_topic.feedback_topic.arn
  protocol  = "sms"
  endpoint  = var.my_phone_number
}