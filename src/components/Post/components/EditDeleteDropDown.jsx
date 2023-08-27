import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { BsThreeDots } from "react-icons/bs";

import styles from "../post.module.css";
import { Loader } from "../../Loader/Loader";

const EditDeleteDropDown = ({ editBtnHandler, deleteBtnHandler }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const isLoading = false;
  return (
    <div>
      <span className="relative ">
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className="p-2 hover:bg-green-100 hover:text-green-800 cursor-pointer rounded-full "
        >
          <BsThreeDots className={styles.icon} />
        </div>
        <div
          className={`absolute top-8 right-3 flex flex-col gap-1 border border-gray-300 bg-white shadow-lg rounded-md p-2 ${
            showDropDown ? "visible" : "hidden"
          } `}
        >
          <button
            onClick={() => {
              editBtnHandler();
              setShowDropDown(!showDropDown);
            }}
            className="px-3 py-1 font-medium gap-1 flex flex-row items-center text-green-600 cursor-pointer  hover:bg-green-100 rounded-md text-base w-28  "
          >
            <EditIcon /> Edit
          </button>
          <button
            onClick={deleteBtnHandler}
            className="py-1 px-3 gap-1 font-medium  flex flex-row items-center hover:bg-red-100 text-red-600 cursor-pointer   rounded-md text-base"
          >
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <DeleteIcon /> Delete
              </>
            )}
          </button>
        </div>
      </span>
    </div>
  );
};

export default EditDeleteDropDown;
