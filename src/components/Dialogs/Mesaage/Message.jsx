import React from "react";
import "./../Dialogs.scss";

const Message = (props) => {
  return (
    <>
      <li className="messageList__item">{props.message}</li>
    </>
  );
};

export default Message;
