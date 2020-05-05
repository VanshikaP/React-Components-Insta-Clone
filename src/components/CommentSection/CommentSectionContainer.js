// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  const [commentsData, setCommentsData] = useState(props.comments);

  // state for new comment
  const [newComment, setNewComment] = useState({
    username: 'You',
    text: ''
  });
  const changeComment = e => {
    setNewComment({...newComment, text: e.target.value});
  }

  const submitComment = async e => {
    e.preventDefault();
    await setCommentsData([...commentsData, newComment]);
    setNewComment({username: 'You', text: ''});
  }
  return (
    <div>
      {/* map through the comments data and return the Comment component */
      commentsData.map(c => {
        return <Comment comment = {c}/>
      })
      }
      <CommentInput newComment={newComment} changeComment={changeComment} submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;
