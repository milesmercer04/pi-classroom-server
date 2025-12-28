/**
 * StudentChallengeView.jsx
 * 
 * Student-facing challenge mode view.
 * 
 * Responsibilities:
 * - Present challenge instructions and context
 * - Provide a workspace for writing and running code
 * - Display execution output and test feedback
 * 
 * This view is intentionally self-paced:
 * - Students control when code is run (no auto-run)
 * - Progress through challenges is not time-locked or determined by test
 *   results (i.e., students can keep working after passing all tests)
 * 
 * Note:
 * - Execution, testing, and modal behavior are stubbed visually and will be
 *   wired in future iterations.
 */

export default function StudentChallengeView() {
  return (
    <main className="challenge-view">
      <header className="challenge-header">
        <div className="challenge-info">
          {/* Challenge title and instructions (future: will be auto-filled from lesson script) */}
          <h2>Challenge Title</h2>
          <p>Challenge description and instructions go here.</p>
        </div>
        
        <div className="challenge-tools">
          {/* Preview of lesson slides for reference during exercises */}
          <div className="slide-preview">Slides</div>

          {/* Executes student code (keyboard shortcut shown for flexibility) */}
          <button className="run-button">Run (ctrl + enter)</button>
        </div>
      </header>

      <section className="challenge-body">
        {/* Code authoring area (future: mini-IDE component) */}
        <div className="pane code-input">Code Input</div>

        {/* Code execution output (future: console, canvas, animation, etc.) */}
        <div className="pane code-output">Code Output</div>
      </section>

      <footer className="control-bar">
        {/* Student help request specific to the current challenge */}
        <button>Ask For Help</button>

        {/* Challenge progress within the lesson (future: < and > will be navigation buttons) */}
        <span>&lt; 2 / 3 &gt;</span>

        {/* Test summary and entry point for detailed test report */}
        <div className="test-status">
          <button className="test-status-button">
            Passing 2 of 4 tests
          </button>
        </div>
      </footer>
    </main>
  );
}
