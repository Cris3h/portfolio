import Link from "next/link";

export const projectsData = [
  {
    id: 1,
    title: "My very first portfolio",
    description: "Minimalistic Portfolio",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Cris3h/portfolio-cv",
    previewUrl: "https://cris3h.github.io/portfolio-cv/portfolio/",
  },
  {
    id: 2,
    title: "E-commerce Skykers",
    description: "E-commerce w admin/user functions",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/snYKersCompany/shoes-eComerce",
    previewUrl: "https://snykers.vercel.app/",
  },
  {
    id: 3,
    title: "Dr Dosage",
    description: "Pediatric dosis helper",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Cris3h/dosis",
    previewUrl: "https://drhelper.vercel.app/",
  },
  {
    id: 4,
    title: "To Do APP",
    description: "Simple To Do app with auth login based on cookies",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Cris3h/Auth-ToDo-Client",
    previewUrl: "https://auth-to-do-client.vercel.app/",

  },
  {
    id: 5,
    title: "Liston Rosa - Pink Ribbon",
    description: "Breast Cancer awareness (BETA test || mobile designe)",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/liston-rosa/liston-rosa-front",
    previewUrl: "https://liston-rosa-front.vercel.app/",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul>
        <li>FullStack Web Developer (PERN) - Henry Bootcamp</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>
          <Link
            href={"https://snykers.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 "
            >
            Snykers - {" "}
          </Link>
            E-commerce
        </li>
        <li>
          <Link
            href={"https:"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 "
          >
            Dogs
          </Link>{" "}
          encyclopedia
        </li>
        <li>
          {" "}
          <Link
            href={"https:"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 "
          >
            Pokemon
          </Link>{" "}
          encyclopedia
        </li>
        <li>
          {" "}
          <Link
            href={"https:"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 "
          >
            Liston Rosa -
          </Link>
          {" "}Breast Cancer awareness project
        </li>
        <li>
          <Link
            href={"https://auth-to-do-client.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 "
          >
            To do list {" "} 
          </Link>
           - with auth method
        </li>
        <li>
          <Link
          href={'https://drhelper.vercel.app/'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-300 "
          >
          Dr Dosage{" "}
          </Link>
            - the pediatric dosage guide that you were looking for
        </li>
      </ul>
    ),
  },
];
