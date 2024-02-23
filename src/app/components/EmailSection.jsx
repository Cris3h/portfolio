import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkdinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm on the lookout for new chances to prove myself, so feel free to
          drop me a line anytime! Whether you've got a question or just wanna
          say hey, I'll do my best to hit you back.
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="https://github.com/Cris3h">
            <Image
              src={GithubIcon}
              alt="github icon cris treachi"
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/cristian-treachi-dev-fs/">
            <Image
              src={LinkdinIcon}
              alt="linkedin icon cris treachi"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div className="">
        <form className="flex flex-col gap-4">
          <label
            htmlFor="email"
            type="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="youremail@email.com"
          />

          <label
            htmlFor="subject"
            type="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Jhon Doe say"
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
