export const fetchReplies = (array, parentId) => {
  return array
    .filter((com) => com.parent_id === parentId)
    .sort((a, b) => a.timestamp - b.timestamp);
};
