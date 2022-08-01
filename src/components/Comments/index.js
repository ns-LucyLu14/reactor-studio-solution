import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import ReplyForm from "../ReplyForm";
import { CommentsContainer, GruopTimestamp } from "./CommentElements";
import { fetchComments } from "../../data/fetchDataAPI";
import { fetchReplies } from "../../utils/helpers";

const Comments = () => {
  const [backendComments, setBackendComments] = useState([]);

  // Filter and sort root comments
  const rootComments = backendComments
    .filter((comment) => comment.parent_id === undefined)
    .sort((a, b) => a.timestamp - b.timestamp);

  // Fake API call to get the provided data
  useEffect(() => {
    try {
      fetchComments().then((res) => setBackendComments(res.data.comments));
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <CommentsContainer>
        {rootComments.map((post, index) => (
          <React.Fragment key={index}>
            <GruopTimestamp>
              {new Date(post.timestamp).toLocaleString("en-GB", {
                weekday: "long",
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </GruopTimestamp>
            <Comment
              comment={post}
              key={post.id}
              // Dynamicaly filter replies for each root comment
              replies={fetchReplies(backendComments, post.id)}
            />
          </React.Fragment>
        ))}
      </CommentsContainer>
      <ReplyForm />
    </>
  );
};

export default Comments;
