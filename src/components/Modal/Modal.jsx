import React from "react";
import { createPortal } from "react-dom";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const Modal = ({ children, onClose, isOpen, title }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div
          className="fixed inset-0 bg-black opacity-30"
          onClick={onClose}
        ></div>
        <div className="bg-white rounded-lg p-4 z-10 max-w-[40rem] w-full mx-1">
          <div className=" flex justify-between items-center ">
            <h2 className="text-lg font-extrabold ">{title}</h2>
            <p className=" hover:bg-slate-100 rounded-full p-2 ">
              <ClearOutlinedIcon
                className="text-2xl font-bold cursor-pointer  "
                onClick={onClose}
              />
            </p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
