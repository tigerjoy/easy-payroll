# User Authentication Specification

## Overview
A single authentication page with tabbed Login/Register views, supporting both Social Auth (Google, Facebook) and email/password. Features email verification for new signups, code-based password reset, and smart post-login redirects based on user state.

## User Flows
- **Registration:** User selects Register tab → Enters name, email, password OR clicks Google/Facebook → Receives verification email with code → Enters code → Account created → Redirects to Onboarding
- **Login:** User selects Login tab → Enters email/password OR clicks Google/Facebook → Authenticated → Redirects to previous page (if available), Onboarding (if new), or Staff Directory (default)
- **Forgot Password:** User clicks "Forgot Password" → Enters email → Receives verification code → Enters code on page → Sets new password → Redirects to Login

## UI Requirements
- **Layout:** Centered card with logo/branding at top
- **Tabs:** Login and Register tabs to switch between forms
- **Social Auth Buttons:** Google and Facebook buttons prominently displayed (above or below form)
- **Login Form:** Email field, password field, "Forgot Password" link, submit button
- **Register Form:** Name field, email field, password field (with confirmation or strength indicator), submit button
- **Verification Screen:** Code input field for email verification and password reset
- **Error States:** Inline validation and error messages for invalid inputs

## Configuration
- shell: false
