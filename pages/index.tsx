import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MobileMenu from "@/components/ux/mobileMenu";
import { useState } from "react";
import Header from "@/components/ux/Header";
import Footer from "@/components/ux/footer";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <>
      <Head>
        <title>
          Resubase - A high quality developer&apos;s guides & instructions to
          build web faster
        </title>
        <meta
          name="description"
          content="High quality guides and instructions to help build a faster and better application"
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
        <meta property="og:url" content="https://resubase-me.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Resubase - A high quality developer's guides & instructions to build web faster!"
        />
        <meta
          property="og:description"
          content="High quality guides and instructions to help build a faster and better application"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1696199724/Resubase_new_design_byho5q.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resubase-me.vercel.app" />
        <meta property="twitter:url" content="https://resubase-me.vercel.app" />
        <meta
          name="twitter:title"
          content="Resubase - A high quality developer's guides & instructions to build web faster!"
        />
        <meta
          name="twitter:description"
          content="High quality guides and instructions to help build a faster and better application"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1696199724/Resubase_new_design_byho5q.png"
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
        <Header styles={styles} />
        <div className="flex flex-col gap-8 items-center p-4 justify-center w-full min-h-screen">
          <div className="flex flex-col text-center items-center gap-4 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#f2f6fa] font-arrone">
              Next generation developer&apos;s guide
            </h1>
            <p className="text-light/70 font-normal text-xl md:text-2xl lg:text-2xl">
              A high quality developer&apos;s guides & instructions to build
              faster and more efficient softwares
            </p>
          </div>
          <div className="z-10">
            <Link href="/start">
              <Button className="bg-white hover:bg-white/90 text-lg text-astrobtnclr p-7 rounded-full flex items-center gap-2">
                Get Started <ArrowRightIcon />{" "}
              </Button>
            </Link>
          </div>
        </div>
        {/* <Footer Link={Link} /> */}
      </main>
    </>
  );
}
