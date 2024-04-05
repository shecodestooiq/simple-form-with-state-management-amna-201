import React from 'react';
import { useUser } from './UserContext';

const Profile = () => {
  const { user } = useUser();

  return (
    <div>
      <h2> Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Password: {user?.password}</p>
    </div>
  );
};

export default Profile;