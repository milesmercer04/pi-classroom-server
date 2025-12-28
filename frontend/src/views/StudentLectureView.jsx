/**
 * StudentLectureView.jsx
 * 
 * Student-facing lecture mode view.
 * 
 * Responsibilities:
 * - Display live lecture content (slides, demos, etc.)
 * - Reflect the teacher-controlled lecture progression
 * - Provide basic session controls (help request, progress, live status)
 * 
 * This view is intentionally passive:
 * - The slide content is driven by the instructor
 * - Students will have limited independent navigation (e.g., look-back)
 * 
 * Props:
 * - onSwitch: function
 *   Callback used to transition from lecture mode to challenge mode
 */

export default function StudentLectureView({ onSwitch }) {
  return (
    <main className="lecture-view">
      <section className="lecture-content">
        {/* Placeholder for live lecture slides or embedded content */}
        <div className="pane slide-placeholder">Lecture Content</div>
      </section>

      <footer className="control-bar">
        {/* Student help request (future: signal instructor + context) */}
        <button>Ask For Help</button>

        {/* Current slide position within the lecture
            (future: < and > will be navigation buttons) */}
        <span>&lt; 13 / 13 &gt;</span>

        {/* Indicates whether the student is synced with the live lecture
            (future: will be a button to return to live view after look-back, saying "Return to
            Live" instead of "You're Live" in that case) */}
        <span>You're Live</span>

        {/* Switch to the student challenge view (temporary feature for testing and dev) */}
        <button onClick={onSwitch}>Go to Challenge</button>
      </footer>
    </main>
  );
}
