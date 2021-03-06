import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import Alert from "@material-ui/lab/Alert";
import {Divider, Button, Modal, TextField} from "@material-ui/core";

const Reviews = ({id}) => {
  const [rating, setRating] = useState();
  const [comment, setReview] = useState();

  const [reviewData, setReviewData] = useState([]);
  const [open, setOpen] = useState(false);

  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const name = userToken.user.name;

  const landmark = id;

  useEffect(() => {
    axios
      .get(`https://landmarklactor.herokuapp.com/rating/${id}`)
      .then((res) => {
        setReviewData(res.data.landmark.reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const config = {
    headers: {Authorization: `Bearer ${userToken.token}`},
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      rating,
      comment,
      landmark,
    };

    axios
      .post(
        `https://landmarklactor.herokuapp.com/rating/${id}`,
        newReview,
        config
      )
      .then((data) => {
        console.log("success");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addReview = (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{width: "10vw", height: "25vh"}}
      >
        <ModalDiv>
          <Box>
            <HeaderModal>Add a Review</HeaderModal>
            <ModalForm onSubmit={handleSubmit} noValidate>
              <ReviewField
                multiline
                label="Review"
                variant="outlined"
                onChange={(e) => setReview(e.target.value)}
              />
              <RatingField
                label="Rating"
                variant="outlined"
                type="number"
                InputProps={{inputProps: {min: 0.5, max: 5}}}
                onChange={(e) => setRating(e.target.value)}
              />
              <ButtonDiv>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                  style={{marginRight: "1vw"}}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="outlined" color="primary">
                  Submit
                </Button>
              </ButtonDiv>
            </ModalForm>
          </Box>
        </ModalDiv>
      </Modal>
      <Button variant="outlined" onClick={handleOpen}>
        Add Review
      </Button>
    </div>
  );

  if (reviewData.length === 0) {
    return (
      <Main>
        <HeaderDiv>
          <Header>Reviews</Header>
          {addReview}
        </HeaderDiv>
        <Alert
          severity="info"
          style={{
            margin: "5vh 0 0 0",
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "#37A0F3",
            border: "2px solid #37A0F3",
            width: "25vw",
          }}
        >
          no reviews yet!
        </Alert>
      </Main>
    );
  } else {
    return (
      <Main>
        <HeaderDiv>
          <Header>Reviews</Header>
          {addReview}
        </HeaderDiv>
        {reviewData.map((review, index) => (
          <ReviewDiv key={index}>
            <Top>
              <ReviewUser>User : {review.name}</ReviewUser>
              <Rating>
                Rating: <Value>{review.rating}</Value>
              </Rating>
            </Top>
            <Divider
              orientation="vertical"
              flexItem
              style={{margin: "0 2vw 0 0"}}
            />
            <Comment>
              <Quote>"</Quote>
              {review.comment}
              <Quote>"</Quote>
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

const HeaderDiv = styled.div`
  display: flex;
  width: 20vw;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.span`
  font-weight: 600;
  font-size: 2.5vw;
`;

// Modal

const ModalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 90vw;
`;

const Box = styled.div`
  width: 45vw;
  background-color: var(--main-light);
  padding: 4rem;
  border-radius: 0.5rem;
`;

const HeaderModal = styled.span`
  font-family: Poppins;
  font-size: 2vw;
  font-weight: 600;
  color: var(--main-purple);
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ReviewField = styled(TextField)`
  width: 30vw;
  margin: 2vh 0 0 0 !important;
`;

const RatingField = styled(TextField)`
  width: 7vw;
  margin: 4vh 0 0 0 !important;
`;

const ButtonDiv = styled.div`
  width: 30vw;
  margin: 5vh 0 0 0;
`;

// Review Cards

const ReviewDiv = styled.div`
  padding: 1vh;
  margin: 5vh 0 0 0;
  display: flex;
  align-items: center;
  background-color: var(--main-light1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

const Top = styled.div`
  display: flex;
  width: 27vw;
  flex-direction: column;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 0 0 1vw;
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
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 2vw;
  font-family: Red Hat Display;
  color: var(--main-purple);
`;

const Quote = styled.span`
  font-family: "Sorts Mill Goudy", serif;
  padding: 0 1vw;
  color: var(--main-lav1);
  font-weight: 700;
  font-size: 5.5vw;
`;
