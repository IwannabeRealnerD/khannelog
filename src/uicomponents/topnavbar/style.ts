import styled from "styled-components";
import { maximumWidth } from "../../../styles/responsivevars";

export const TopNavBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3em;
  color: white;
  background-color: gray;
  display: flex;
  align-items: center;
`;

export const TopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 0.5em;
  @media only screen and (min-width: ${maximumWidth}px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
  }
  h1 {
    font-family: "Inknut Antiqua", serif;
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    cursor: pointer;
  }
`;
export const MenuButton = styled.button`
  margin-left: 0.4em;
  color: white;
  border: none;
  background: none;
  @media (hover: hover) {
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
