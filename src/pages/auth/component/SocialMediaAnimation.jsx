import React from "react";
import animationData from "../../../assets/animation_lluwx3de.json";
import Lottie from "lottie-react";

const SocialMediaAnimation = () => {
  const style = {
    height: 700
  };
  return (
    <>
      <div className=" sm:hidden flex items-center justify-center ">
        <Lottie style={style} animationData={animationData} />
      </div>
    </>
  );
};

export default SocialMediaAnimation;
