import React from "react";

export default function Modal({ setSubmit }) {
  return (
    <div className="modal">
      <h2>Message Sen</h2>
      <button onClick={(e) => setSubmit(false)}>X</button>
    </div>
  );
}
