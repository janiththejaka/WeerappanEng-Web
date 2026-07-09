# Telegram Integration

## Purpose

Telegram is used to notify the admin when a new website inquiry is submitted.

## Flow

Webhook Trigger
→ Normalize Inquiry Data
→ HTTP Request Node
→ Telegram Bot API

## API Used

Telegram Bot API

Endpoint:

POST /bot<TOKEN>/sendMessage

## Dynamic Fields Used

- customerName
- customerEmail
- customerWhatsapp
- subject
- message

## Important Notes

Bot token and chat ID must not be committed to GitHub.