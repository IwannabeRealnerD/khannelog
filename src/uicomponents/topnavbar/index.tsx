import type { NextPage } from "next";
import NextLink from "next/link";
import * as Styled from "./style";

export const TopNavBar: NextPage = () => {
  return (
    <Styled.TopNavBg>
      <Styled.TopNavWrapper>
        <NextLink href="/">
          <h1>khannelog</h1>
        </NextLink>
        <div>
          <NextLink href="/">
            <button type="button">home</button>
          </NextLink>
          <NextLink href="/dev">
            <button type="button">dev</button>
          </NextLink>
          <NextLink href="/motorcycle">
            <button type="button">motorcycle</button>
          </NextLink>
        </div>
      </Styled.TopNavWrapper>
    </Styled.TopNavBg>
  );
};
