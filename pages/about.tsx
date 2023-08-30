import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

import styles from '@/styles/Home.module.css';

import Header from "@/components/ux/Header";
import MobileMenu from "@/components/ux/mobileMenu";

export default function About() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Resubase was founded in 2023, and are shaping the tech space by helping developers tech iteself"
        />
        <meta
          name="keywords"
          content="Resubase, About Resubase, About Us, What is Resubase, ResubaseLabs"
        />
        <meta
          name="google-site-verification"
          content="l1a2fyP4jz21WqSIR2HNxLAyt__hUNkV-48f_zbVHYE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://resubase-me.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us" />
        <meta
          property="og:description"
          content="Resubase was founded in 2023, and are shaping the tech space by helping developers tech iteself"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1693402291/NEW_Landing_Page_e43uvj.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resubase-me.vercel.app" />
        <meta property="twitter:url" content="https://resubase-me.vercel.app" />
        <meta name="twitter:title" content="About Us" />
        <meta
          name="twitter:description"
          content="Resubase was founded in 2023, and are shaping the tech space by helping developers tech iteself"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1693402291/NEW_Landing_Page_e43uvj.png"
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
      </main>
      <div className="flex flex-col gap-5 p-8 md:p-40 mt-[5rem] md:mt-10">
        <h1 className="text-2xl font-medium text-white leading-[3.25rem] md:text-2xl md:font-bold">
          Hi There 👋
        </h1>
        <div>
          <p className="text-white/60">
            As a passionate team, we thrive on learning and practicing new
            skills. This dedication fuels our tech journey.
          </p>
        </div>
        <div>
          <p className="text-white/60">
            When pondering how to assist new developers reaching out to us,
            Resubase emerged in Aug 2023. The initial version was a chat
            platform, but as existing options were present, we delved into
            deeper considerations.
          </p>
        </div>
        <div>
          <p className="text-white/60">
            When we introduced Coding Challenges and Roadmaps, shifting from
            chat to learning, Resubase garnered substantial attention. <br />{" "}
            This transition transformed our concept into an interactive learning
            platform.
          </p>
        </div>
        <div>
          <p className="text-white/60">
            We have exciting ideas currently in validation. These features/ideas
            are expected to roll out starting next month.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-medium text-white leading-[3.25rem] md:text-2xl md:font-bold">
            Founders
          </h2>
          <div className="flex flex-col grid-rows-none gap-8 mt-5 md:flex md:grid-rows-2 md:gap-8 md:flex-row">
            <div className="w-full bg-transparent">
              <div className="rounded-lg w-full h-auto object-cover overflow-hidden">
                <Image
                  src="/pfp/timi_pfp.jpg"
                  width={500}
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover overflow-hidden grayscale"
                  placeholder="blur"
                  blurDataURL="/vercel.svg"
                  alt="Picture of the author"
                />
              </div>
              <div className="p-8 flex flex-col items-center gap-2">
                <h4 className="text-lg text-white md:text-2xl">
                  <Link
                    href="/timi"
                    className="bg-darktempgrey border border-darktempgreybc p-1 px-2 rounded-md flex items-center gap-1"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
                      />
                    </svg>
                    Timi
                  </Link>
                </h4>
                <p className="text-center text-white mt-4 text-sm md:text-base lg:text-base">
                  Timi, CEO and Founder of Resubase, is a tech enthusiast with a
                  strong passion for innovation and skill enhancement. He
                  entered the tech world at age X and has continued to evolve
                  and innovate ever since.
                </p>
              </div>
            </div>
            <div className="w-full bg-transparent">
              <div className="rounded-lg w-full h-auto object-cover overflow-hidden">
                <Image
                  src="/pfp/kin_pfp.png"
                  width={500}
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover overflow-hidden"
                  placeholder="blur"
                  blurDataURL="/vercel.svg"
                  alt="Picture of the author"
                />
              </div>
              <div className="p-8 flex flex-col items-center gap-2">
                <h4 className="text-lg text-white md:text-2xl">
                  <Link
                    href="/kin"
                    className="bg-darktempgrey border border-darktempgreybc p-1 px-2 rounded-md flex items-center gap-1"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
                      />
                    </svg>
                    Kin Leon
                  </Link>
                </h4>
                <p className="text-center text-white mt-4 text-sm md:text-base lg:text-base">
                  Kin, Resubase&apos;s CTO and Co-Founder, is passionate about
                  developing web applications. Continuously dedicated to
                  enhancing Resubase, Kin&apos;s tech journey began at age X,
                  driving constant innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-grey/20">
          <div className="mt-10 flex flex-col items-center justify-center gap-8">
            <div>
              <h3 className="text-white text-2xl text-center font-medium md:text-4xl lg:text-4xl">
                Got any question?
              </h3>
            </div>
            <button
              data-tally-open="meQxol"
              data-tally-emoji-text="🚀"
              data-tally-emoji-animation="tada"
            >
              <Link
                href="/about"
                className="p-3 px-5 rounded-full bg-darkpurple text-white font-medium transition-colors hover:bg-checkpruple"
              >
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
