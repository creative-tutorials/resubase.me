export default function MobileMenu({Link}:any) {
  return (
    <div className="w-[100%] p-6 pl-10 pr-10 bg-headerbg block md:hideen lg:hidden">
      <div className="flex flex-col gap-4">
        <Link
          href="/#features"
          className="p-3 bg-transparent rounded-md text-white hover:bg-footerbg"
        >
          Features
        </Link>
        <Link
          href="/#pricing"
          className="p-3 bg-transparent rounded-md text-white hover:bg-footerbg"
        >
          Pricing
        </Link>
        <Link
          href="/contact/sales"
          className="p-3 bg-transparent rounded-md text-white hover:bg-footerbg"
        >
          Contact Sales
        </Link>
        <Link
          href="/contact"
          className="p-3 bg-transparent rounded-md text-white hover:bg-footerbg"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
