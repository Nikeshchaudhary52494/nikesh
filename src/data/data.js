export const projects = [
  {
    id: 1,
    name: "Replino.ai",
    number: "001",
    description:
      "AI-powered email assistant with Spring Boot backend and Gemini AI integration for smart contextual replies. Features React web app, Chrome extension, and secure REST APIs.",
    tools: ["Java", "Spring Boot", "Gemini AI", "React", "Chrome Extension"],
    imageUrl: "replino.png",
    githubUrl: "https://github.com/Nikeshchaudhary52494/replino.ai.git",
    liveUrl: "https://replino.vercel.app/",
    homeUrl: "yuta.png",
  },
  {
    id: 2,
    name: "Microfeed",
    number: "002",
    description:
      "Social feed app with independent microservices for auth, profiles, and posts. Uses RabbitMQ for async communication and Nginx API Gateway for routing and scalability.",
    tools: ["Spring Boot", "PostgreSQL", "RabbitMQ", "Nginx", "Docker Compose"],
    imageUrl: "microfeed.png",
    githubUrl: "https://github.com/Nikeshchaudhary52494/microfeed.git",
    homeUrl: "chainsaw.png",
  },
  {
    id: 3,
    name: "byte",
    number: "004",
    description:
      "Full-stack e-commerce platform with authentication, dynamic product filtering, admin dashboard, and product reviews. Built with React, Express, MongoDB, and TailwindCSS.",
    tools: ["React", "Express", "MongoDB", "Redux Toolkit", "TailwindCSS"],
    imageUrl: "byte.png",
    githubUrl: "https://github.com/Nikeshchaudhary52494/byte.git",
    liveUrl: "https://byte-ecommerce.vercel.app/",
    homeUrl: "aot.png",
  },
  {
    id: 4,
    name: "harmonic",
    number: "005",
    description:
      "Music streaming and social listening platform with real-time synced playback, playlists, and secure authentication. Built with Next.js 14, Prisma, PostgreSQL, and WebSockets.",
    tools: [
      "Next.js 14",
      "Prisma",
      "PostgreSQL",
      "Zustand",
      "TailwindCSS",
      "Shadcn UI",
      "Node.js",
      "Express",
      "WebSocket",
      "Socket.io",
    ],
    imageUrl: "harmonic.png",
    githubUrl: "https://github.com/Nikeshchaudhary52494/Harmonic.git",
    liveUrl: "https://harmonic-music.vercel.app/",
    homeUrl: "mha.png",
  },
  {
    id: 5,
    name: "Authify",
    number: "003",
    description:
      "Authentication service with OTP email verification, JWT-based login, secure password reset, and centralized exception handling. Containerized with MySQL and Spring Boot 3.",
    tools: ["Java 21", "Spring Boot 3", "Spring Security", "MySQL", "JWT"],
    imageUrl: "authify.png",
    githubUrl: "https://github.com/Nikeshchaudhary52494/authify.git",
    homeUrl: "deathnote.png",
  },
  {
    id: 6,
    name: "ping",
    number: "006",
    description:
      "End-to-end encrypted chat app with personal/group messaging, themes, audio-video calls (WebRTC), and infinite scroll. Built with Next.js, Express, Node.js, and TypeScript.",
    tools: [
      "Next.js",
      "Express",
      "Node.js",
      "TypeScript",
      "WebRTC",
      "TailwindCSS",
      "Shadcn UI",
      "Socket.io",
    ],
    imageUrl: "ping.png",
    githubUrl: "https://github.com/Nikeshchaudhary52494/ping.git",
    liveUrl: "https://ping-messenger.vercel.app/",
    homeUrl: "demons.png",
  },
];

export const sections = [
  {
    title: "Location",
    content: ["India", "28° 36′ N 77° 13′ E"],
  },
  {
    title: "Socials",
    content: [
      { text: "Github", href: "https://github.com/Nikeshchaudhary52494" },
      { text: "LinkedIn", href: "https://www.linkedin.com/in/nikesh-chaudhary-534ba2230/" },
      { text: "Twitter", href: "https://x.com/nikesh_003" },
    ],
    isLinks: true,
  },
  {
    title: "Stack",
    content: [
      // Languages
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",

      // Frontend
      "React",
      "Next.js",
      "Tailwind CSS",

      // Backend
      "Node.js",
      "Express",
      "Spring Boot",

      // Databases
      "MongoDB",
      "PostgreSQL",

      // APIs & Auth
      "REST",
      "GraphQL",
      "gRPC",
      "Clerk",

      // Infra & DevOps
      "AWS (EC2, Lambda, S3)",
      "Docker",
      "Redis",
      "RabbitMQ",
      "Kafka",
    ],
  },
];
