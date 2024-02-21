import React from "react";

const ProjectsSection = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        className="h-52 md:h-72"
      ></div>
      <div className="text-white">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectsSection;
