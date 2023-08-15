import React, { useState } from "react";

const Tab = ({ text, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`px-6 cursor-pointer ${
        isActive && " border-b-4 border-green-600 "
      } py-3`}
    >
      <div className="text-md font-semibold ">{text}</div>
    </div>
  );
};

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onClickHandler = (idx) => {
    setActiveTab(idx);
  };

  return (
    <div className="flex flex-row items-center  px-4   ">
      {children.map((item, idx) => (
        <Tab
          text={item}
          key={idx}
          isActive={activeTab === idx}
          onClick={() => onClickHandler(idx)}
        />
      ))}
    </div>
  );
};

export default Tabs;
