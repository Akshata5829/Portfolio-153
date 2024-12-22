import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

// Import custom icons
import pythonIcon from "../assets/tech/python.png";
import excelIcon from "../assets/tech/excel.png";
import sqlIcon from "../assets/tech/sql.png";
import mlIcon from "../assets/tech/ML.png";
import colabIcon from "../assets/tech/COLLAB.png";
import staIcon from "../assets/tech/sta.png";


// Import company icons
import pravniyaIcon from "../assets/company/pravinya.jpg";
import cognifyzIcon from "../assets/company/cognifyz.png";
import brainIcon from "../assets/company/brain.png";

// Import project images
import amazonDashboard from "../assets/AmazonDashboard.png";
import udemy from "../assets/udemy.png";
import bank from "../assets/bank.png";
import hp from "../assets/hp.png";
import accenture from "../assets/Accenture.png";
import agm from "../assets/agm.png";
import micro from "../assets/micro.png";


export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services: TService[] = [
  { title: "Python", icon: pythonIcon },
  { title: "Google Colab", icon: colabIcon },
  { title: "Machine Learning", icon: mlIcon },
  { title: "Statistical Knowledge", icon: staIcon },
];

export const technologies: TTechnology[] = [
  { name: "Python", icon: pythonIcon },
  { name: "Google Colab", icon: colabIcon },
  { name: "Excel", icon: excelIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "Machine Learning", icon: mlIcon },
];

export const experiences: TExperience[] = [
  {
    title: "Data Analyst Intern",
    companyName: "Pravinya",
    icon: pravniyaIcon,
    iconBg: "#1E293B",
    date: "June 2023 - August 2023",
    points: [
      "Analyzed large datasets to extract actionable insights and present findings to stakeholders.",
      "Developed interactive dashboards and reports using tools like Tableau and Excel to aid decision-making.",
      "Collaborated with cross-functional teams to understand business requirements and translate them into data-driven solutions.",
      "Performed data cleaning and transformation to ensure accuracy and reliability of insights.",
      "Contributed to predictive analysis projects, applying statistical models and techniques to forecast trends.",
    ],
  },
  {
    title: "Machine Learning Intern",
    companyName: "Cognifyz Technologies",
    icon: cognifyzIcon,
    iconBg: "#23395B",
    date: "May 2024 - July 2024",
    points: [
      "Developed machine learning models to predict restaurant ratings and house prices using advanced algorithms and techniques.",
      "Worked with large datasets, performing data preprocessing, cleaning, and feature engineering to improve model accuracy.",
      "Collaborated with a cross-functional team to identify business challenges and propose data-driven solutions.",
      "Implemented various evaluation metrics to validate and optimize the performance of machine learning models.",
      "Documented project workflows and presented key findings to stakeholders in a clear and concise manner.",
    ],
  },
  {
    title: "Machine Learning Intern",
    companyName: "Brainwave Technologies",
    icon: brainIcon,
    iconBg: "#123456",
    date: "August 2024 - October 2024",
    points: [
      "Designed and deployed machine learning models to enhance decision-making processes in real-world scenarios.",
      "Processed and analyzed diverse datasets, utilizing advanced feature selection and transformation techniques.",
      "Collaborated with domain experts to align technical solutions with business objectives and requirements.",
      "Developed innovative solutions for automating tasks using machine learning algorithms.",
      "Prepared detailed reports and delivered presentations to effectively communicate insights and results to the team and stakeholders.",
    ],
  },
];

export const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Recognized skills in extracting, analyzing, and interpreting data for strategic decision-making.",
    name: "Accenture",
    designation: "Data Visualization",
    company: "",
    image: accenture,
  },
  {
    testimonial:
      "Demonstrated expertise in building and deploying machine learning models using Microsoft technologies.",
    name: "Microsoft",
    designation: "Machine learning ",
    company: "",
    image: micro,
  },
  {
    testimonial:
      "Validated proficiency in data analysis, visualization, and machine learning for business insights.",
    name: "HP",
    designation: "Data Science",
    company: "",
    image: hp,
  },
];

export const projects: TProject[] = [
  {
    name: "Amazon Analysis",
    description:
      "Web-based platform that allows users to analyze Amazon sales data and generate insights through interactive dashboards.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PowerBI", color: "green-text-gradient" },
      { name: "Kaggle", color: "pink-text-gradient" },
    ],
    image: amazonDashboard,
    sourceCodeLink: "https://github.com/123spandu/Amazon_Sales_Analytics",
  },
  {
    name: "Udemy Analysis",
    description:
      "Web application for analyzing Udemy sales and trends, helping users make data-driven decisions.",
    tags: [
      { name: "Google Collab", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "PowerBi", color: "pink-text-gradient" },
    ],
    image: udemy,
    sourceCodeLink: "https://github.com/123spandu/Udemy_Sales_Analysis",
  },
  {
    name: "Bank Loan Analysis",
    description:
      "Comprehensive platform for analyzing bank loan data, providing insights into approval trends and risk factors.",
    tags: [
      { name: "Kaggle", color: "blue-text-gradient" },
      { name: "Excel", color: "green-text-gradient" },
      { name: "PowerPoint", color: "pink-text-gradient" },
    ],
    image: bank,
    sourceCodeLink: "https://github.com/123spandu/Bankloan",
  },
];
