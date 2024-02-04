import React from "react";
import { useUserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useUserContext();
  console.log(user?.name);
  if (!user) {
    return <h1> Please Login!</h1>;
  }
  return <h1>Welcome: {user.name}</h1>;
};

export default Profile;
