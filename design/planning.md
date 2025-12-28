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


