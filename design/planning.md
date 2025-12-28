# System Design

***Note:*** This document represents current thinking and is expected to change.

## Student Interface

### 1. User Stories

#### Lecture Mode

- As a student, I want my screen to mirror the screen to mirror the teacher's so I can get a close look at the materials.
- As a student, I want to navigate backward through slides so I can review if I fall behind.
- As a student, I want to return to the current slide after review so I can rejoin the lecture.

#### Challenge Mode

- As a student, I want to see instructions while I work on a challenge.
- As a student, I want to retain access to lecture materials during challenges for any needed reminders.
- As a student, I want to write code and see results side-by-side.
- As a student, I want to decide when to move to the next challenge so I don't feel rushed.
- As a student, I want to request help so the teacher knows I'm stuck and where.

### 2. Functional Requirements

- The system must display the current slide synchronized with the teacher.
- The system must allow backward navigation through the slides.
- The system must allow the student to rejoin the live slide.
- The system must present challenge instructions and a coding environment.
- The system must allow access to lecture materials during challenges.
- The system must allow the student to request help from the teacher during a challenge.

### 3. UI Concepts

- The student interface operates in two modes: lecture and challenge.
- Lecture mode prioritizes slide visibility with minimal controls and distractions.
- Challenge mode presents code instructions, code input, and output simultaneously.
- A persistent control area provides status, lecture material reference, and access to help.

### 4. UI Sketches

#### Lecture Mode
[Student Lecture View](./sketches/student-lecture-view.png)

<img src="./sketches/student-lecture-view.png" alt="UI sketch of student's view during lecture mode" width="500">

#### Challenge Mode
[Student Challenge View](./sketches/student-challenge-view.png)

<img src="./sketches/student-challenge-view.png" alt="UI sketch of student's view during challenge mode" width="500">

## Teacher Interface

### 1. Role Definition

Teachers use the system to design and deliver interacive lessons that interleave lecture content with student challenges. During live instruction, the teacher's primary focus is on presenting material clearly and responding to student needs without navigating complex interfaces or managing multiple tools. The system should support flexible lesson sequencing while minimizing cognitive load during lecture delivery.

### 2. User Stories

#### Lesson Authoring & Setup

- As a teacher, I want to upload and organize lecture materials (slides, PDFs, videos, images, screen streams, etc.) so that I can reuse existing teaching resources.
- As a teacher, I want to define an ordered sequence of lecture segments and challenges so that I can control the pacing of the lesson.
- As a teacher, I want to interleave lecture content and challenges so that students can practice concepts immediately after instruction.
- As a teacher, I want to specify which lecture materials remain accessible to students during later parts of the lesson so that they can review earlier content if needed.
- As a teacher, I want to add presentation notes for myself that are visible only to me during lecture delivery.

#### Lecture Delivery Mode

- As a teacher, I want a simple, presentation-focused interface while lecturing so that I am not distracted by administrative controls.
- As a teacher, I want to see student help requests in a side pane so that I can respond without interrupting the flow of the lecture.
- As a teacher, I want to plan moments in the lesson where students can ask questions so that I can encourage engagement.
- As a teacher, I want to review and selectively display student questions so that I can screen for appropriateness before saring them with the class.
- As a teacher, I want to optionally display student questions anonymously to the class while addressing them.

#### Challenge Facilitation Mode

- As a teacher, I want to know which students are struggling with specific challenges so that I can provide targeted help.
- As a teacher, I want to view a student's work (code, output, and test results) when they ask for help so that I can quickly understand their issue.
- As a teacher, I want to see aggregate progress information for challenges so that I can judge whether the class is ready to move on.
- As a teacher, I want to monitor time spent on challenges so that I can adjust pacing or provide hints to the whole class when needed.

#### Lesson Monitoring & Feedback

- As a teacher, I want to see how many students have completed each challenge so that I can assess overall progress.
- As a teacher, I want to see average completion times for challenges so that I can identify unexpectedly difficult material.
- As a teacher, I want to be aware of remaining time for timed challenges so that I can manage the lesson schedule effectively.

### 3. Functional Requirements

#### Lesson Structure & Content

- The system shall allow teachers to upload multiple types of lecture materials, including documents, media, and live screen streams.
- The system shall allow teachers to define an explicit sequene of lecture segments and challenge segments.
- The system shall allow teachers to control which lecture materials remain accessible to students at each point in the lesson.
- The system shall support teacher-authored presentation notes that are not visible to students.

#### Lecture Mode Behavior

- The system shall present lecture materials in a distraction-minimized interface during lecture delivery.
- The system shall display student help requests in a secondary pane without obscuring lecture content.
- The system shall support teacher-defined question periods during which students may submit questions.
- The system shall allow teachers to approve or reject student questions before displaying them to the class.
- The system shall support anonymous display of student questions when enabled by the teacher.

#### Challenge Mode Behavior

- The system shall notify the teacher when a student requests help during a challenge.
- The system shall display the student's name, current challenge, submitted code, latest output, and test results when viewing a help request.
- The system shall provide aggregate statistics for each challenge, including completion counts and average time spent.
- The system shall display remaining time for challenges with time limits.

#### Monitoring & Pacing Support

- The system shall update aggregate progress statistics in near real-time during challenges.
- The system shall allow the teacher to determine when to complete a challenge segment and whether to disrupt student progress for further lecturing.
- The system shall preserve student access to previously released lecture materials when configured by the teacher.

### 4. UI Concepts

#### Teacher Dashboard (Pre-Lesson)

- Lesson list
- Lesson creation/edit entry points
- Status indicators (draft, ready, previously run)

#### Lesson Editor

- Material upload panel
- Lesson timeline/sequence view
    - Lecture segments
    - Challenge segments
- Access control indicators for student-visible materials
- Teacher-only notes editor
- Challenge test editor

#### Lecture Delivery View

- Main pane: current lecture material
- Teacher notes (private)
- Side pane:
    - Help requests
    - Question submissions (screened)
- Minimal controls for advancing lesson state

#### Challenge Facilitation View

- Aggregate progress summary (counts, averages, timers)
- Help request queue
- Detailed student view:
    - Challenge context
    - Code editor (read-only)
    - Output and test results
