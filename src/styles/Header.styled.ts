import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

type Props = {
  marging: number;
};

export const StyledHeader = styled("header")`
  background-color: white;
  height: 50px;
  display: flex;
  align-items: center;
  
  box-shadow:0px 8px 8px 4px rgba(0,0,0,0.25)
`;

export const MainContent = styled("section")`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled(Box)`
  width: 35px;
  height: 35px;

  img {
    display: block;
    width: 100%;
  }
`;

export const LogoName = styled(Box)`
  margin-right: 10px;
`;

export const LogoConatiner = styled(Box)`
  display: flex;
  align-items: center;
`;

export const List = styled("ul")`
  display: flex;
  list-style: none;
  align-items: center;
  flex: 1;

  margin-right: 30px;

  li {
    margin-right: 20px;
    a {
      text-decoration: none;
      color: black;
      padding-bottom: 2px;
      &:hover {
        border-bottom: 2px solid blue;
      }
    }
  }
`;
export const RightSection = styled("section")`
  display: flex;
  flex: 1;
`;

export const LeftSection = styled("section")`
  display: flex;

  /* align-items:center; */

  span:first-child {
    border-left: 2px solid red;
    padding-left: 15px;
    padding-top: 4px;
    margin-left: 20px;

    a {
      text-decoration: none;
      padding-bottom: 2px;

      &:hover {
        border-bottom: 2px solid blue;
      }
    }
  }
  span:last-child {
    padding: 4px 23px;
    border-radius: 15px;
    background-color: blue;
    color: white;
    border:2px solid transparent;

    &:hover {
      background-color: white;
      transform:scale(1.1);

      color: black;
      border: 2px solid blue;
      a {
        color: black;
      }
    }

    a {
      color: white;
      text-decoration: none;
    }
  }
`;
