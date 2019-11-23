//action creator
export const selectBucket = num => {
  return {
    type: "BUCKET_SELECTED",
    payload: num
  };
};

export const addNewTodo = todoText => {
  return {
    type: "ADD_NEW_TODO",
    payload: todoText
  };
};

export const checkedTodo = checkedObj => {
  return {
    type: "CHECKED_TODO",
    payload: checkedObj
  };
};

export const changeBucketName = newName => {
  return {
    type: "CHANGE_BUCKET_NAME",
    payload: newName
  };
};
