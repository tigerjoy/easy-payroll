# Application Shell Specification

## Overview
HomeStaff uses a sidebar navigation pattern optimized for household workforce management. The persistent left sidebar provides quick access to all main sections, while the user menu at the bottom keeps account actions easily accessible.

## Navigation Structure
- **Staff Directory** → `/staff` (Default view)
- **Attendance & Holidays** → `/attendance`
- **Payroll & Finance** → `/payroll`
- **Settings & Access** → `/settings`

### Separate Flows (Not in Main Nav)
- **Onboarding & Setup** — Displayed for new users before accessing the main app
- **Employee Portal** — Public-facing page at `/portal`, accessible without authentication

## User Menu
Located at the bottom of the sidebar, the user menu displays:
- User avatar (with initials fallback)
- User name
- Current household name
- Dropdown with: Switch Household, Account Settings, Logout

## Layout Pattern
- **Sidebar Width:** 240px (desktop), full overlay (mobile)
- **Content Area:** Flexible, fills remaining space
- **Header:** Minimal — only visible on mobile with hamburger menu and logo

## Responsive Behavior
- **Desktop (≥1024px):** Full sidebar always visible, no header
- **Tablet (768px–1023px):** Sidebar collapses to icons only, expands on hover
- **Mobile (<768px):** Sidebar hidden, hamburger menu in sticky header, sidebar slides in as overlay

## Design Tokens Applied
- **Primary (amber):** Active nav items, primary buttons
- **Secondary (orange):** Hover states, accent highlights
- **Neutral (stone):** Sidebar background, borders, text
- **Typography:** Nunito Sans for nav labels and UI text

## Design Notes
- Navigation icons accompany each nav item for visual recognition
- Active nav item has amber-500 left border accent and amber-50 background
- Sidebar has subtle border-right separator
- Dark mode: Sidebar uses stone-900 background, text adapts accordingly
