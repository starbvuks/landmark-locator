import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Avatar, Typography} from "@material-ui/core";
import axios from "axios";

import Favourites from "./Favourites.jsx";

const Profile = () => {
  const [userData, setUserData] = useState([]);

  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const id = userToken.user.id;

  useEffect(() => {
    axios
      .get(`https://landmarklactor.herokuapp.com/user?${id}`)
      .then((res) => {
        setUserData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Main>
      <User>
        <UserDetails>
          <UserAvatar
            src="/img/avatar_03.png"
            style={{height: "auto", width: "12vw"}}
          />
          <UserData>
            <Username variant="h1">{userToken.user.name}</Username>
            <Email variant="h6">{userToken.user.email}</Email>
          </UserData>
        </UserDetails>
      </User>
      <Favourites />
    </Main>
  );
};

export default Profile;

const Main = styled.div``;

const User = styled.div`
  height: 75vh;
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
  box-shadow: var(--main-purple) 0px 20px 30px -10px;
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
  color: var(--main-purple);
  font-weight: 600 !important;
  font-size: 8vw;
`;

const Email = styled(Typography)`
  padding: 0 0 0 7px;
  font-family: Poppins !important;
  color: var(--main-lav2);
  font-weight: 500 !important;
  font-size: 1.5vw;
`;
