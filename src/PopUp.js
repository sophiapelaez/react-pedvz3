import React from 'react';
import './index.css';

function Profile(props) {
  return props.trigger ? (
    <div className="profile">
      <div className="profile-inner">
        <button
          id="taeil-button"
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

function Profile(props) {
  return props.trigger ? (
    <div className="profile">
      <div className="profile-inner">
        <button
          id="johnny-button"
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default Profile;
