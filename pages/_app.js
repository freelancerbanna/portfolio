import { Cursor, Header } from "../components";
import "../styles/globals.css";

//
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cursor />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
