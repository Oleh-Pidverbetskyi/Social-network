import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const post = props.posts.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  return (
    <>
      <h2>My Posts</h2>
      <div className="posts">
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="posts__message"
          value={props.newPostText}
          onChange={onPostChange}
          ref={newPostElement}
        />
        <button className="posts__btn" onClick={addPost}>
          Send
        </button>
      </div>
      {post}
    </>
  );
};

export default MyPosts;
