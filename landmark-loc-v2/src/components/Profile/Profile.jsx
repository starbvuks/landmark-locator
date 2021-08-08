import React from "react";
import styled from "styled-components";
import {Avatar, Typography} from "@material-ui/core";
import {Redirect} from "react-router-dom";

import {useSelector} from "react-redux";

const Profile = () => {
  const auth = useSelector((state) => state.auth.value);

  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  if (auth === false) {
    return <Redirect to="/login" />;
  }
  return (
    <Main>
      <UserDetails>
        <UserAvatar
          src="/img/avatar_03.png"
          style={{height: "10rem", width: "10rem"}}
        />
        <UserData>
          <Username variant="h1">{userToken.user.name}</Username>
          <Email variant="h6">{userToken.user.email}</Email>
        </UserData>
      </UserDetails>
    </Main>
  );
};

export default Profile;

const Main = styled.div`
  height: 90vh;
  background-color: var(--main-light1);
  background: linear-gradient(
    180deg,
    var(--main-lav1) 0%,
    var(--main-light1) 100%
  );
  display: flex;
  justify-content: center;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 40vh;
  margin: 7rem 0;
  background: var(--main-light);
  border-radius: 25px;
`;

const UserAvatar = styled(Avatar)`
  border: 10px solid var(--main-dark);
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 0 50px;
`;

const Username = styled(Typography)`
  font-family: Poppins !important;
  color: var(--main-orange);
  font-weight: 600 !important;
`;

const Email = styled(Typography)`
  padding: 0 0 0 7px;
  font-family: Poppins !important;
  color: var(--main-dark);
  font-weight: 500 !important;
`;