"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";


const TAB_DATA = [
    {
        title:'Skills',
        id:'skills',
        content: (
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
            </ul>
        )
    },
    {
        title:'Certifications',
        id:'certification',
        content: (
            <ul>
                <li>FullStack Web Developer (PERN) - Henry Bootcamp</li>
            </ul>
        )
    },
    {
        title:'Experience',
        id:'experience',
        content: (
            <ul>
                <li>FS Development - E-commerce <Link href={'https://snykers.vercel.app/'} target="_blank" rel="noopener noreferrer" className="text-purple-300 ">Snykers</Link></li>
                <li>SPA Dogs encyclopedia</li>
                <li>SPA Pokemon encyclopedia</li>
                <li>SPA Breast Cancer awareness</li>
            </ul>
        )
    },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/about2.jpg"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            placeat enim adipisci velit, labore nobis deserunt tenetur quaerat
            incidunt quam quo asperiores, voluptate consequatur sapiente modi
            iste laborum vero cumque.
          </p>
          <div className="flex flex-row  mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
            <div className="mt-8 ">{TAB_DATA.find((t)=> t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
