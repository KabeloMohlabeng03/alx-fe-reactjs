import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams(); // Get dynamic parameter
  return <div>User Profile for user ID: {userId}</div>;
}

export default UserProfile;
