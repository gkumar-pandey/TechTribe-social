import Avatar from "../Avatar/Avatar";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import { usePosts } from "../../context";
import { POST_MODAL } from "../../reducer";
import styles from "./styles.module.css";

const FeedPostBtn = ({ user }) => {
  const { dispatchModal } = usePosts();
  return (
    <>
      <button
        onClick={() => dispatchModal({ type: POST_MODAL })}
        className={styles.btn}
      >
        <div className="flex flex-row gap-1 items-center  w-full ">
          <span>
            <Avatar image={user?.profileImage} alt={user?.firstName} />
          </span>
          <div className={styles.btn_text}>What's happening ?</div>
        </div>
        <div className="flex items-center gap-3 my-1">
          <div className={styles.icon}>
            <AddReactionOutlinedIcon />
            <span>Reaction</span>
          </div>
          <div className={styles.icon}>
            <AddPhotoAlternateOutlinedIcon />
            <span>Photo or GIFs</span>
          </div>
        </div>
      </button>
    </>
  );
};

export default FeedPostBtn;
