import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/ux/Header";
import styles from "@/styles/Home.module.css";
import MobileMenu from "@/components/ux/mobileMenu";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Changelog() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Resubase / Changelog</title>
        <meta
          name="description"
          content="Features and Updates page directly to help stay updated with the latest updates, enhancement and bug fixes for resubase"
        />
        <meta
          name="keywords"
          content="Resubase, Resubase changelog, changelog resubase, resuabse.change, resubase version"
        />
        <meta
          name="google-site-verification"
          content="l1a2fyP4jz21WqSIR2HNxLAyt__hUNkV-48f_zbVHYE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://resubase-me.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Resubase / Changelog" />
        <meta
          property="og:description"
          content="Features and Updates page directly to help stay updated with the latest updates, enhancement and bug fixes for resubase"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derbreilm/image/upload/v1693402291/NEW_Landing_Page_e43uvj.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resubase-me.vercel.app" />
        <meta property="twitter:url" content="https://resubase-me.vercel.app" />
        <meta name="twitter:title" content="Resubase / Changelog" />
        <meta
          name="twitter:description"
          content="Features and Updates page directly to help stay updated with the latest updates, enhancement and bug fixes for resubase"
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
      <div className="p-2 mt-[5rem] md:mt-10 md:p-20">
        <div>
          <h1 className="text-white text-3xl font-medium">Changelog</h1>
        </div>
        <div>
          <ScrollArea className="h-auto rounded-md border border-white/20 mt-4 w-full">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none text-white">
                Tags
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Link
                      href="/version/v6.6.11"
                      target="blank"
                      className="text-sm text-white transition-all hover:line-through"
                    >
                      {"v6.6.11"}
                    </Link>
                  </div>
                  <div>
                    <span className="text-sm text-white/50">Aug 4, 2023</span>
                  </div>
                </div>
                <Separator className="my-2 border border-darktempgreybc/30" />

                <div className="flex items-center justify-between">
                  <div>
                    <Link
                      href="/version/v7.7.11"
                      target="blank"
                      className="text-sm text-white transition-all hover:line-through"
                    >
                      {"v7.7.11"}
                    </Link>
                  </div>
                  <div>
                    <span className="text-sm text-white/50">Aug 5, 2023</span>
                  </div>
                </div>
                <Separator className="my-2 border border-darktempgreybc/30" />

                <div className="flex items-center justify-between">
                  <div>
                    <Link
                      href="/version/v8.8.12"
                      target="blank"
                      className="text-sm text-white transition-all hover:line-through"
                    >
                      {"v8.8.12"}
                    </Link>
                  </div>
                  <div>
                    <span className="text-sm text-white/50">Aug 5, 2023</span>
                  </div>
                </div>
                <Separator className="my-2 border border-darktempgreybc/30" />
                <div className="flex items-center justify-between">
                  <div>
                    <Link
                      href="/version/v8.9.12"
                      target="blank"
                      className="text-sm text-white transition-all hover:line-through"
                    >
                      {"v8.9.12"}
                    </Link>
                  </div>
                  <div>
                    <span className="text-sm text-white/50">Aug 7, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
