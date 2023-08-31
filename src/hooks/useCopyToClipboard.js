import { toast } from "react-hot-toast";

export const useCopyCurrentLink = () => {
  const copyCurrentLink = (postId) => {
    const currUrl = `http://localhost:3000/post/${postId}`;
    navigator.clipboard
      .writeText(currUrl)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Copying to clipboard failed", err);
      });
  };
  return copyCurrentLink;
};

export default useCopyCurrentLink;
