import Avatar from "../Avatar/Avatar";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";

const FeedPostBtn = ({ user, togglePostFormModal }) => {
  return (
    <>
      <button
        onClick={togglePostFormModal}
        className=" flex flex-col gap-2 rounded-md bg-white p-4 my-2 shadow-md w-full  mx-auto "
      >
        <div className="flex flex-row gap-1 items-center  w-full ">
          <span>
            <Avatar image={user?.profileImage} alt={user?.firstName} />
          </span>

          <div className="px-2 py-1 text-lg border border-gray-600 rounded w-full text-start font-thin hover:bg-slate-50 ">
            What's happening ?
          </div>
        </div>
        <div className="flex  items-center gap-3 my-1 ">
          <div className="flex items-center gap-1 text-green-700 font-semibold ">
            <AddReactionOutlinedIcon />
            <span>Reaction</span>
          </div>
          <div className="flex items-center gap-1 text-green-700 font-semibold ">
            <AddPhotoAlternateOutlinedIcon />
            <span>Photo or GIFs</span>
          </div>
        </div>
      </button>
    </>
  );
};

export default FeedPostBtn;
