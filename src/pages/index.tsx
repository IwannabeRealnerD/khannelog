import type { NextPage } from "next";
import styled from "styled-components";

export const MainTitle = styled.h1`
  padding-top: 0.7em;
`;

const Home: NextPage = () => {
  return (
    <>
      <MainTitle>mainpage</MainTitle>
      <div>sd</div>
    </>
  );
};

export default Home;
