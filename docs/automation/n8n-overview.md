# n8n Automation Overview

## Purpose

This project uses n8n as an external automation layer for the construction company website.

The current website remains independent from n8n. Contact inquiries are first saved into Supabase, and n8n is triggered afterwards through a webhook-based automation flow.

## Core Rule

The main website must continue working even if n8n is offline.

## Current Architecture

Visitor submits contact form
→ Next.js Server Action
→ Supabase contact_messages table
→ Admin dashboard can view the message
→ Supabase Database Webhook triggers n8n
→ n8n sends Telegram alert and Gmail acknowledgement

## Why n8n is used

n8n is used to learn and implement:

- Webhooks
- HTTP Request nodes
- Expressions and variables
- REST API integrations
- JavaScript Code nodes
- Telegram automation
- Gmail automation
- Supabase integrations
- AI-based workflow extensions