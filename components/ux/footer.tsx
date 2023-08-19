export default function Footer({Link}:any) {
  return (
    <footer className="p-[10px] md:p-[25px] lg:p-[30px] bg-footerbg">
      <div className="md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between">
        <span className="text-white">
          &copy; 2023 ResubaseLabs - All rights reserved.
        </span>
        <div className="flex flex-col gap-2 mt-7 md:mt-0 lg:mt-0">
          <Link href="/#pricing" className="text-white">
            Pricing
          </Link>
          <Link href="/contact/sales" className="text-white">
            Contact Sales
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}