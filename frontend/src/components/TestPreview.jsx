import React from "react";

const TestPreview = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(e.target[0].value)

  };

  return (
    <section className="feature">
      <h2>Try Link Preview 🔗</h2>

      <form onSubmit={submitHandler}>
        <input type="url" name="url"></input>
        <button>Test</button>
      </form>
    </section>
  );
};

export default TestPreview;
