import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
