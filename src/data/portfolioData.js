// ===================================================
// EDIT THIS FILE to personalize your portfolio
// ===================================================

export const personal = {
  name: "Ngô Quang Nhiệm",
  title: "Data Engineer",
  tagline: "Building data pipelines, analytical models, and intelligent data systems.",
  email: "ngoquangnhiem1712@gmail.com",
  github: "https://github.com/icebearhoho",
  linkedin: "https://www.linkedin.com/in/nhi%E1%BB%87m-ng%C3%B4-quang-8a3233359/",
  location: "Ho Chi Minh City, Vietnam",
  bio: `I'm a data engineer and analyst with hands-on experience building ETL pipelines,
  multimodal data systems, and time series forecasting models. I enjoy turning messy,
  unstructured data into clean, actionable insights — from ingestion all the way to
  visualization and business intelligence.`,
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "JavaScript", "Node.js"],
  },
  {
    category: "Data & ETL",
    items: ["ETL Pipelines", "Web Scraping", "ARIMA / Time Series", "Feature Engineering"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Cloud & Tools",
    items: ["Cloudinary", "Git", "AWS (learning)", "GCP (learning)"],
  },
  {
    category: "Analytics & Visualization",
    items: ["Tableau", "Excel", "Google Sheets", "Statistical Modeling"],
  },
];

export const projects = [
  {
    title: "Real-Time Multimodal Health Data Platform",
    description:
      "Engineered a real-time data pipeline ingesting voice recordings and text logs into Firebase. Decoupled audio and text processing streams to extract features for downstream ML models tracking physical and psychological health metrics.",
    tags: ["Firebase", "Python", "NLP", "ML"],
    github: "",
    demo: "",
  },
  {
    title: "Academic Document ETL & Asset Management System",
    description:
      "Built a Node.js scraping engine to extract hundreds of university exam records from academic portals. Transformed and indexed data in MongoDB, with Cloudinary integration and auto-deletion webhooks to maintain zero orphaned files.",
    tags: ["Node.js", "MongoDB", "Cloudinary", "ETL", "Web Scraping"],
    demo: "",
  },
  {
    title: "Financial Time Series Forecasting & Investment Viability Analysis",
    description:
      "Applied ARIMA modeling with ACF/PACF analysis and log transformations to stabilize volatile financial time series. Built financial models computing NPV, IRR, and multi-year loan amortization schedules for project viability assessment.",
    tags: ["Python", "ARIMA", "Time Series", "SQL", "Excel"],
    github: "https://github.com/icebearhoho/STAT3013.Q21_Group09",
    demo: "",
  },
  {
    title: "Social Media Travel Trend Research Pipeline",
    description:
      "Researched travel trends by scraping social media data with Selenium, then cleaning and labeling the raw data using Python. Produced a structured CSV dataset ready for trend analysis and visualization.",
    tags: ["Python", "Selenium", "Web Scraping", "Data Cleaning", "CSV"],
    github: "",
    demo: "",
  },
];

export const experience = [
  {
    role: "Research Assistant",
    company: "University of Information Technology (UIT)",
    period: "2025 – 2026",
    location: "Ho Chi Minh City, Vietnam",
    points: [
      "Collected, cleaned, and structured research datasets for analytical use",
      "Built data pipelines to process and transform raw academic and experimental data",
      "Supported research teams with data analysis, visualization, and reporting",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "University of Information Technology (UIT)",
    period: "2024 – now",
    note: "Ho Chi Minh City National University",
  },
];
