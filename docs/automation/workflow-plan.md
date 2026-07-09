# Contact Inquiry Automation Workflow Plan

## Workflow Name

V2 - Contact Inquiry Automation

## Trigger

n8n Webhook Trigger

## Webhook Method

POST

## Webhook Path

contact-inquiry

## Initial Test Payload

```json
{
  "id": "test-message-001",
  "name": "Janith Test User",
  "email": "customer@example.com",
  "whatsapp": "+94771234567",
  "subject": "Need construction quotation",
  "message": "We need a quotation for a road construction project in Colombo.",
  "status": "NEW",
  "created_at": "2026-07-09T10:00:00Z"
}

# Webhook Testing Notes

## Test Status

Webhook test completed successfully.

## Tool Used

Thunder Client / Postman / cURL

## Method

POST

## Header

Content-Type: application/json

## What was learned

- A Webhook node starts an n8n workflow.
- A POST request sends data into n8n.
- n8n wraps incoming request data inside JSON fields such as body, headers, query, and params.
- Contact form data can be accessed in n8n expressions using body fields.