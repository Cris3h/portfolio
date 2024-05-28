import Image from "next/image";
import Link from "next/link";
import logoDarkBG from "../../../public/images/logos/logoDarkBG.png";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link
          href={"https://github.com/cris3h"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={logoDarkBG} width={120} height={100} />
        </Link>
        <p className="text-slate-700 ">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
