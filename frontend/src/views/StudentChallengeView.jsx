
export default function StudentChallengeView({ onSwitch }) {
  return (
    <main className="challenge-view">
      <header className="challenge-header">
        <h2>Challenge Title</h2>
        <p>Challenge description and instructions go here.</p>
      </header>

      <section className="challenge-body">
        <div className="code-input">Code Input</div>
        <div className="code-output-pane">
          <div className="code-output-header">
            <button className="run-button">Run (ctrl + enter)</button>
          </div>

          <div className="code-output">Code Output</div>
        </div>
      </section>

      <footer className="control-bar">
        <button>Ask For Help</button>
        <span>&lt; 2 / 3 &gt;</span>
        <button onClick={onSwitch}>Back to Lecture</button>
      </footer>
    </main>
  );
}
