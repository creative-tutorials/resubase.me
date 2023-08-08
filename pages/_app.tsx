import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Script
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://resubase.instatus.com/en/e8b1daba/widget/script.js"
        strategy="lazyOnload"
      />
      {/* <script src="https://resubase.instatus.com/en/e8b1daba/widget/script.js">
</script> */}
    </>
  );
}
