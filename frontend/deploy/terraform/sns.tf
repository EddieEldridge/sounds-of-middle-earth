resource "aws_sns_topic" "feedback_topic" {
  name = "some-feedback-topic"
}

resource "aws_sns_topic_subscription" "feedback_topic_subscription" {
  topic_arn = aws_sns_topic.feedback_topic.arn
  protocol  = "sms"
  endpoint  = var.my_phone_number
}

resource "aws_sns_topic_policy" "feedback_topic_policy" {
  arn = aws_sns_topic.feedback_topic.arn

  policy = data.aws_iam_policy_document.feedback_topic_policy_document.json
}

data "aws_iam_policy_document" "feedback_topic_policy_document" {
  policy_id = "some_feedback_policy_id"

  statement {
    actions = [
      "SNS:Publish"
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceOwner"

      values = [
        "arn:aws:iam::775399702380:root"
      ]
    }

    effect = "Allow"

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    resources = [
      aws_sns_topic.feedback_topic.arn,
    ]

    sid = "some_feedback_policy_sid"
  }
}