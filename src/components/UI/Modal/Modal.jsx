import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";
function Modal(props) {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClose} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="ModalHeader">
          <div className="ModalTitle">
            <div className="Right">{props.modalTitle}</div>
            <div className="Left">
              <Button btnType="Close" clicked={props.modalClose}>
                <i className="fa fa-times"></i>
              </Button>
            </div>
          </div>
        </div>
        <hr />
        {props.children}
      </div>
    </>
  );
}

export default Modal;
