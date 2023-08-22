import EmojiPicker from "emoji-picker-react";
import React from "react";

const Emoji = ({ emojiSelectHandler, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50    w-full h-full ">
      <div className="fixed inset-0" onClick={onClose}></div>
      <div className="absolute xl:top-2/4 shadow-lg border rounded-lg border-gray-400 xl:right-2/3  ">
        <EmojiPicker
          height="350px"
          lazyLoadEmojis={true}
          skinTonesDisabled={true}
          onEmojiClick={emojiSelectHandler}
        />
      </div>
    </div>
  );
};

export default Emoji;
