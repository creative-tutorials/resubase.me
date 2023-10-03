import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

type Prop = {
  styles: {
    readonly [key: string]: string;
  };
};

export default function Header({
  styles,
}: Prop) {
  return (
    <header
      className={
        "fixed top-0 left-0 w-[100%] flex items-center justify-between gap-5 p-4 px-8 bg-footerbg/80 z-10 md:p-4 md:px-20 "
      }
    >
      <div className="flex items-stretch gap-40">
        <div className="logo">
          <Link href="/">
            <Image
              src={"/hub/Site - Banner.svg"}
              className="w-[auto] h-[50px] object-cover"
              width={40}
              height={40}
              placeholder={"blur"}
              blurDataURL={"/next.svg"}
              alt="resubase logo"
            />
          </Link>
        </div>
        <nav className="flex items-center gap-5" id={styles.nav}></nav>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="https://twitter.com/timi_networks"
          className={
            "flex items-center gap-1 text-midgrey text-base hover:text-white"
          }
        >
          <TwitterLogoIcon className="w-6 h-6" />
        </Link>
        <Link
          href="https://github.com/creative-tutorials"
          className={
            "flex items-center gap-1 text-midgrey text-base hover:text-white"
          }
        >
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>
      </div>
    </header>
  );
}
