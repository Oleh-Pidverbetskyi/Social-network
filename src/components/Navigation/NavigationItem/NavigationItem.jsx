import React from "react";
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {

  return (
    <li className="navigation__item">
      <NavLink
        to={`/${props.name}`}
        className="navigation__link"
        activeClassName="navigation__link-active"
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
