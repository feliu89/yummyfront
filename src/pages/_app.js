import "@/styles/globals.css";
import Menu from "src/pages/menu";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}
