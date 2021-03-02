import "../styles/globals.css";
import "katex/dist/katex.min.css";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
