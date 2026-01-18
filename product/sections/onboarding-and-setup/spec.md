# Onboarding & Setup Specification

## Overview
A configurable multi-step wizard that guides new users through the initial setup of their household. It ensures that the core "container" is created while allowing flexibility in how much staff and rule data is collected upfront. Progress is saved at each step. This creates the user's first Household and sets it as their active household context.

## User Flows
- **Initial Setup Wizard:** A full-screen experience that triggers for new users or when a new household is initialized.
- **Progress Saving:** Automatic persistence of step completion, allowing users to resume the wizard if they leave mid-way.
- **Configurable Steps:** The system can programmatically define which steps are required and which are optional (e.g., adding the first employee can be skipped).
- **Household Initialization:** Mandatory step to name and establish the primary household record. This becomes the user's active household.
- **Add First Employee (Optional):** When adding an employee during onboarding, this creates both the Employee profile (core identity) and the first Employment record linking them to this household.
- **Transition to App:** Upon completion, the user is seamlessly transitioned into the main application dashboard (Staff Directory) with their new household as the active context.

## UI Requirements
- **Progress Stepper:** High-level progress indicator (e.g., 1 of 4) showing the user's journey.
- **Full-Screen Layout:** A focused, distraction-free layout without the main application shell/sidebar.
- **Step-specific Forms:** Clean, centered forms for Household Name, Optional Employee Details, and Global Default Settings.
- **Dynamic Navigation:** "Next" / "Skip" / "Finish" buttons that adapt based on step requirements and completion status.

## Configuration
- shell: false
