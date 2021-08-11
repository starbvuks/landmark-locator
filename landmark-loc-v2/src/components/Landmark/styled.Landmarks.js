import styled from "styled-components";
import {Grid} from "@material-ui/core";

export const ImageGallery = styled(Grid)``;

export const Images = styled.img`
  width: 50vw;
  height: 60vh;
  object-fit: cover;
`;

export const Content = styled(Grid)`
  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  font-family: Poppins;
  font-size: 3vw;
  font-weight: 700;
  padding: 0 10px;
`;

export const Rating = styled.span`
  background-color: var(--main-purple);
  color: var(--main-light);
  font-family: Poppins;
  padding: 10px;
  margin: 2vh 0 0 0;
  border-radius: 20px;
  font-size: 1.5vw;
  letter-spacing: 2px;
  font-weight: 700;
`;

export const Map = styled(Grid)``;

export const AddressDiv = styled(Grid)`
  margin: 2.5vh 0 0 0 !important;
  width: 30vw;
`;

export const Address = styled.span`
  font-family: Poppins;
  font-size: 1.8vw;
  font-weight: 600;
`;

export const Description = styled.span`
  font-family: Poppins;
  font-size: 1.3vw;
  font-weight: 500;
`;
