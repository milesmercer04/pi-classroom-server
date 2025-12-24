import { useState } from 'react';
import StudentLectureView from "./views/StudentLectureView";
import StudentChallengeView from "./views/StudentChallengeView";

function App() {
  const [mode, setMode] = useState("lecture");  // "lecture" | "challenge"

  return (
    <>
      {mode === "lecture" && <StudentLectureView onSwitch={() => setMode("challenge")} />}
      {mode === "challenge" && <StudentChallengeView onSwitch={() => setMode("lecture")} />}
    </>
  );
}

export default App;
