// src/data/portfolioData.js

export const personalInfo = {
  name: "Mohomed Rakeeb",
  role: "Frontend React Developer & UI/UX Designer",
  bio: "Final-year Computer Science student specializing in building interactive, user-centric web applications. I bridge the gap between design and engineering, combining a strong eye for UI/UX with efficient AI workflows to ship high-quality products.",
};

export const skills = {
  primary: ["React", "JavaScript", "HTML/CSS", "UI/UX Design", "API Integration", "AI Prompt Engineering"],
  familiar: ["Python", "FastAPI", "Java", "Advanced Excel"]
};

export const projects = [
  {
    id: 1,
    title: "IQRAT - Intelligent QR Attendance Tracker",
    role: "Lead Frontend Developer & UI/UX Designer",
    overview: "A secure, automated attendance ecosystem replacing slow manual tracking with dynamic QR codes and machine learning validation.",
    keyFeatures: [
      "Architected the complete UI/UX and built the React frontend from scratch.",
      "Mapped and integrated complex API endpoints to the FastAPI backend for real-time synchronization.",
      "Integrated interfaces to display insights driven by LSTM and Random Forest machine learning models.",
      "Designed and implemented a gamified student dashboard to visualize attendance streaks and engagement metrics.",
      "Ensured a seamless, mobile-first responsive experience, which is critical for students scanning QR codes on varying devices.",
      "Managed complex frontend state and asynchronous error handling to provide immediate visual feedback during live scans."
    ],
    execution: "This system was driven by our team's shared vision and execution, rather than just being a supervisor's concept. Collaborating closely with Aakil and Ajwath, we divided the architecture, security logic, and deployment tasks to ensure the React frontend perfectly aligned with the backend and AI models.",
    techStack: ["React", "UI/UX", "API Integration", "FastAPI", "LSTM", "Random Forest"],
    githubLink: "https://github.com/Rakeeb510/iqrat"
  }
];

export const education = {
  degree: "BS in Computer Science",
  institution: "Government College University",
  period: "Expected 2026"
};

export const experienceList = [
  {
    id: 1,
    role: "Volunteer Teacher",
    period: "Jun 2022 - Dec 2022",
    description: "Taught advanced students, developing strong technical communication and presentation skills."
  },
  {
    id: 2,
    role: "Cashier",
    period: "Jan 2021 - Dec 2021",
    description: "Managed high-volume transactions, requiring strict attention to detail, accuracy, and reliability under pressure."
  }
];

export const servicesList = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive, user-centric, and visually appealing interfaces using modern design principles."
  },
  {
    title: "Frontend Web Development",
    description: "Building responsive, fast, and interactive web applications from scratch using React and JavaScript."
  },
  {
    title: "API & System Integration",
    description: "Seamlessly connecting rich frontends to complex backend APIs and machine learning models."
  }
];


export const detailedSkills = [
  {
    title: "Frontend Web Development",
    iconName: "Code",
    description: "Building responsive, highly interactive web applications using React with a focus on clean, maintainable architecture."
  },
  {
    title: "UI/UX Design",
    iconName: "Layout",
    description: "Crafting intuitive, user-centric interfaces that bridge the gap between aesthetic design and functional engineering."
  },
  {
    title: "API Integration",
    iconName: "Server",
    description: "Seamlessly connecting frontend interfaces to external endpoints for real-time data synchronization."
  },
  {
    title: "AI Integration",
    iconName: "Brain",
    description: "Leveraging intelligent models to build data-driven features and designing interfaces that communicate AI insights clearly."
  },
  {
    title: "Software Quality Assurance",
    iconName: "CheckCircle",
    description: "Ensuring reliable, bug-free applications through rigorous testing, debugging, and strict quality control standards."
  },
  {
    title: "Data Analysis & Reporting",
    iconName: "LineChart",
    description: "Utilizing Advanced Excel and visualization tools to process complex information and drive structured decision-making."
  }
];