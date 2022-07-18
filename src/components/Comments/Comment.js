import React, { useState } from "react";
import ReplyForm from "../ReplyForm";
import {
  CommentAuthor,
  CommentContainer,
  CommentContent,
  CommentFooter,
  CommentText,
  CommentThread,
  CommentTimestamp,
  CommentWrapper,
  Image,
  ReplyBadge,
} from "./CommentElements";

const Comment = ({ comment, replies }) => {
  const [isReplying, setIsReplying] = useState(false);

  const replyHandler = () => {
    setIsReplying((prevValue) => !prevValue);
  };

  return (
    <>
      <CommentWrapper>
        <Image />
        <CommentContainer>
          <CommentContent>
            <CommentAuthor>{comment.author.name}</CommentAuthor>
            <CommentText>{comment.text}</CommentText>
          </CommentContent>
          <CommentFooter>
            <CommentTimestamp>
              {new Date(comment.timestamp).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              {new Date(comment.timestamp)
                .toLocaleTimeString("en-US")
                .slice(-2)}
            </CommentTimestamp>
            <ReplyBadge onClick={() => replyHandler()}>
              Reply {replies.length > 0 ? "(" + replies.length + ")" : ``}
            </ReplyBadge>
          </CommentFooter>
          {isReplying && <ReplyForm />}
          {replies[0] && <CommentThread />}
          <ul>
            {replies.map((reply, index) => (
              <Comment
                key={reply.id}
                comment={reply}
                isReplying={isReplying}
                replyHandler={{}}
                replies={[]}
              />
            ))}
          </ul>
        </CommentContainer>
      </CommentWrapper>
    </>
  );
};

export default Comment;
