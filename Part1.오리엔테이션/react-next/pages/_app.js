import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>React App</title>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
