import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <div className="text-center">Please Login!</div>;
  }
  return <div className="text-center">Welcome {user.username}</div>;
}

export default Profile;
