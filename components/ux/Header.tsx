import Close from "@/components/ux/close";
import Menu from "@/components/ux/menu";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { toggleMobileMenu } from "@/functions/toggleMobileMenu";

type Prop = {
  styles: {
    readonly [key: string]: string;
  };
  isMobileMenu: boolean;
  setIsMobileMenu: Dispatch<SetStateAction<boolean>>;
};

export default function Header({
  styles,
  isMobileMenu,
  setIsMobileMenu,
}: Prop) {
  return (
    <header
      className={
        "fixed top-0 left-0 w-[100%] flex items-center justify-between gap-5 p-4 pl-8 pr-8 bg-headerbg z-10 md:p-6 md:pl-20 md:pr-20 "
      }
    >
      <div className="flex items-stretch gap-40">
        <div className="logo">
          <Link href="/">
            <Image
              src={"/hub/resubase header logo.svg"}
              className="w-[auto] h-[40px] object-cover"
              width={40}
              height={40}
              placeholder={"blur"}
              blurDataURL={"/next.svg"}
              alt="resubase logo"
            />
          </Link>
        </div>
        <nav className="flex items-center gap-5" id={styles.nav}>
          <Link
            href="/about"
            className={"text-midgrey text-base hover:text-white"}
          >
            About
          </Link>
          {/* <Link
            href="/"
            className={"text-midgrey text-base hover:text-white"}
          >
            Pricing
          </Link> */}
          <Link href="/changelog" className={"text-midgrey text-base hover:text-white"}>
            Changelog
          </Link>
          <button
            data-tally-open="meQxol"
            data-tally-emoji-text="🚀"
            data-tally-emoji-animation="tada"
          >
            <Link
              href="#contact"
              className={"text-midgrey text-base hover:text-white"}
            >
              Contact
            </Link>
          </button>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="https://discord.gg/8yC22UZjzh"
          className={
            "flex items-center gap-1 text-midgrey text-base hover:text-white"
          }
          id={styles.contact}
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
          </svg>{" "}
          Discord
        </Link>
        <Link
          href="https://resubase.vercel.app"
          className={
            "flex items-center bg-darkerpurple border border-midpurple text-white p-3 pl-5 pr-5 rounded-full transition-all hover:bg-frakingpurple hover:border-checkpruple"
          }
          id={styles.contact}
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
      <Link
        href="#"
        className={
          "text-midgrey text-base hover:text-white block md:hidden lg:hidden"
        }
        id={styles.menu}
        onClick={() => toggleMobileMenu(isMobileMenu, setIsMobileMenu)}
      >
        {isMobileMenu ? <Close /> : <Menu />}
      </Link>
    </header>
  );
}
