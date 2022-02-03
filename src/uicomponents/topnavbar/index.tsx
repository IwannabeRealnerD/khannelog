import type { NextPage } from "next";
import * as Styled from "./style";

export const TopNavBar: NextPage = () => {
  return (
    <Styled.TopNavBg>
      <Styled.TopNavWrapper>
        <h1>khannelog</h1>
        <div>
          <button type="button">home</button>
          <button type="button">dev</button>
          <button type="button">motorcycle</button>
        </div>
      </Styled.TopNavWrapper>
    </Styled.TopNavBg>
  );
};
