import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  hyperverge,
  newtonSchool,
  audiophiles,
  codeEditor,
  openAi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DevOps",
    icon: docker,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDE INTERN",
    company_name: "Hyperverge",
    icon: hyperverge,
    iconBg: "#383E56",
    date: "Januray 2024 - Current",
    points: [
      "Created a Book My Show site with TypeScript, Tailwind, Node.js, and Google Auth integration",
      "Implemented caching, pagination, lazy loading, and minified CSS/JS scripts to optimize performance",
      "Developed and published a UI library on npm with 4k+ downloads, comprising diverse components.",
      "Conducted Playwright-based component testing and utilized Jest for unit testing to ensure robust code quality.",
      "Used Docker for efficient project deployment, enhancing scalability and maintainability of the website",
    ],
  },
  {
    title: "Technical Content Engineer Intern",
    company_name: "Newton School",
    icon: newtonSchool,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - April 2023",
    points: [
      "Created and reviewed Real-life programming questions and test problems created by other problem setters along with their test cases for frontend technologies (HTML, CSS, JS React)",
      "Created assessment-based multiple choice questions for learning outcomes for the frontend technologies (HTML, CSS, JS React)",
      "Implemented and ensured best practices are followed in all technical content.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Audiophiles",
    description:
      "Developed a responsive Ecommerce app with secure Stripe payments, managing products and checkout process to ensure a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: audiophiles,
    source_code_link: "https://eccomerce-sanity-stripe-sanskarchandra26.vercel.app/",
  },
  {
    name: "Code Editor",
    description:
      "Developed a CodeEditor using React.js, CodeMirror offering a user-friendly web-based code editor with real-time HTML, CSS, and JavaScript editing capabilities..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CodeMirror",
        color: "green-text-gradient",
      },
    ],
    image: codeEditor,
    source_code_link: "https://code-editor-5.vercel.app/",
  },
  {
    name: "OpenAi Article Summarizer",
    description:
      "Built an article summarizer application using open ai's gpt model and inegrated rtk queries",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "rapid api",
        color: "green-text-gradient",
      },
      {
        name: "rtk query",
        color: "pink-text-gradient",
      },
    ],
    image: openAi,
    source_code_link: "https://super-pudding-87d56d.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
