import React from "react";
import "./ProfileInfo.scss";

const ProfileInfo = () => {
  return (
    <div className="user">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWo8qqspI_psTddwBDtlZM9c8zxfa90drBXA&usqp=CAU"
        alt="girl"
        className="user__img"
      />
      <div className="user__description">
        <p className="user__name">Olena</p>
        <p className="user__birthday">Date of Birth: 10.08.1988</p>
        <p className="user__live">Chernivtsi</p>
        <p className="user__education">BSMU</p>
        <p className="user__web">Olena.com.ua</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
