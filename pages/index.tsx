import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MobileMenu from "@/components/ux/mobileMenu";
import { useState } from "react";
import Header from "@/components/ux/Header";
import Footer from "@/components/ux/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Resubase - Your Launchpad to Coding Greatness!</title>
        <meta
          name="description"
          content="Resubase is an open-source platform that fuels your journey
          towards coding greatness!."
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
          content="Resubase - Your Launchpad to Coding Greatness!"
        />
        <meta
          property="og:description"
          content="Resubase is an open-source platform that fuels your journey towards coding greatness!."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1692623591/resubase-min-logo_l6hlqw.png?4362984378"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resubase-me.vercel.app" />
        <meta property="twitter:url" content="https://resubase-me.vercel.app" />
        <meta
          name="twitter:title"
          content="Resubase - Your Launchpad to Coding Greatness!"
        />
        <meta
          name="twitter:description"
          content="Resubase is an open-source platform that fuels your journey towards coding greatness!."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1692623591/resubase-min-logo_l6hlqw.png?4362984378"
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
        <div
          className={
            "p-[10px] mt-20 flex flex-col gap-[30rem] md:p-[25px] lg:p-[30px]"
          }
        >
          <section className="">
            <div className="flex items-center justify-center text-center flex-col gap-8">
              <h1 className="text-5xl font-semibold md:text-4xl lg:text-8xl">
                <span className="text-learn">Learn.</span>{" "}
                <span className="text-collab">Collaborate.</span>{" "}
                <span className="text-build">Build.</span>
              </h1>
              <h4 className="font-normal text-xs text-white md:text-base lg:text-base">
                Learn from our comprehensive library of tutorials, collaborate
                on projects with other developers, <br /> and find your dream
                job.
              </h4>
              <div className="flex items-center gap-5 flex-col md:flex-row lg:flex-row md:gap-10 lg:gap-10">
                <Link href="/start-now">
                  <button className="p-3 pl-10 pr-10 w-[100%] md:w-auto lg:w-auto bg-purple text-lg font-semibold rounded-lg text-white transition-all ease-in-out hover:bg-darkpurple">
                    SignUp
                  </button>
                </Link>
                <Link href="/contact/sales">
                  <button className="p-3 bg-transparent pl-10 pr-10 border-2 border-royalblue-dark-momentum shadow-sm shadow-royalblue-dark-momentum text-lg font-semibold rounded-lg text-white transition-all ease-in-out hover:shadow-none hover:border-transparent hover:bg-royalblue-dark-momentum">
                    Get a demo
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <section className="p-[10px] md:p-[25px] lg:p-[30px]" id={"features"}>
            <div className="">
              <h2 className="text-purple text-xl">Our Mission</h2>
              <p className="text-base text-white mt-6 md:text-2xl lg:text-4xl">
                Our mission is to help developers learn these tools in a much
                better way, because learning is supposed to be fun right? We
                should have fun while learning.
              </p>
            </div>
            <div className="mt-8 flex items-stretch flex-wrap gap-4">
              <div className="p-8 bg-pleasesleep shadow-inner border border-is-this-purple rounded-lg w-[100%] md:w-[444px] lg:w-[444px]">
                <div className="bg-frakingpurple flex items-center justify-center w-[46px] h-[46px] rounded-md border border-is-this-purple">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
                    />
                  </svg>
                </div>
                <div className="mt-16">
                  <h3 className="text-2xl text-white font-semibold">
                    Enhanced Search Engine
                  </h3>
                  <p className="text-base text-white mt-3">
                    Yo, we got the fastest search engine in the world equipped
                    for your learning
                  </p>
                </div>
              </div>
              <div className="p-8 bg-pleasesleep shadow-inner border border-is-this-purple rounded-lg w-[100%] md:w-[444px] lg:w-[444px]">
                <div className="bg-frakingpurple flex items-center justify-center w-[46px] h-[46px] rounded-md border border-is-this-purple">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      d="M9 1v7L2 20v3h20v-3L15 8V1m0 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-6 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm9-7c-7-3-6 4-12 1M6 1h12"
                    />
                  </svg>
                </div>
                <div className="mt-16">
                  <h3 className="text-2xl text-white font-semibold">
                    The only test, you&apos;ll take{" "}
                    <span className="italic underline">ever</span>
                  </h3>
                  <p className="text-base text-white mt-3">
                    School? What school? We run the school now!! Take coding
                    tests and challenges that are actually fun.
                  </p>
                </div>
              </div>
              <div
                className={
                  "p-8 bg-pleasesleep shadow-inner border border-is-this-purple rounded-lg w-[100%] md:w-[444px] lg:w-[444px]"
                }
              >
                <div
                  className={
                    "bg-frakingpurple flex items-center justify-center w-[46px] h-[46px] rounded-md border border-is-this-purple"
                  }
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      d="M3 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm6.779 1.584l.042.032a2 2 0 1 0-.042-.032ZM6.268 6A2 2 0 1 1 9.73 7.998A2 2 0 0 1 6.268 6ZM2.5 6h2.67a3.013 3.013 0 0 0 .594 3H5.5a2.501 2.501 0 0 0-2.355 1.658a3.733 3.733 0 0 1-.933-.543C1.46 9.51 1 8.616 1 7.5A1.5 1.5 0 0 1 2.5 6Zm8 3a2.5 2.5 0 0 1 2.354 1.658c.34-.139.655-.32.934-.543C14.54 9.51 15 8.616 15 7.5A1.5 1.5 0 0 0 13.5 6h-2.67c.11.313.17.65.17 1a2.99 2.99 0 0 1-.764 2h.264Zm1.387 1.928c.073.176.113.37.113.572c0 1.116-.459 2.01-1.212 2.615C10.047 14.71 9.053 15 8 15c-1.053 0-2.047-.29-2.788-.885C4.46 13.51 4 12.616 4 11.5A1.496 1.496 0 0 1 5.5 10h5a1.5 1.5 0 0 1 1.387.928Z"
                    />
                  </svg>
                </div>
                <div className="mt-16">
                  <h3 className="text-2xl text-white font-semibold">
                    Vibrant Q&A Community
                  </h3>
                  <p className="text-base text-white mt-3">
                    Have you ever listened to that song and vibed to it
                    continuously, we know you&apos;ll be vibing once you join
                    the community
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="p-[10px] md:p-[25px] lg:p-[30px]" id={"pricing"}>
            <div className="flex items-center justify-center">
              <h3 className="text-4xl text-center font-semibold text-white md:text-3xl lg:text-4xl">
                The best investment you&apos;ll ever make
              </h3>
            </div>
            <div className="flex items-center justify-center gap-5 flex-wrap mt-20">
              <div className="p-8 bg-white rounded-md w-[100%] md:w-[444px] lg:w-[444px] shadow-shbuild">
                <div className="flex items-start flex-col gap-2">
                  <h3 className="font-semibold text-2xl">Stalker</h3>
                  <h3 className="font-semibold text-3xl">$0</h3>
                  <p className="font-semibold text-sm">
                    You know this is for the basic stuff right?
                  </p>
                </div>
                <div className="mt-8 flex items-start flex-col gap-4">
                  <li className="list-none flex items-center gap-2 font-semibold">
                    <svg
                      width="20"
                      height="20"
                      fill="#5030BD"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.243 16.313 6 12.071l1.414-1.415 2.829 2.829 5.656-5.657 1.415 1.414-7.071 7.071Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Chat with Community
                  </li>
                  <li className="list-none flex items-center gap-2 font-semibold">
                    <svg
                      width="20"
                      height="20"
                      fill="#5030BD"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.243 16.313 6 12.071l1.414-1.415 2.829 2.829 5.656-5.657 1.415 1.414-7.071 7.071Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Starter templates
                  </li>
                  <li className="list-none flex items-center gap-2 font-semibold">
                    <svg
                      width="20"
                      height="20"
                      fill="#5030BD"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.243 16.313 6 12.071l1.414-1.415 2.829 2.829 5.656-5.657 1.415 1.414-7.071 7.071Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Watch & Learn from top Free Courses
                  </li>
                  <li className="list-none flex items-center gap-2 font-semibold">
                    <svg
                      width="20"
                      height="20"
                      fill="#5030BD"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.243 16.313 6 12.071l1.414-1.415 2.829 2.829 5.656-5.657 1.415 1.414-7.071 7.071Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Communit Support
                  </li>
                </div>
                <div className="mt-20">
                  <Link href="/start-now">
                    <button
                      className="w-[100%] p-4 border-[3px] flex items-center justify-between rounded-md border-purple"
                      id={styles.stalkerbtn}
                    >
                      <span className="text-purple font-semibold text-lg">
                        Start Now
                      </span>
                      <svg
                        width="27"
                        height="27"
                        fill="#7148FC"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.038 6.344 13.627 7.76l3.27 3.255-13.605.014.002 2 13.568-.014-3.215 3.23 1.417 1.411 5.644-5.67-5.67-5.643Z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-8 bg-badass rounded-md w-[100%] md:w-[444px] lg:w-[444px] shadow-shbuild relative">
                <div
                  className="p-2 w-[100%] md:w-[444px] lg:w-[444px] bg-royalblue-dark-momentum font-semibold"
                  id={styles.banner}
                >
                  <span className="text-lg text-white">
                    Your girlfriends favorite
                  </span>
                </div>
                <div className="flex items-start flex-col gap-2 mt-10">
                  <h3 className="font-semibold text-2xl text-white">Badass</h3>
                  <h3 className="font-semibold text-3xl text-white">
                    $30<span className="text-xs font-normal">/month</span>
                  </h3>
                  <p className="font-semibold text-sm text-white">
                    Prove you are a badass by unlocking your true <br />
                    potential
                  </p>
                </div>
                <div className="mt-8 flex items-start flex-col gap-4">
                  <li className="list-none flex items-center gap-2 font-semibold text-white">
                    <svg
                      width="20"
                      height="20"
                      fill="#5030BD"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.243 16.313 6 12.071l1.414-1.415 2.829 2.829 5.656-5.657 1.415 1.414-7.071 7.071Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Unlimited chat features
                  </li>
                  <li className="list-none flex items-center gap-2 font-semibold text-white">
                    <svg
                      width="20"
                      height="20"
                      fill="#5030BD"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.243 16.313 6 12.071l1.414-1.415 2.829 2.829 5.656-5.657 1.415 1.414-7.071 7.071Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Pro templates
                  </li>
                  <li className="list-none flex items-center gap-2 font-semibold text-white">
                    <svg
                      width="20"
                      height="20"
                      fill="#5030BD"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.243 16.313 6 12.071l1.414-1.415 2.829 2.829 5.656-5.657 1.415 1.414-7.071 7.071Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Unlimited courses just for you
                  </li>
                  <li className="list-none flex items-center gap-2 font-semibold text-white">
                    <svg
                      width="20"
                      height="20"
                      fill="#5030BD"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.243 16.313 6 12.071l1.414-1.415 2.829 2.829 5.656-5.657 1.415 1.414-7.071 7.071Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    AI helper
                  </li>
                  <li className="list-none flex items-center gap-2 font-semibold text-white">
                    <svg
                      width="20"
                      height="20"
                      fill="#5030BD"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.243 16.313 6 12.071l1.414-1.415 2.829 2.829 5.656-5.657 1.415 1.414-7.071 7.071Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Code on space with GitHub codespaces
                  </li>
                </div>
                <div className="mt-20">
                  <Link href="/upgrade">
                    <button
                      className="w-[100%] p-4 flex items-center justify-between rounded-md bg-purple"
                      id={styles.blurbutton}
                    >
                      <span className="text-white font-semibold text-lg">
                        Upgrade Now
                      </span>
                      <svg
                        width="27"
                        height="27"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.038 6.344 13.627 7.76l3.27 3.255-13.605.014.002 2 13.568-.014-3.215 3.23 1.417 1.411 5.644-5.67-5.67-5.643Z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="p-[10px] md:p-[25px] lg:p-[30px]" id={"teams"}>
            <div className="flex items-center text-center justify-center flex-col gap-3">
              <h3 className="text-4xl font-semibold text-white md:text-4xl lg:text-5xl">
                The tinder for devs
              </h3>
              <p className="text-white">
                It&apos;s like tinder but better, Let&apos;s show you how real
                collaboration works
              </p>
            </div>
            <div className="flex items-stretch justify-center flex-wrap gap-10 mt-10">
              <div className="w-[430px] h-[100%]">
                <Image
                  src="/hub/Card1.svg"
                  className="w-[500px] h-[200px] object-contain"
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL="/next.svg"
                  alt="a picture of james card"
                />
              </div>
              <div className="w-[430px] h-[100%]">
                <Image
                  src="/hub/Card2.svg"
                  className="w-[500px] h-[200px] object-contain"
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL="/next.svg"
                  alt="a picture of james card"
                />
              </div>
            </div>
          </section>
          <section className="p-[10px] md:p-[25px] lg:p-[30px]" id={"trusted"}>
            <div className="flex items-center text-center justify-center flex-col gap-3">
              <h3 className="text-4xl font-semibold text-white md:text-4xl lg:text-5xl">
                Trusted by my mom
              </h3>
              {/* text-4xl text-center font-semibold text-white md:text-3xl lg:text-4xl */}
              <p className="text-white text-sm md:text-base lg:text-base">
                SignUp and show my mom she&apos;s not the only one that can use
                such a great product
              </p>
              <div className="mt-8">
                <Link href="/">
                  <button className="p-4 pl-20 pr-20 rounded-lg bg-royalblue-dark-momentum text-lg text-white font-semibold transition-all ease-linear hover:bg-hover_royal">
                    SignUp
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <Footer Link={Link} />
      </main>
    </>
  );
}
