import React from "react";
import "./Dialogs.scss";
import Dialog from "./Dialog/Dialog";
import Message from "./Mesaage/Message";

const Dialogs = (props) => {
  
  const message = props.state.messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  const dialog = props.state.dialogs.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  const newMessage = React.createRef();

  const addMessage = () => {
    props.addMessage();
  };

  const onMeassageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text)
  }

  return (
    <div>
      <h2 className="dialog">Dialogs</h2>
      <div className="dialog__wrap">
        <ul className="dialog__nameList">{dialog}</ul>
        <ul className="dialog__messageList">
          {message}
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              className="dialog__message"
              value={props.state.newMessageText}
              onChange={onMeassageChange}
              ref={newMessage}
            />
            <button className="dialog__btn" onClick={addMessage}>
              Send
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
