export const PostsShimmerLoader = () => {
  return (
    <>
      <div className=" border dark:border-none rounded-md shadow-lg max-w-[40rem] w-full m-auto my-2 dark:bg-[color:var(--secondary-dark-color)] bg-white p-4 ">
        <div className="flex gap-2 ">
          <div className="h-10 w-10 bg-gray-300   animate-pulse rounded-full "></div>
          <div className="w-full flex flex-col  ">
            <div className=" h-3 w-24 bg-gray-300 animate-pulse "></div>
            <div className=" h-2 w-1/4 bg-gray-300    animate-pulse my-1 rounded-xl "></div>
            <div className=" h-2 w-1/3 bg-gray-300  animate-pulse my-1 rounded-xl "></div>
            <div className=" h-2 w-1/2 bg-gray-300   animate-pulse my-1 rounded-xl "></div>

            <div className="w-full bg-gray-300 h-80 rounded my-4 animate-pulse "></div>
            <div className=" flex gap-4 items-center ">
              <span className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></span>
              <span className="w-6 h-6 bg-gray-300 rounded-full animate-pulse "></span>
              <span className="w-6 h-6 bg-gray-300 rounded-full animate-pulse "></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ShimmerProfileTile = () => {
  return (
    <>
      <div className=" flex items-center justify-between w-full my-2  gap-4 p-2 border dark:border-none rounded-md dark:bg-[color:var(--ternary-dark-color)] ">
        <div className="flex items-center gap-2 ">
          <div className=" w-10 h-10 bg-gray-300 rounded-full animate-pulse "></div>
          <div className=" bg-gray-300 w-36 h-5 animate-pulse "></div>
        </div>
        <button className="h-7 w-16 rounded text-sm font-medium bg-gray-300 animate-pulse    "></button>
      </div>
    </>
  );
};

export const ProfileDetailsShimmer = () => {
  return (
    <div>
      <div className="relative  py-1 dark:bg-gray-700 ">
        <div className={`h-[15rem] bg-slate-300 animate-pulse  `}></div>
        <div className=" w-full   p-4 flex justify-end ">
          <div className=" absolute left-3 top-1/2 w-40 h-40 bg-gray-400 rounded-full animate-pulse  "></div>
          <div className=" h-8 w-28 animate-pulse rounded-md bg-gray-300  "></div>
        </div>
      </div>
      <div className="my-3">
        <p className="h-4 w-1/4 my-1 bg-gray-300 animate-pulse rounded-lg "></p>
        <p className="h-4 w-1/3 my-1 bg-gray-300 animate-pulse rounded-lg "></p>
        <p className="h-4 w-1/2 bg-gray-300 animate-pulse rounded-lg "></p>
      </div>
    </div>
  );
};

export const SpinLoader = () => {
  return (
    <div className=" dark:text-[color:var(--primary-color)] flex flex-col items-center justify-center h-[80vh] w-full  ">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
      <div className=" font-bold text-lg p-2 ">Loading...</div>
    </div>
  );
};

export const Loader = () => {
  return (
    <div className="dark:text-[color:var(--dark-text-color)]">
      <div
        className="inline-block h-4 w-4 mx-auto animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};

export const ShimmerPosts = () => {
  return [...Array(5)].map((_, idx) => <PostsShimmerLoader key={idx} />);
};
