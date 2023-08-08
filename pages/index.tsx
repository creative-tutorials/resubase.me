import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { LinkProp } from "@/types/LinkProp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const router = useRouter();
  const [links, setLinks] = useState<LinkProp>({
    github: "https://github.com/creative-tutorials/resubase",
    twitter: "https://twitter.com/resubaselab",
    producthunt: "https://www.producthunt.com/posts/resubase",
    instatus: "https://resubase.instatus.com",
    license:
      "https://raw.githubusercontent.com/creative-tutorials/resubase/master/LICENSE",
    changelog: "https://github.com/creative-tutorials/resubase/releases",
  });
  const [accordionStatus, setAccordionStatus] = useState({
    isAccordion1: false,
    isAccordion2: false,
    isAccordion3: false,
  });

  const openAccordion = (accordionNumber: number) => {
    setAccordionStatus((prev) => ({
      isAccordion1: accordionNumber === 1 ? !prev.isAccordion1 : false,
      isAccordion2: accordionNumber === 2 ? !prev.isAccordion2 : false,
      isAccordion3: accordionNumber === 3 ? !prev.isAccordion3 : false,
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

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
          name="google-site-verification"
          content="l1a2fyP4jz21WqSIR2HNxLAyt__hUNkV-48f_zbVHYE"
        />
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="8b44ac97-9ceb-4355-a97b-a989d5ae6c54"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="twitter:card"
          content="Resubase is an open-source platform that fuels your journey
          towards coding greatness!"
        />
        <meta name="twitter:site" content="Resubase" />
        <meta name="twitter:creator" content="@timi" />
        <meta
          property="og:title"
          content="Resubase - Your Launchpad to Coding Greatness!"
        />
        <meta property="og:url" content="resubase.vercel.app" />
        <meta property="og:image" content="/resubase-default.png" />
        <meta property="og:site_name" content="Resubase" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Resubase is an open-source platform that fuels your journey"
        />
        <meta
          property="og:title"
          content="Resubase - Your Launchpad to Coding Greatness!"
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
          <div className={styles.top}>
            <header id={styles.Header}>
              <div className={styles.headCol}>
                <div className={styles.logo}>
                  <Image
                    src={"/hub/Resubase - Logo.png"}
                    width={40}
                    height={40}
                    alt={"Resubase Logo"}
                  />
                  <span id={styles.logo_text}>Resubase</span>
                </div>
                <nav id={styles.navigation}>
                  <div className={styles.nav_links}>
                    <Link href={`#${styles.home}`} id={styles.links}>
                      Home
                    </Link>
                    <Link href={`#${styles.features}`} id={styles.links}>
                      Features
                    </Link>
                    <Link href={`#${styles.faq}`} id={styles.links}>
                      FAQ
                    </Link>
                  </div>
                </nav>
                <nav
                  id={styles.mobile_nav}
                  data-state={isMobileMenu ? "active" : ""}
                >
                  <div className={styles.nav_links}>
                    <Link href={`#${styles.home}`} id={styles.links}>
                      Home
                    </Link>
                    <Link href={`#${styles.features}`} id={styles.links}>
                      Features
                    </Link>
                    <Link href={`#${styles.faq}`} id={styles.links}>
                      FAQ
                    </Link>
                  </div>
                </nav>

                <div id={styles.nav_socials}>
                  <Link href={links.github}>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5"></path>
                      <path d="M9.25 19.503c-5 1.498-5-2.496-7-2.996"></path>
                    </svg>
                  </Link>
                  <Link href={links.twitter}>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    id={styles.harmburger}
                    onClick={toggleMobileMenu}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 12h18"></path>
                      <path d="M3 6h18"></path>
                      <path d="M3 18h18"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </header>
          </div>
          <div className={styles.sections}>
            <section id={styles.home}>
              <div className={styles.copyHeader}>
                <h1 id={styles.heading}>Your Launchpad to Coding Greatness!</h1>
                <p id={styles.subheading}>
                  Resubase is an open-source platform that fuels your journey
                  towards coding greatness!
                </p>
                <p id={styles.subheading} data-propery="subheading2">
                  Resubase fosters an environment where your creativity
                  flourishes, and your code becomes a testament to your journey{" "}
                  <br />
                  towards coding greatness.
                </p>
              </div>
              <div className={styles.cta}>
                <Link href="/signup">Features</Link>
                <Link href="/">Get Started</Link>
              </div>
              <div className={styles.breaker}></div>
            </section>
            <section id={styles.features}>
              <div className={styles.featHead}>
                <h2 id={styles.heading}>Shaping developers for tomorrow</h2>
                <p id={styles.subheading}>
                  Resubase is here to support you in becoming an outstanding
                  coder,
                </p>
                <p id={styles.subheading}>
                  unlocking your full potential and taking your programming
                  skills to the next level.
                </p>
              </div>
              <div className={styles.flex_wrapper}>
                <div className={styles.flex}>
                  <div className={styles.cards}>
                    <div className={styles.card_top}>
                      <div className={styles.card1}>
                        <h3 id={styles.feat_card_head}>
                          Interactive Learning Paths 🚀
                        </h3>
                        <p id={styles.feat_card_des}>
                          Embark on structured coding journeys tailored to your
                          skill level. Our interactive learning paths guide you
                          through essential concepts, hands-on exercises, and
                          real-world projects, ensuring you master programming
                          languages with confidence.
                        </p>
                      </div>
                      <div className={styles.card2}>
                        <h3 id={styles.feat_card_head}>
                          Diverse Coding Challenges 💡
                        </h3>
                        <p id={styles.feat_card_des}>
                          Sharpen your skills through an array of coding
                          challenges that range from beginner to advanced
                          levels. Put your problem-solving abilities to the test
                          and earn badges as you conquer challenges, showcasing
                          your expertise to the Resubase community.
                        </p>
                      </div>
                    </div>
                    <div className={styles.card_bottom}>
                      <div className={styles.card1}>
                        <h3 id={styles.feat_card_head}>
                          Collaborative Project Hub 🤝
                        </h3>
                        <p id={styles.feat_card_des}>
                          Ignite innovation by collaborating with fellow
                          developers on shared projects. From brainstorming
                          ideas to refining code, Resubase provides a
                          collaborative space to bring your visions to life and
                          learn from the collective wisdom of the community.
                        </p>
                      </div>
                      <div className={styles.card2}>
                        <h3 id={styles.feat_card_head}>
                          Extensive Resource Library 📚
                        </h3>
                        <p id={styles.feat_card_des}>
                          Access an extensive library of tutorials,
                          documentation, and coding resources. Whether
                          you&apos;re delving into a new framework or refining
                          your expertise, Resubase equips you with the knowledge
                          you need to excel in your coding journey.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mincard}>
                    <h3 id={styles.feat_card_head}>
                      Dynamic Community Engagement 👥
                    </h3>
                    <p id={styles.feat_card_des}>
                      Explore the vibrant forums of Resubase and connect with a
                      wide-ranging community of developers from around the
                      world.
                    </p>
                    <p id={styles.feat_card_des}>
                      Take part in conversations, seek guidance, and exchange
                      insights to enhance your knowledge and expand your
                      network.
                    </p>
                    <p id={styles.feat_card_des}>
                      Discover the sense of connection that comes from being a
                      member of a global coding community and learn from your
                      colleagues.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* reviews section to be added soon */}
            <section id={styles.ads}>
              <div className={styles.ads_center}>
                <h2>Ready to take your journey to the next level?</h2>
                <div className={styles.link_center}>
                  <Link href="/">Get Started</Link>
                </div>
              </div>
            </section>
            <section id={styles.faq}>
              <div className={styles.faq_center}>
                <div className={styles.desi}>
                  <h2 id={styles.heading}>
                    I know you got a lot of questions for us...
                  </h2>
                  <p id={styles.subheading}>
                    Here are a list of things you might be wondering about when
                    it comes to Resubase
                  </p>
                </div>
                <div className={styles.accordion_type}>
                  <div className={styles.accordion_item}>
                    <div
                      className={styles.accordion_trigger}
                      data-state={
                        accordionStatus.isAccordion1 ? "active" : "inactive"
                      }
                      onClick={() => openAccordion(1)}
                    >
                      <h3>Why the name Resubase?</h3>
                    </div>
                    <div
                      className={styles.accordion_content}
                      data-property="Why the name Resubase?"
                      data-state={
                        accordionStatus.isAccordion1 ? "active" : "inactive"
                      }
                    >
                      <span>
                        Our platform is called Resubase because we deliver
                        results directly to its base. &quot;Resu&quot; comes
                        from the word &quot;result&quot; and &quot;base&quot;{" "}
                        <br />
                        refers to the platform itself.
                      </span>
                    </div>
                  </div>
                  <div className={styles.accordion_item}>
                    <div
                      className={styles.accordion_trigger}
                      data-state={
                        accordionStatus.isAccordion2 ? "active" : "inactive"
                      }
                      onClick={() => openAccordion(2)}
                    >
                      <h3>How do I get started?</h3>
                    </div>
                    <div
                      className={styles.accordion_content}
                      data-property="How do I get started?"
                      data-state={
                        accordionStatus.isAccordion2 ? "active" : "inactive"
                      }
                    >
                      <span>
                        Getting started with Resubase is easy. All you have to
                        do is create an account and you&apos;re good to go.
                        It&apos;s a simple and <br /> straightforward process.
                      </span>
                    </div>
                  </div>
                  <div className={styles.accordion_item}>
                    <div
                      className={styles.accordion_trigger}
                      data-state={
                        accordionStatus.isAccordion3 ? "active" : "inactive"
                      }
                      onClick={() => openAccordion(3)}
                    >
                      <h3>What aspect of Resubase is open-source?</h3>
                    </div>
                    <div
                      className={styles.accordion_content}
                      data-propery="What aspect of Resubase is open-source?"
                      data-state={
                        accordionStatus.isAccordion3 ? "active" : "inactive"
                      }
                    >
                      <span>
                        The Resubase application and website are open-source and
                        are being maintained by the team and other contributors{" "}
                        <br />
                        on a daily basis.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer id={styles.footer}>
            <div className={styles.footerned}>
              <div className={styles.ned1}>
                <span>&copy; Resubase Labs.</span>
              </div>
              <div className={styles.ned2}>
                <Link href={links.producthunt}>ProductHunt</Link>
                <Link href={links.twitter}>Twitter</Link>
                <Link href={links.changelog}>Change Log</Link>
                <Link href={links.license}>License</Link>
                <Link href={links.github}>GitHub</Link>
                <Link href={links.instatus}>Status</Link>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
