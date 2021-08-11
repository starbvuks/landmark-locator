import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

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
