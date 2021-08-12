import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import Alert from "@material-ui/lab/Alert";
import {Divider, Button, Modal, TextField} from "@material-ui/core";

const Reviews = ({id}) => {
  const [reviewData, setReviewData] = useState([]);
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{width: "10vw", height: "25vh"}}
          >
            <ModalDiv>
              <Box>
                <ModalForm>
                  <ReviewField multiline label="Review" variant="outlined" />
                  <RatingField
                    label="Rating"
                    variant="outlined"
                    type="number"
                  />
                </ModalForm>
                <ButtonDiv>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleClose}
                    style={{marginRight: "1vw"}}
                  >
                    Cancel
                  </Button>
                  <Button variant="outlined" color="primary">
                    Submit
                  </Button>
                </ButtonDiv>
              </Box>
            </ModalDiv>
          </Modal>
          <Button
            variant="outlined"
            onClick={handleOpen}
            style={{height: "5vh"}}
          >
            Add Review
          </Button>
        </HeaderDiv>
        {reviewData.map((review, index) => (
          <ReviewDiv key={index}>
            <Top>
              <ReviewUser>User : {review.user}</ReviewUser>
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
  height: 30vh;
  width: 30vw;
  background-color: var(--main-light);
  padding: 5rem;
  border-radius: 0.5rem;
`;

const ModalForm = styled.form`
  display: flex;
`;

const ReviewField = styled(TextField)`
  width: 20vw;
`;

const RatingField = styled(TextField)`
  width: 10vw;
  margin: 0 0 0 1vw;
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
  overflow: hidden;
  text-overflow: ellipsis;
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
