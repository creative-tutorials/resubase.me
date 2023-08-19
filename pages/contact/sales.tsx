import sls from "@/styles/Sales.module.css";
import Header from "@/components/ux/Header";
import { useState } from "react";
import MobileMenu from "@/components/ux/mobileMenu";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function ContactSales() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Contact Sales</title>
        <meta
          name="description"
          content="Let's get you that lambo with Resubase sales team."
        />
        <meta
          name="keywords"
          content="Programming, Learn Coding, Resubase, Coding Challenge, ResuAI, ResuChat"
        />
        <meta
          name="google-site-verification"
          content="l1a2fyP4jz21WqSIR2HNxLAyt__hUNkV-48f_zbVHYE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="twitter:card"
          content="Let's get you that lambo with Resubase sales team."
        />
        <meta name="twitter:site" content="@Resubase" />
        <meta name="twitter:creator" content="@timi" />
        <meta property="twitter:url" content="https://resubase.vercel.app" />
        <meta
          property="twitter:title"
          content="Contact Sales"
        />
        <meta
          property="twitter:description"
          content="Resubase is an open-source platform that fuels your journey"
        />
        <meta property="twitter:image" content="/hub/resubase header logo.svg" />
        <meta property="twitter:site_name" content="Resubase" />
        <meta property="twitter:type" content="website" />
        <meta property="og:title" content="Contact Sales" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://resubase.vercel.app"
        />
        <meta
          property="og:image"
          content="/hub/resubase header logo.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header
          styles={styles}
          isMobileMenu={isMobileMenu}
          setIsMobileMenu={setIsMobileMenu}
        />
        {isMobileMenu && <MobileMenu Link={Link} />}
        <div className="p-[15px] md:p-[60px] lg:p-[60px]">
          <div className="w-[100%] flex flex-col gap-4 md:flex-row lg:flex-row">
            <div>
              <h2 className="text-5xl mt-10 font-semibold text-white md:text-7xl lg:text-7xl md:mt-0 lg:mt-0">
                Speak with an expert
              </h2>
              <p className="font-medium text-xl text-white mt-5">
                Let&apos;s finally get you that lambo
              </p>
            </div>
            <div className="w-[100%]">
              <iframe
                src="https://calendly.com/resubase/resubase-sales"
                className="w-[100%] rounded-md h-[450px] mt-5 md:h-[680px] lg:h-[680px] md:mt-0 lg:mt-0"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
