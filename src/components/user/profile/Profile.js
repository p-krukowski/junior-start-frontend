import React from "react";

const Profile = (props) => {
  return (
    <div className="profile-container">
      <div className="container">
        <div className="profile-info">
          <div className="profile-avatar">
            {this.props.currentUser.imageUrl ? (
              <img
                src={props.currentUser.imageUrl}
                alt={props.currentUser.name}
              />
            ) : (
              <div className="text-avatar">
                <span>{currentUser.name && currentUser.name[0]}</span>
              </div>
            )}
          </div>
          <div className="profile-name">
            <h2>{props.currentUser.name}</h2>
            <p className="profile-email">{this.props.currentUser.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
