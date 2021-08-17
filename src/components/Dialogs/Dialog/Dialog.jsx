import React from "react";
import "./../Dialogs.scss";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  const { name, id } = props;

  return (
    <li className="dialog__item">
      <NavLink
        to={`/dialogs/${id}`}
        className="dialog__link"
        activeClassName="active"
      >
        {name}
      </NavLink>
    </li>
  );
};

export default Dialog;