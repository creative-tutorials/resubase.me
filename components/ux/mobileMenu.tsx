export default function MobileMenu({ Link }: any) {
  return (
    <div className="w-[100%] p-6 pl-10 pr-10 bg-headerbg block md:hideen lg:hidden">
      <div className="flex flex-col items-start gap-8 mt-20">
        <button>
          <Link
            href="/about"
            className="p-3 bg-transparent rounded-md text-white hover:bg-footerbg"
          >
            About
          </Link>
        </button>
        {/* <Link
          href="/#pricing"
          className="p-3 bg-transparent rounded-md text-white hover:bg-footerbg"
        >
          Pricing
        </Link> */}
        <button>
          <Link
            href="/changelog"
            className="p-3 bg-transparent rounded-md text-white hover:bg-footerbg"
          >
            Changelog
          </Link>
        </button>
        <button
          data-tally-open="meQxol"
          data-tally-emoji-text="🚀"
          data-tally-emoji-animation="tada"
        >
          <Link
            href="/contact"
            className="p-3 bg-transparent rounded-md text-white hover:bg-footerbg"
          >
            Contact
          </Link>
        </button>
      </div>
    </div>
  );
}
