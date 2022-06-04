import PageWithLayoutType from "../types/pageWithLayout";
import "../styles/globals.css";
import Head from "next/head";

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout;
  if (!Layout)
    return (
      <>
        <AppHead />
        <Component {...pageProps} />
      </>
    );

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

function AppHead() {
  return (
    <Head>
      <title key={"title"}>Nicholas Flatoff</title>
      <meta
        name="description"
        content="Your partner in roastery layout, commissioning & maintenance"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#374151"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}

export default MyApp;
