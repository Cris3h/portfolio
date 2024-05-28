"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TAB_DATA } from "../utils";

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
            Welcome to my corner on the digital world! I'm Cris a passionate full stack developer immersed in the
            dynamic world of technology. With expertise in the PERN stack, I
            thrive on crafting innovative solutions that push boundaries and
            shape the future. My journey into tech began unconventionally, with
            a leap into a bootcamp instead of traditional academia. Since then,
            my love for development has only deepened, fueled by a relentless
            desire to understand and excel in this ever-evolving field. When
            faced with challenges, I tackle them head-on, leveraging both
            analytical prowess and collaborative teamwork. My commitment to
            continuous learning drives me forward, ensuring I stay at the
            forefront of industry trends. Join me as we explore the endless
            possibilities of technology and make a meaningful impact in the IT
            world together.
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
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
