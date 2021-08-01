import React from "react";
import styled from "styled-components";
import {Avatar, Typography} from "@material-ui/core";

import Navbar from "../Landing/Navbar/Navbar";

const Profile = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  return (
    <Main>
      <Navbar />
      <UserDetails>
        <UserAvatar
          src="/img/default-user.png"
          style={{height: "10rem", width: "10rem"}}
        />
        <UserData>
          <Username variant="h1">{userToken.user.name}</Username>
          <Typography>{userToken.user.email}</Typography>
        </UserData>
      </UserDetails>
    </Main>
  );
};

export default Profile;

const Main = styled.div`
  margin: 0 0 0 0;
  background-color: var(--main-pink);
  height: 100vh;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`;

const UserAvatar = styled(Avatar)`
  border: 10px solid black;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 0 50px;
`;

const Username = styled(Typography)``;

const Email = styled.span``;
