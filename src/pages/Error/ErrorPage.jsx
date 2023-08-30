import React from "react";
import pageNotFoundData from "../../assets/Page not found.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const style = {
    height: 500
  };
  return (
    <div className="h-screen dark:bg-black flex flex-col items-center justify-center ">
      <div className=" flex items-center justify-center ">
        <Lottie style={style} animationData={pageNotFoundData} />
      </div>
      <Link to={"/"}>
        <button className="solid-btn py-1 px-3 text-xl rounded ">
          Back to home{" "}
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
