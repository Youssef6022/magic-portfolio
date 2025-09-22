import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Youssef",
  lastName: "Achour",
  name: `Youssef Achour`,
  role: "Fullstack Engineer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Europe/Brussels", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["French", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable backend systems and innovative projects</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Cuik.io</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/cuik-io",
  },
  subline: (
    <>
      I'm Youssef, a fullstack engineer specialized in backend development.
      <br /> I build scalable systems and create innovative projects like Cuik.io and Magistral.ai.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Brussels, Belgium`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Brussels-based fullstack engineer with a strong specialization in backend development.
        With a passion for building scalable systems and innovative solutions, I create projects that
        bridge technology and real-world applications. My expertise spans from low-level systems programming
        to modern web architectures.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Main Projects",
    experiences: [
      {
        company: "Cuik.io",
        timeframe: "2023 - Present",
        role: "Founder & Lead Developer",
        achievements: [
          <>
            Built a scalable backend infrastructure handling real-time data processing and API integrations.
          </>,
          <>
            Implemented high-performance algorithms using Rust for critical system components.
          </>,
          <>
            Developed the full-stack application using Next.js and FastAPI with microservices architecture.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Cuik.io Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Magistral.ai",
        timeframe: "2023 - Present",
        role: "Co-Founder & Backend Engineer",
        achievements: [
          <>
            Architected and implemented AI-powered backend services using FastAPI and Python.
          </>,
          <>
            Designed efficient data pipelines for machine learning model training and inference.
          </>,
          <>
            Built robust API infrastructure handling thousands of concurrent requests with minimal latency.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Magistral.ai Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Magistral.ai Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "ULB Brussels",
        description: <>Civil Engineering - Applied Sciences Faculty</>,
      },
      {
        name: "UCL",
        description: <>Pharmacy Studies</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend Development",
        description: (
          <>I build high-performance APIs and microservices with FastAPI, handling complex data processing and real-time systems.</>
        ),
        tags: [
          {
            name: "FastAPI",
            icon: "python",
          },
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Backend Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Frontend & Full-Stack",
        description: (
          <>I create modern web applications with Next.js and Astro, focusing on performance and user experience.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "javascript",
          },
          {
            name: "Astro",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Systems Programming",
        description: (
          <>I develop high-performance systems and desktop applications with Rust, C++, and Tauri for optimal efficiency.</>
        ),
        tags: [
          {
            name: "Rust",
            icon: "rust",
          },
          {
            name: "C++",
            icon: "cpp",
          },
          {
            name: "Tauri",
            icon: "tauri",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
