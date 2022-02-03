import type { AppProps } from "next/app";
import NextHead from "next/head";
import GlobalStyle from "../../styles/globalstyles";
import { TopNavBar } from "../uicomponents/topnavbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <title>khannelog</title>
        <meta name="description" content="khanne's blog about development and motorcycle" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <TopNavBar />
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
