export const isLikedByCurrUser = (data, id) => {
  return data?.find((ele) => ele?._id === id) ? true : false;
};
