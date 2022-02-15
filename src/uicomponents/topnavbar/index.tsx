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
