/**
 * App.jsx
 * 
 * Root application component for the student-facing UI.
 * 
 * Responsibilities:
 * - Maintain high-level application mode (lecture vs. challenge)
 * - Render the appropriate view based on the current mode
 * 
 * This component intentionally avoids routing for now. The lecture and
 * challenge views represent different states of the same session rather than
 * separate navigation targets.
 */

import { useState } from 'react';
import StudentLectureView from "./views/StudentLectureView";
import StudentChallengeView from "./views/StudentChallengeView";

function App() {
  // Controls which major student view is currently active
  // Possible values: "lecture" | "challenge"
  const [mode, setMode] = useState("lecture");

  // Switches the lecture view to challenge mode (presumably from lecture mode)
  const switchToChallenge = () => {
    setMode("challenge");
  }

  // Note: Because the default mode is "lecture," we currently omit a switchToLecture() function
  // and use the refresh button instead

  return (
    <>
      {mode === "lecture" && <StudentLectureView onSwitch={switchToChallenge} />}
      {mode === "challenge" && <StudentChallengeView />}
    </>
  );
}

export default App;
