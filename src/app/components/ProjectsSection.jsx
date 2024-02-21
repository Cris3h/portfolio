"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../utils";
import ProjectTag from "./ProjectTag";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTags = (newTag) => {
    setTag(newTag);
  };

  const filterProjects = projectsData.filter((p) => p.tag.includes(tag));

  return (
    <>
      <h2>My Projects</h2>
      <div className=" text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTags}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTags}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTags}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((p) => (
          <ProjectCard
            key={p.id}
            imgUrl={p.image}
            title={p.title}
            description={p.description}
            gitUrl={p.gitUrl}
            previewUrl={p.previewUrl}
            tags={p}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
