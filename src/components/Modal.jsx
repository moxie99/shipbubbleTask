import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, array }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {array.map(() => (
          <>
            <div className="title">
              <h1>{array.title}</h1>
            </div>
            <div className="body">
              <p>{array.body}</p>
            </div>
          </>
        ))}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
