import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";

import {Card, CardMedia, CardContent, Typography} from "@material-ui/core";

const Listings = () => {
  const [landmarkData, setLandmarkData] = useState([]);

  const getData = () => {
    axios
      .get("https://landmarklactor.herokuapp.com/landmark")
      .then((res) => {
        setLandmarkData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Main>
      <HeaderText>
        <ListHeader variant="h2">
          our favourite spots in{" "}
          <span style={{fontWeight: 900, color: "var(--main-red)"}}>India</span>
        </ListHeader>
        <ListFooter variant="h5">
          pick a state and find them for yourself
        </ListFooter>
      </HeaderText>
      <Cards>
        {landmarkData.map((data, index) => (
          <Link
            to={"/locat-list/" + data.state}
            style={{textDecoration: "none"}}
          >
            <CardDiv>
              <StateCard>
                <StateCardContent>
                  <StateName>{data.state}</StateName>
                </StateCardContent>
                <StateImage
                  image={data.highlights}
                  title="state"
                  style={{
                    width: "100%",
                    height: "25vh",
                    padding: "0 0 0 7vw",
                  }}
                />
              </StateCard>
            </CardDiv>
          </Link>
        ))}
      </Cards>
    </Main>
  );
};

export default Listings;

const Main = styled.div`
  margin: 54px 5vw 10vh 5vw;
  max-width: 90%;
  flex-flow: row wrap;
  display: flex;
  justify-content: center;
`;

const HeaderText = styled(Typography)`
  display: flex;
  flex-direction: column;
  margin: 0 10vw;
`;

const ListHeader = styled(Typography)`
  margin: 10vh 0 0 0 !important;
  text-align: center !important;
  font-family: Red Hat Display !important;
  font-weight: 700 !important;
  color: var(--main-orange);
`;

const ListFooter = styled(Typography)`
  margin: 3vh 0 5vh 0 !important;
  text-align: center !important;
  font-family: Poppins !important;
  font-weight: 400 !important;
  color: var(--main-red);
`;

const Cards = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

const CardDiv = styled.div`
  display: flex;
`;

const StateCard = styled(Card)`
  margin: 5vh 2vw 0 2vw;
  display: flex;
  width: 20vw;
  height: 20vh;
  border-radius: 10px !important;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-light) !important;
`;

const StateCardContent = styled(CardContent)`
  width: 8vw;
`;

const StateName = styled.span`
  font-size: 1.5vw;
  font-weight: 700;
  color: var(--main-red);
  font-family: Poppins !important;
`;

const StateImage = styled(CardMedia)`
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
