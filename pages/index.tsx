import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Resubase - Designed to cater the needs of developers</title>
        <meta
          name="description"
          content="Resubase is a powerful platform designed to cater to the needs of developers worldwide."
        />
        <meta
          name="google-site-verification"
          content="l1a2fyP4jz21WqSIR2HNxLAyt__hUNkV-48f_zbVHYE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="twitter:card"
          content="Resubase is a powerful platform designed to cater to the needs of developers worldwide."
        />
        <meta name="twitter:site" content="Resubase" />
        <meta name="twitter:creator" content="@timi" />
        <meta
          property="og:title"
          content="Resubase - Designed to cater the needs of developers"
        />
        <meta property="og:url" content="resubase.vercel.app" />
        <meta property="og:image" content="/resubase-default.png" />
        <meta property="og:site_name" content="Resubase" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Resubase is a powerful platform designed to cater to the needs of developers worldwide."
        />
        <meta
          property="og:title"
          content="Resubase is a powerful platform designed to cater to the needs of developers worldwide."
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
        <div className={styles.center}>
          <header className={styles.header}>
            <div className={styles.col}>
              s
              <div className={styles.colRight}>
                <Link
                  href="https://github.com/creative-tutorials/resubase/releases"
                  target="_blank"
                >
                  Changelog
                </Link>
                <Link href="https://resubase.instatus.com" target="_blank">
                  Status
                </Link>
              </div>
            </div>
          </header>
          <div className={styles.sections}>
            <section id={styles.center_main}>
              <div className={styles.float}>
                <div className={styles.chat1}>
                  <Image
                    src="/Chat-1.png"
                    width={200}
                    height={80}
                    unoptimized
                    alt="Chat1"
                  />
                </div>
                <div className={styles.chat2}>
                  <Image
                    src="/Chat-2.png"
                    width={200}
                    height={80}
                    unoptimized
                    alt="Chat1"
                  />
                </div>
              </div>
              <h1>
                Designed to cater to the needs <br /> of developers worldwide.
              </h1>
              <div className={styles.mainBtn}>
                <button
                  id={styles.try}
                  onClick={() => router.push("https://resubase.vercel.app")}
                >
                  Try Now
                </button>
              </div>
            </section>
            <section id={styles.codingChallenges}>
              <div className={styles.codCol}>
                <div className={styles.codeColLeft}>
                  <h3>Daily Coding Challenges</h3>
                  <p>
                    Every day, you have a new challenge to solve. Check out the
                    daily coding challenges.
                  </p>
                </div>
                <div className={styles.codeColRight}>
                  <Image
                    src="/Game Board.png"
                    width={500}
                    height={400}
                    alt="Coding Challenges"
                    unoptimized
                  />
                </div>
              </div>
            </section>
            <section id={styles.jobBoard}>
              <div className={styles.codCol}>
                <div className={styles.codeColLeft}>
                  <h3>Job Postings</h3>
                  <p>
                    Explore our extensive range of job postings, take the
                    opportunity to apply, and pave your path to success.
                  </p>
                </div>
                <div className={styles.codeColRight}>
                  <Image
                    src="/Job Board.png"
                    width={500}
                    height={150}
                    alt="Coding Challenges"
                    unoptimized
                  />
                </div>
              </div>
            </section>
            <section id={styles.talkDev}>
              <div className={styles.codCol}>
                <div className={styles.codeColLeft}>
                  <h3>Communicate</h3>
                  <p>
                    Talk to the backend, the devops, the frontend, all the
                    developers, Let Communication be the key to success.
                  </p>
                </div>
                <div className={styles.codeColRight}>
                  <video width={500} height={350} autoPlay loop muted>
                    <source src="/designer-developer.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>
            <section id={styles.faq}>
              <div className={styles.faqHeader}>
                <h3>FAQ</h3>
              </div>
              <div className={styles.accBx}>
                <div id={styles.Accordion}>
                  <div
                    className={styles.AccordionTrigger}
                    onClick={() => setIsActive(!isActive)}
                  >
                    <h5>How do you ask question on Resubase?</h5>
                    <div className={styles.close_open}>
                      {isActive ? (
                        <svg
                          width="30"
                          height="30"
                          fill="#ffffff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m18.75 6.82-1.57-1.57L12 10.43 6.82 5.25 5.25 6.82 10.43 12l-5.18 5.18 1.57 1.57L12 13.57l5.18 5.18 1.57-1.57L13.57 12l5.18-5.18Z"></path>
                        </svg>
                      ) : (
                        <svg
                          width="30"
                          height="30"
                          fill="none"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 5.25v13.5"></path>
                          <path d="M18.75 12H5.25"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div
                    className={styles.AccordionContent}
                    id={isActive ? styles.active : ""}
                  >
                    <span>
                      You can ask question on Resubase by using typing your
                      question, and click post when you&apos;re done writting.
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section id={styles.twitter_x}>
              <Link href="https://twitter.com/resubaselab">
                <svg
                  width="40"
                  height="40"
                  fill="#626671"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.25 5.133a9.46 9.46 0 0 1-2.65.717 4.57 4.57 0 0 0 2.03-2.512c-.908.53-1.9.903-2.932 1.101A4.647 4.647 0 0 0 16.327 3c-2.55 0-4.615 2.034-4.615 4.542a4.37 4.37 0 0 0 .119 1.036A13.158 13.158 0 0 1 2.315 3.83a4.485 4.485 0 0 0-.627 2.283c0 1.574.821 2.967 2.062 3.782a4.57 4.57 0 0 1-2.1-.567v.056c0 2.204 1.595 4.036 3.704 4.454a4.752 4.752 0 0 1-1.216.159c-.291 0-.582-.028-.868-.085.587 1.805 2.294 3.118 4.315 3.155a9.356 9.356 0 0 1-6.835 1.88A13.063 13.063 0 0 0 7.816 21c8.501 0 13.146-6.923 13.146-12.928 0-.197-.006-.394-.015-.586a9.304 9.304 0 0 0 2.303-2.353Z"></path>
                </svg>
              </Link>
            </section>
            <section id={styles.productHunt}>
              <Link
                href="https://www.producthunt.com/posts/resubase?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-resubase"
                target="_blank"
              >
                <Image
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=408194&theme=dark"
                  width={250}
                  height={54}
                  alt="Resubase - Designed&#0032;to&#0032;cater&#0032;to&#0032;the&#0032;needs&#0032;of&#0032;developers&#0032;worldwide | Product Hunt"
                />
              </Link>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
