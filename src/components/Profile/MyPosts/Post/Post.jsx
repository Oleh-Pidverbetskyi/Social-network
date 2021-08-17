import React from "react";
import "./Post.scss";

const Post = (props) => {
  const { message, likes } = props;
  return (
    <div className="post">
      <div className="post__item">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsm56ieYOuTZe84DQ0mG-uTe4YIXtsyJITsg&usqp=CAU"
          alt="man"
          className="post__img"
        />
        {message}
        <div>
          <span className="post__like"> Likes {likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
