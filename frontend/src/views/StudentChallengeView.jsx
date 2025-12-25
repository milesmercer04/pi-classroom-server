
export default function StudentChallengeView({ onSwitch }) {
  return (
    <main className="challenge-view">
      <header className="challenge-header">
        <div className="challenge-info">
          <h2>Challenge Title</h2>
          <p>Challenge description and instructions go here.</p>
        </div>
        
        <div className="challenge-tools">
          <div className="slide-preview">
            Slides
          </div>
          <button className="run-button">Run (ctrl + enter)</button>
        </div>
      </header>

      <section className="challenge-body">
        <div className="pane code-input">Code Input</div>
        <div className="pane code-output">Code Output</div>
      </section>

      <footer className="control-bar">
        <button>Ask For Help</button>
        <span>&lt; 2 / 3 &gt;</span>
        <button onClick={onSwitch}>Back to Lecture</button>
      </footer>
    </main>
  );
}
