import React from "react";
import Friends from "../Friends/Friends";
import "./Navigation.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = (props) => {
  const navItem = props.state.navItems.map((navItem) => (
    <NavigationItem name={navItem.name} id={navItem.id} />
  ));

  const friend = props.state.friends.map((friend) => (
    <Friends name={friend.name} />
  ));

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">{navItem}</ul>
        <div className="friends">
          {friend}
        </div>
      </nav>
    </>
  );
};
export default Navigation;
