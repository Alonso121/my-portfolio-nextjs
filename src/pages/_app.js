import "../styles/globals.scss";
import Nav from "../components/Nav";
import Icons from "../components/Icons";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Nav />
      <Component {...pageProps} />
      <Icons />
    </main>
  );
}

export default MyApp;
