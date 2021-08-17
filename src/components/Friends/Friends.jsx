import React from "react";
import "./Friends.scss";

const Friends = (props) => {
  return (
    <div className="friends__wrap">
      <div className="friends__photo"></div>
      <p className="friends__name">{props.name}</p>
    </div>
  );
};

export default Friends;
