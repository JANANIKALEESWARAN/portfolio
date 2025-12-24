import type{ Project, Experience, Skill, Education } from '../types';

export const personalInfo = {
  name: "JANANI K",
  title: "B.Tech Artificial Intelligence and Data Science",
  email: "janani6002@gmail.com",
  phone: "8807773471",
  linkedin: "/www.linkedin.com/in/janani-k-682693291/",
  github: "/github.com/JANANIKALEESWARAN",
  leetcode: "/leetcode.com/u/Jananikaleeswaran/",
  objective: "Aspiring Software Engineer seeking an opportunity to apply strong programming, problem-solving, and analytical skills in developing secure and scalable technology solutions."
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "AI/ML Intern",
    company: "Generative AI Consortium",
    location: "Remote",
    period: "Mar 2025 - Apr 2025",
    description: [
      "Developed machine learning models for real-world applications",
      "Contributed to Generative AI projects",
      "Applied deep learning techniques to build scalable, user-centric solutions",
      "Aligned development with industry best practices"
    ]
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Skillfied Mentor",
    location: "Remote",
    period: "1st May 2025 - 31st May 2025",
    description: [
      "Performed end-to-end exploratory data analysis on the Bank Marketing dataset",
      "Cleaned, transformed, and visualized data using Python (Pandas, NumPy, Matplotlib/Seaborn)",
      "Generated data-driven reports on customer segmentation, subscription trends, and marketing effectiveness"
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Paralysis Agitan Prediction",
    description: "Developed an early-detection system for Parkinson's Disease using machine learning by analysing voice biomarkers with machine learning models, implementing SMOTE-based balancing, PCA-driven feature selection, and achieving up to 94.92% accuracy for clinical decision support.",
    techStack: ["Python", "Scikit-Learn", "SMOTE", "PCA", "Machine Learning Models (SVM, Random Forest, Gradient Boosting, KNN, Logistic Regression)"],
    github: "/github.com/JANANIKALEESWARAN/parkinson-s-disease-prediction-app"
  },
  {
    id: 2,
    title: "Blood Group Detection Using Fingerprint Image",
    description: "Developed a deep-learning-based biometric system for non-invasive blood group detection using fingerprint analysis, integrating CNN models for classification, minutiae-based feature extraction, and an end-to-end ML pipeline achieving 70% accuracy.",
    techStack: ["Python", "TensorFlow", "OpenCV", "CNN", "Scikit-Learn"],
    github: "/github.com/JANANIKALEESWARAN/BloodGroupDetection_app"
  },
  {
    id: 3,
    title: "Personal Expense Tracker",
    description: "Built a full-stack expense tracker application with real-time expense management, category-wise tracking, and secure CRUD operations using React for UI, Node.js/Express for backend APIs, and MongoDB for persistent data storage, deployed seamlessly on Vercel.",
    techStack: ["React", "Express", "MongoDB", "Node.js", "Vercel"],
    github: "/github.com/JANANIKALEESWARAN/expense_Backend"
  },
  {
    id: 4,
    title: "AI-Driven Virtual Try-On E-Commerce Platform",
    description: "Built an AI-driven virtual try-on e-commerce platform where users can upload their photos to preview outfits, get recommendations, and place orders using a full MERN stack with integrated pose detection and image processing.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "MediaPipe", "Vercel"],
    github: "/github.com/JANANIKALEESWARAN/outfitSnap"
  }
];

export const skills: Skill[] = [
  { name: "C", level: 85, category: "Languages" },
  { name: "C++", level: 80, category: "Languages" },
  { name: "Java", level: 75, category: "Languages" },
  { name: "Python", level: 95, category: "Languages" },
  { name: "React.js", level: 90, category: "Web Development" },
  { name: "Node.js", level: 85, category: "Web Development" },
  { name: "Express.js", level: 85, category: "Web Development" },
  { name: "TensorFlow", level: 80, category: "ML/DL" },
  { name: "Keras", level: 75, category: "ML/DL" },
  { name: "NLTK", level: 70, category: "ML/DL" },
  { name: "PowerBI", level: 80, category: "Tools" },
  { name: "MongoDB", level: 85, category: "Database" },
  { name: "MySQL", level: 80, category: "Database" }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "B.Tech Artificial Intelligence And Data Science",
    institution: "Kongu Engineering College",
    period: "2023 - 2027",
    cgpa: "9.06/10"
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    institution: "Venkateeswara Vidhyalaya Higher Secondary School",
    period: "2021 - 2023",
    percentage: "92.8%"
  },
  {
    id: 3,
    degree: "Secondary School Leaving Certificate",
    institution: "Nanjappa Nikkendhan High School",
    period: "2020 - 2021"
  }
];

export const certifications = [
  "Microsoft Certified Power BI Data Analyst Associate, March 2025"
];

export const achievements = [
  "Academic Excellence (2024-2025)",
  "Executive Member in NSS (2024-2025)",
  "Executive Member in CSI (2024-2025)"
];

export const publications = [
  "Quantum Computing In Artificial Intelligence, Book Chapter in Quantum CRC, 2025.",
  "Paralysis Agitans Prediction Using Machine Learning Algorithms, IEEE, 2025."
];