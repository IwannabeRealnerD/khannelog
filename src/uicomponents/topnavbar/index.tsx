import { useEffect, useState } from "react";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import * as Styled from "./style";

export const TopNavBar: NextPage = () => {
  const router = useRouter();
  const [currentMenu, setCurrentMenu] = useState(router.asPath);

  useEffect(() => {
    setCurrentMenu(() => router.asPath);
  }, [router.asPath]);

  return (
    <Styled.TopNavBg>
      <Styled.TopNavWrapper>
        <NextLink href="/">
          <h1>khannelog</h1>
        </NextLink>
        <div>
          <NextLink href="/">
            <Styled.MenuButton type="button">home</Styled.MenuButton>
          </NextLink>
          <NextLink href="/dev">
            <Styled.MenuButton type="button">dev</Styled.MenuButton>
          </NextLink>
          <NextLink href="/motorcycle">
            <Styled.MenuButton type="button">motorcycle</Styled.MenuButton>
          </NextLink>
        </div>
      </Styled.TopNavWrapper>
    </Styled.TopNavBg>
  );
};
