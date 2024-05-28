'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkdinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, subject, message})
    }) 

    const data = await response.json();
    console.log({submit: data})
  }

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10">
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
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
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
              placeholder="youremail@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
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
              placeholder="Jhon Doe"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-6 ">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello Cris, ..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button 
          type="submit"
          className="bg-blue-400 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
