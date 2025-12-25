
export default function StudentLectureView({ onSwitch }) {
  return (
    <main className="lecture-view">
      <section className="lecture-content">
        <div className="pane slide-placeholder">Lecture Content</div>
      </section>

      <footer className="control-bar">
        <button>Ask For Help</button>
        <span>&lt; 13 / 13 &gt;</span>
        <span>You're Live</span>
        <button onClick={onSwitch}>Go to Challenge</button>
      </footer>
    </main>
  );
}
