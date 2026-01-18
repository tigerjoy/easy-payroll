# Onboarding & Setup Specification

## Overview
A configurable multi-step wizard that guides new users through the initial setup of their household. It ensures that the core "container" is created while allowing flexibility in how much staff and rule data is collected upfront. Progress is saved at each step.

## User Flows
- **Initial Setup Wizard:** A full-screen experience that triggers for new users or when a new household is initialized.
- **Progress Saving:** Automatic persistence of step completion, allowing users to resume the wizard if they leave mid-way.
- **Configurable Steps:** The system can programmatically define which steps are required and which are optional (e.g., adding the first employee can be skipped).
- **Household Initialization:** Mandatory step to name and establish the primary household record.
- **Transition to App:** Upon completion, the user is seamlessly transitioned into the main application dashboard (Staff Directory).

## UI Requirements
- **Progress Stepper:** High-level progress indicator (e.g., 1 of 4) showing the user's journey.
- **Full-Screen Layout:** A focused, distraction-free layout without the main application shell/sidebar.
- **Step-specific Forms:** Clean, centered forms for Household Name, Optional Employee Details, and Global Default Settings.
- **Dynamic Navigation:** "Next" / "Skip" / "Finish" buttons that adapt based on step requirements and completion status.

## Configuration
- shell: false
