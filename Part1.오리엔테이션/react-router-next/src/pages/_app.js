import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>React App</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
