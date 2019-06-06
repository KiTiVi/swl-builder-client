import React, { useContext } from 'react';

const NavBar = () => {
  const value = useContext(UserContext);

  return <div>{value.username}</div>;
};

export default NavBar;
