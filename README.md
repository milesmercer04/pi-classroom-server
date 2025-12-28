# pi-classroom-server
Repository for Gonzaga University Honors Capstone project. This project develops a live lecture service intended for deployment to a single Raspberry Pi chip. The server will allow students to follow along with lectures and participate in live activities with teacher connectivity and support.

---

## Project Goals

The primary goals of this project are to:

- Support **live, instructor-led programming lessons**
- Provide students with a **structured transition** from lecture to hands-on challenges
- Allow students to write, run, and receive feedback on code in a controlled environment
- Enable instructors to monitor progress and respond to help requests (future work)

The system is intentionally designed to feel "calm and predictable" for students, reducing cognitive overhead during learning.

---

## Current State (Early Prototype)

At this stage, the project consists of a **React-based frontend prototype** that focuses on layout, interaction flow, and UI structure.

### Implemented Views

- **Lecture View**
    - Displays instructor-driven lecture content (currently stubbed)
    - Shows live status and slide position
    - Allows students to request help
    - Provides a stand-in button to switch view to challenge mode

- **Challenge View**
    - Displays challenge instructions and context
    - Provides side-by-side code input and output panes
    - Includes a run action with keyboard shortcut affordance
    - Displays test status summary (stubbed)
    - Retains access to lecture slides via a preview thumbnail

All execution, testing, and backend functionality is currently stubbed or visual-only.

---

## Planned Features (High-Level)

These features are **planned but not yet implemented**:

- Code execution and sandboxing
- Automated test running and result reporting
- Instructor dashboard and student monitoring
- Real-time synchronization between instructor and students
- Python-based backend services

---

## Repository Structure

```text
.
├── planning/           # Planning documents guiding development
│   ├── sketches/       # UI-sketches made in PowerPoint before writing JSX
|   ├── planning.md     # Design notes, links to UI-sketches, and planning artifacts
|   └── ...
├── frontend/           # React frontend (Vite)
│   ├── src/
│   │   ├── views/      # High-level student views (lecture, challenge)
│   │   ├── App.jsx     # Root application component
│   │   └── index.css   # Global styles and layout primitives
│   └── ...
├── backend/            # Reserved for future Python backend work
└── README.md
```

---

## Development Notes

- Frontend built with **React + Vite**
- JavaScript is being used initially; TypeScript may be introduced later
- Styling is plain CSS with an emphasis on reusable layout primitives
- No routing is used at this time; views represent application states

---

## Status

This project is under active development and is not yet production-ready. The current focus is on UI structure, interaction flow, and instructional design.
