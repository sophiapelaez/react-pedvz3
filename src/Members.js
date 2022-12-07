import React from 'react';
import { useState } from 'react';
import Profile from './PopUp';

export default function Members() {
  const [taeilPopUp, setTaeilPopUp] = useState(false);
  const [johnnyPopUp, setJohnnyPopUp] = useState(false);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  return (
    <div className="members">
      <h1 id="member-database">
        {' '}
        M<span id="space">__</span> E<span id="space">__</span> M
        <span id="space">__</span> B<span id="space">__</span> E
        <span id="space">__</span> R<span id="space">__</span> S{' '}
      </h1>

      <p id="member-text-intro"> Click on each member to learn more </p>
      <div className="members-part-one">
        <img
          id="taeil_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEIL_1.png"
          alt="Moon Taeil"
          onClick={() => setTaeilPopUp(true)}
        />

        <Profile trigger={taeilPopUp} setTrigger={setTaeilPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEIL_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Moon Taeil </h1>
            <p id="profile-description"> Get a load of this guy</p>
          </div>
        </Profile>
        <img
          id="johnny_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JOHNNY_1.png"
          alt="Suh Johnny"
          onClick={() => setJohnnyPopUp(true)}
          />
  
          <Profile trigger={johnnyPopUp} setTrigger={setJohnnyPopUp}>
            <h3> Meepless in seattle </h3>
          </Profile>
        <img
          id="taeyong_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEYONG_1.png"
          alt="Lee Taeyong"
        />
      </div>
      <div className="members-part-two">
        <img
          id="yuta_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/YUTA_1.png"
          alt="Nakamoto Yuta"
        />
        <img
          id="doyoung_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/DOYOUNG_1.png"
          alt="Kim Doyoung"
        />
        <img
          id="jaehyun_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JAEHYUN_1.png"
          alt="Jeong Jaehyun"
        />
      </div>
      <div className="members-part-three">
        <img
          id="jungwoo_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JUNGWOO_1.png"
          alt="Kim Jungwoo"
        />
        <img
          id="mark_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/MARK_1.png"
          alt="Lee Mark"
        />
        <img
          id="haechan_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/HAECHAN_1.png"
          alt="Lee Haechan"
        />
      </div>
    </div>
  );
}

export default Members