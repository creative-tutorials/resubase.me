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
}:Prop) {
  return (
    <header
      className={
        "flex items-center justify-between gap-5 p-6 pl-10 pr-10 bg-headerbg"
      }
    >
      <div className="flex items-stretch gap-5">
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
            href="/#features"
            className={"text-midgrey text-base hover:text-white"}
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className={"text-midgrey text-base hover:text-white"}
          >
            Pricing
          </Link>
          <Link
            href="/contact/sales"
            className={"text-midgrey text-base hover:text-white"}
          >
            Contact Sales
          </Link>
        </nav>
      </div>
      <Link
        href="/contact"
        className={"text-midgrey text-base hover:text-white"}
        id={styles.contact}
      >
        Contact
      </Link>
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
