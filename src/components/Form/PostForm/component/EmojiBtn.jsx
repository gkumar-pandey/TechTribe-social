import React from "react";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";

const EmojiBtn = ({ onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="flex items-center gap-1 text-[color:var(--primary-color)] font-semibold "
      >
        <AddReactionOutlinedIcon />
      </div>
    </>
  );
};

export default EmojiBtn;
