import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MobileMenu from "@/components/ux/mobileMenu";
import { useState } from "react";
import Header from "@/components/ux/Header";
import Footer from "@/components/ux/footer";
import Marquee from "react-fast-marquee";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Resubase - The elevated learning for developers</title>
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
          content="Resubase - The elevated learning for developers!"
        />
        <meta
          property="og:description"
          content="Resubase is an open-source platform that fuels your journey towards coding greatness!."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1693402291/NEW_Landing_Page_e43uvj.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resubase-me.vercel.app" />
        <meta property="twitter:url" content="https://resubase-me.vercel.app" />
        <meta
          name="twitter:title"
          content="Resubase - The elevated learning for developers!"
        />
        <meta
          name="twitter:description"
          content="Resubase is an open-source platform that fuels your journey towards coding greatness!."
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
        <div className="p-4 pl-8 pr-8 mt-[5rem] md:p-8 md:pl-20 md:pr-20">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl font-medium text-white md:text-7xl">
                Elevated learning for developers
              </h1>
              <span className="text-xs text-grey font-medium md:text-sm">
                Resubase helps you master coding with back to back tutorials,
                collaborative community, <br /> coding challenges, and a lot more.
              </span>
              <div className="flex flex-row items-center gap-5">
                <Link
                  href="https://discord.gg/8yC22UZjzh"
                  className="flex items-center gap-1 text-grey font-medium text-lg"
                >
                  <svg
                    width="20"
                    height="20"
                    fill=""
                    className="fill-grey"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.82 4.258c-.198.356-.375.723-.53 1.1a14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.598 16.598 0 0 0 5.07 2.59c.416-.55.788-1.131 1.11-1.74a9.646 9.646 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0c.14.12.28.23.42.33-.544.33-1.116.61-1.71.84.31.622.671 1.218 1.08 1.78a16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35Zm-6.14 10.55a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2Zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2Z"></path>
                  </svg>
                  Discord
                </Link>
                <Link
                  href="https://resubase.vercel.app/"
                  className="flex items-center bg-darkerpurple border border-midpurple text-white p-3 pl-5 pr-5 rounded-full transition-all hover:bg-frakingpurple hover:border-checkpruple"
                >
                  Get Started{" "}
                  <svg
                    width="20"
                    height="20"
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m10.707 17.71 5.707-5.706-5.707-5.707L9.293 7.71l4.293 4.293-4.293 4.293 1.414 1.414Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/hub/Resubase LandingPage mockup.png"
                width={800}
                height={800}
                className="rounded-md"
                placeholder="blur"
                blurDataURL="/vercel.svg"
                alt="landing page mockup"
              />
            </div>
          </div>
          <div className="mt-6">
            <Marquee pauseOnHover={true}>
              <Image
                src="/hub/Marquee Slide.png"
                width={900}
                height={900}
                placeholder="blur"
                blurDataURL="/vercel.svg"
                alt="resubase prime"
              />
              <Image
                src="/hub/Marquee Slide.png"
                width={900}
                height={900}
                placeholder="blur"
                blurDataURL="/vercel.svg"
                alt="resubase prime"
              />
            </Marquee>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex items-center">
              <div>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src="https://pbs.twimg.com/profile_images/1679130154910490626/vQvRlrhR_400x400.jpg"
                        alt="@treasuredev_"
                      />
                      <AvatarFallback>TD</AvatarFallback>
                    </Avatar>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-headerbg border border-transparent shadow-lg">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://pbs.twimg.com/profile_images/1679130154910490626/vQvRlrhR_400x400.jpg" />
                        <AvatarFallback>TD</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">
                          @treasuredev_ - 𝕏
                        </h4>
                        <p className="text-sm text-white">
                          Full Stack Web Developer | Specializes in MENN Stack |
                          #buildinpublic | Grinding #Nextjs
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src="https://pbs.twimg.com/profile_images/1582668146229616640/LbZIR8E4_400x400.jpg"
                        alt="@alicalimli_dev"
                      />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-headerbg border border-transparent shadow-lg">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://pbs.twimg.com/profile_images/1582668146229616640/LbZIR8E4_400x400.jpg" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">
                          @alicalimli_dev - 𝕏
                        </h4>
                        <p className="text-sm text-white">
                          Front-end Developer • I post anything useful for your
                          web dev journey • Access my visual contents here for
                          free: http://webdevvisuals.com
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src="https://pbs.twimg.com/profile_images/1691199851571130368/qMsVKWnU_400x400.jpg"
                        alt="@codewithkin"
                      />
                      <AvatarFallback>KL</AvatarFallback>
                    </Avatar>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-headerbg border border-transparent shadow-lg">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://pbs.twimg.com/profile_images/1691199851571130368/qMsVKWnU_400x400.jpg" />
                        <AvatarFallback>KL</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">
                          @codewithkin - 𝕏
                        </h4>
                        <p className="text-sm text-white">
                          Fullstack developer💻 | Software engineer 👨🏽‍💻 | Loves
                          building 🏗️ | open sourcerer🧙‍♂️ 🌱 | code addict💉
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src="https://pbs.twimg.com/profile_images/1682895906142580737/7Y5GA7Rm_400x400.jpg"
                        alt="@Devdotun"
                      />
                      <AvatarFallback>DT</AvatarFallback>
                    </Avatar>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-headerbg border border-transparent shadow-lg">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://pbs.twimg.com/profile_images/1682895906142580737/7Y5GA7Rm_400x400.jpg" />
                        <AvatarFallback>DT</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">
                          @Devdotun - 𝕏
                        </h4>
                        <p className="text-sm text-white">
                          ALX is killing me 😭😭|Lectiophile✍️ 📚| Comp. science
                          student Unilorin...
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src="/pfp/ayo_pfp.jpeg"
                        alt="@Dev_disciple"
                      />
                      <AvatarFallback>AY</AvatarFallback>
                    </Avatar>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-headerbg border border-transparent shadow-lg">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="/pfp/ayo_pfp.jpeg" />
                        <AvatarFallback>AY</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">
                          @Dev_disciple - 𝕏
                        </h4>
                        <p className="text-sm text-white">
                          Frontend developer 💯 JavaScript | Sass
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div></div>
            </div>
            <div>
              <span className="font-medium text-white text-xs md:text-sm">
                Used by 50+ developers
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 px-8 mt-[5rem] md:p-8 md:px-20">
          <h2 className="text-4xl font-semibold text-white text-center">
            Why Resubase?
          </h2>
          <div className="flex flex-col items-center flex-nowrap gap-5 mt-10 md:flex-row md:item-stretch md:flex-wrap md:gap-2 lg:items-stretch lg:flex-wrap lg:gap-2">
            <div className="p-4 w-full bg-darkerpurple border border-midpurple rounded-md flex flex-col gap-3 md:p-4 md:w-auto">
              <div>
                <svg
                  width="50"
                  height="50"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.1 4.333c0-.423.343-.766.767-.766h8.564c.204 0 .399.08.543.224l3.701 3.702a.767.767 0 0 1 .225.542v11.632a.767.767 0 0 1-.767.766H5.867a.767.767 0 0 1-.767-.766V4.333Zm.767-2.3a2.3 2.3 0 0 0-2.3 2.3v15.334a2.3 2.3 0 0 0 2.3 2.3h12.266a2.3 2.3 0 0 0 2.3-2.3V8.035a2.3 2.3 0 0 0-.673-1.626l-3.702-3.702a2.3 2.3 0 0 0-1.627-.674H5.867Zm1.533 4.6a.767.767 0 0 0 0 1.534H12a.767.767 0 0 0 0-1.534H7.4Zm0 4.6a.767.767 0 0 0 0 1.534h9.2a.767.767 0 0 0 0-1.534H7.4Zm0 4.6a.767.767 0 0 0 0 1.534h9.2a.767.767 0 0 0 0-1.534H7.4Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl text-white font-medium">
                  Get your hands on the best docs
                </p>
                <span className="text-base w-full text-lighter-purple md:w-[25rem]">
                  We have made it our responsibility to provide the best docs
                  from your favorite tools around the globe and beyond, we are
                  willing to simplify the complexity and give you a reason not
                  to fear reading documentations
                </span>
              </div>
            </div>
            <div className="p-4 w-full bg-darkerpurple border border-midpurple rounded-md flex flex-col gap-3 md:p-4 md:w-auto">
              <div>
                <svg
                  width="50"
                  height="50"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"></path>
                  <path
                    fillRule="evenodd"
                    d="M12 5.5c-2.618 0-4.972 1.051-6.668 2.353-.85.652-1.547 1.376-2.036 2.08-.48.692-.796 1.418-.796 2.067 0 .649.317 1.375.796 2.066.49.705 1.186 1.429 2.036 2.08C7.028 17.45 9.382 18.5 12 18.5c2.618 0 4.972-1.051 6.668-2.353.85-.652 1.547-1.376 2.035-2.08.48-.692.797-1.418.797-2.067 0-.649-.317-1.375-.797-2.066-.488-.705-1.185-1.429-2.035-2.08C16.972 6.55 14.618 5.5 12 5.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl text-white font-medium">
                  Engaging Video Content
                </p>
                <span className="text-base w-full text-lighter-purple md:w-[25rem]">
                  We put altogether great video content from best tutors, so you
                  would watch course content that you would actually like and
                  benefit from.
                </span>
              </div>
            </div>
            <div className="p-4 w-full bg-darkerpurple border border-midpurple rounded-md flex flex-col gap-3 md:p-4 md:w-auto">
              <div>
                <svg
                  width="50"
                  height="50"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.039 3.582c-.6-.313-1.423-.318-2.027-.006-2.578 1.332-4.915 2.858-6.96 4.548-.274.226-.454.541-.451.902.003.36.188.671.46.894 2.029 1.66 4.368 3.187 6.9 4.508.6.313 1.423.318 2.027.006 2.578-1.332 4.915-2.858 6.96-4.548.274-.226.454-.541.451-.902-.003-.36-.188-.671-.46-.894-2.029-1.66-4.368-3.187-6.9-4.508Z"></path>
                  <path d="M20.958 13.731a.75.75 0 1 0-.794-1.272l-6.108 3.813c-.544.34-1.283.529-2.056.529-.774 0-1.513-.19-2.057-.529l-6.04-3.77a.75.75 0 0 0-.794 1.273l6.04 3.77c.829.517 1.857.756 2.85.756.995 0 2.023-.24 2.852-.757l6.107-3.813Z"></path>
                  <path d="M20.958 17.486a.75.75 0 1 0-.794-1.272l-5.29 3.303c-.772.482-1.806.743-2.874.743s-2.102-.26-2.875-.743l-5.222-3.26a.75.75 0 1 0-.795 1.273l5.222 3.26c1.058.66 2.381.97 3.67.97 1.289 0 2.611-.31 3.67-.971l5.288-3.303Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl text-white font-medium">
                  Engaging Pratice Projects
                </p>
                <span className="text-base w-full text-lighter-purple md:w-[25rem]">
                  Grow your skills faster, by building projects from easy to
                  complex, you will also learn how tools and other frameworks
                  work.
                </span>
              </div>
            </div>
            <div className="p-4 w-full bg-darkerpurple border border-midpurple rounded-md flex flex-col gap-3 md:p-4 md:w-auto">
              <div>
                <svg
                  width="50"
                  height="50"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.585 17.155c.443-2.42.47-4.9.083-7.33l-.064-.4a2.158 2.158 0 0 0-2.132-1.819H9.76a.06.06 0 0 1-.059-.06c0-.992-.804-1.796-1.797-1.796H5.612a2.18 2.18 0 0 0-2.164 1.92l-.273 2.269a23.73 23.73 0 0 0 .217 7.094 2.128 2.128 0 0 0 1.942 1.74l1.514.11c3.43.245 6.874.245 10.304 0l1.638-.118a1.968 1.968 0 0 0 1.795-1.61Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl text-white font-medium">
                  Folder of Roadmaps
                </p>
                <span className="text-base w-full text-lighter-purple md:w-[25rem]">
                  Roadmaps are a collection of practice questions to help you
                  get that job
                </span>
              </div>
            </div>
            <div className="p-4 w-full bg-darkerpurple border border-midpurple rounded-md flex flex-col gap-3 md:p-4 md:w-auto">
              <div>
                <svg
                  width="50"
                  height="50"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.75 3H3v6.758h1.5V4.5h5.25V3Z"></path>
                  <path d="m22.118 9.843-6.75-3.75a.75.75 0 0 0-.75 0l-6.75 3.75a.75.75 0 0 0-.368.66v7.5a.75.75 0 0 0 .39.652l6.75 3.75a.75.75 0 0 0 .36.098.788.788 0 0 0 .368-.098l6.75-3.75a.75.75 0 0 0 .382-.652v-7.5a.749.749 0 0 0-.382-.66ZM14.25 20.478 9 17.56v-5.79l5.25 2.918v5.79ZM15 13.39l-5.205-2.887L15 7.608l5.205 2.895L15 13.39Zm6 4.17-5.25 2.918v-5.79L21 11.77v5.79Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl text-white font-medium">
                  Built-In Code Editor
                </p>
                <span className="text-base w-full text-lighter-purple md:w-[25rem]">
                  Wheter you are praticing on a project or doing some coding
                  challenges, we got you covered, you now have the power to code
                  and share it without leaving the site.
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer Link={Link} />
      </main>
    </>
  );
}
