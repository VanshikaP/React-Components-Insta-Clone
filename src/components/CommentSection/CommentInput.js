// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form">
      <input
        type="text"
        value={props.newComment.text}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
      <button className='comment-submit' onClick={props.submitComment}>Post</button>
    </form>
  );
};

export default CommentInput;
