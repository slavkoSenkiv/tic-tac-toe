import React from "react";

function Review({ feedback, student }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}

function App() {
  const [studentName, setStudentName] = React.useState("Slav");
  const [feedbackText, setFeedbackText] = React.useState("nice");

  function handleNameChange(event) {
    setStudentName(event.target.value);
  }
  function handleFeedbackTextChange(event) {
    setFeedbackText(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea defaultValue={""} onChange={handleFeedbackTextChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" defaultValue={""} onChange={handleNameChange} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedbackText} student={studentName} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
