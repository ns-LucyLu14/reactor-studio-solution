import React, { useEffect, useState } from "react";
import { fetchComments } from "../../data/fetchDataAPI";
import ErrorFallbackComponent from "../ErrorFallback";
import ReplyForm from "../ReplyForm";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";

import { CommentsContainer, GruopTimestamp } from "./CommentElements";
import { fetchReplies } from "../../utils/helpers";

// Lazy loading and Fallback definition
const Comment = React.lazy(() => import("./Comment"));

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <ErrorFallbackComponent error={error} onClick={resetErrorBoundary} />
    </>
  );
}
///////////////////////////////////////////

const Comments = () => {
  const [backendComments, setBackendComments] = useState([]);
  // const handleError = useErrorHandler();

  // Filter and sort root comments
  const rootComments = backendComments
    .filter((comment) => comment.parent_id === undefined)
    .sort((a, b) => a.timestamp - b.timestamp);

  // Fake API call to get the provided data
  useEffect(() => {
    try {
      fetchComments().then((res) => setBackendComments(res.data.comments));
    } catch (err) {
      setBackendComments([err.message]);
    }
  }, []);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
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
      </ErrorBoundary>
    </>
  );
};

export default Comments;
