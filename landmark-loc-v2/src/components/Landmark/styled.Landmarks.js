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
  font-size: 4vw;
  font-weight: 700;
  padding: 0 10px;
`;

export const Rating = styled.span`
  background-color: var(--main-orange);
  color: var(--main-light);
  font-family: Poppins;
  padding: 14px;
  border-radius: 20px;
  font-size: 2vw;
  letter-spacing: 2px;
  font-weight: 700;
`;

export const AddressDiv = styled(Grid)`
  margin: 2vh 0 0 0;
`;

export const Address = styled.span`
  font-family: Poppins;
  font-size: 2vw;
  font-weight: 700;
`;
