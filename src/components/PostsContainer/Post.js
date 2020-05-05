// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  console.log('SHOW', props)
  const [likes, setLikes] = useState(props.post.likes);
  const [likeStatus, setLikeStatus] = useState(false);
  const incrementLikes = (e) => {
    let liked = likeStatus ? -1 : 1;
    setLikes(likes + liked);
    likeStatus ? setLikeStatus(false) : setLikeStatus(true);
    e.target.classList.toggle('fas');
    e.target.classList.toggle('far');
  }
  return (
    <div key = {props.post.id} className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes={likes} incrementLikes={incrementLikes} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;


