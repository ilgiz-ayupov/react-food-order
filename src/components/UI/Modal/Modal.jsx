import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = ({ onCloseModal }) => {
  return <div className={styles.backdrop} onClick={onCloseModal}></div>;
};

const ModalWindow = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onCloseModal, children }) => {
  return (
    <>
      {createPortal(<Backdrop onCloseModal={onCloseModal} />, portalElement)}

      {createPortal(<ModalWindow>{children}</ModalWindow>, portalElement)}
    </>
  );
};

export default Modal;
