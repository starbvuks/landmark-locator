import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import Alert from "@material-ui/lab/Alert";

const Reviews = ({id}) => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://landmarklactor.herokuapp.com/rating/${id}`)
      .then((res) => {
        setReviewData(res.data.landmark.reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (reviewData.length === 0) {
    return (
      <Main>
        <Header>Reviews</Header>
        <Alert
          severity="info"
          style={{
            margin: "5vh 0 0 0",
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "#37A0F3",
            border: "2px solid #37A0F3",
          }}
        >
          no reviews yet!
        </Alert>
      </Main>
    );
  } else {
    return (
      <Main>
        <Header>Reviews</Header>
        {reviewData.map((review, index) => (
          <ReviewDiv key={index}>
            <ReviewUser>{review.user}</ReviewUser>
            <Rating>Rating: {review.rating}</Rating>
            <Comment>{review.comment}</Comment>
          </ReviewDiv>
        ))}
      </Main>
    );
  }
};

export default Reviews;

const Main = styled.div`
  font-family: Poppins;
  margin: 0 0 10vh 0;
`;

const Header = styled.span`
  font-weight: 600;
  font-size: 2.5vw;
`;

const ReviewDiv = styled.div`
  padding: 2vh 0 0 0;
  display: flex;
  flex-direction: column;
`;

const ReviewUser = styled.span``;

const Rating = styled.span``;

const Comment = styled.span``;
