import App from "next/app";
import Head from "next/head";
import { PostProvider } from "../contexts/PostContext";
import Header from "../components/Header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next Blogging App</title>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <PostProvider>
        <Header />
        <Component {...pageProps} />
      </PostProvider>
    </>
  );
};

export default MyApp;
