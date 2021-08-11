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
            <ReviewUser>User : {review.user}</ReviewUser>
            <Rating>
              Rating: <Value>{review.rating}</Value>
            </Rating>
            <Comment>
              <Quote>"</Quote>
              {review.comment}
            </Comment>
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
  padding: 2vh;
  margin: 5vh 0 0 0;
  display: flex;
  flex-direction: column;
  background-color: var(--main-light1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

const ReviewUser = styled.span`
  font-weight: 700;
  font-size: 1.4vw;
`;

const Rating = styled.span`
  font-size: 1.5vw;
  font-weight: 600;
  color: var(--main-purple);
  width: 8vw;
`;

const Value = styled.span`
  background-color: var(--main-purple);
  padding: 0 8px;
  border-radius: 10px;
  color: var(--main-lav1);
`;

const Comment = styled.span`
  display: flex;
  font-weight: 500;
  font-size: 2vw;
`;

const Quote = styled.span`
  font-family: Times New Roman;
  font-weight: 700;
  font-size: 3vw;
`;
