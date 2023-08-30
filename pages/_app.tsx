import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://resubase.instatus.com/en/e8b1daba/widget/script.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
