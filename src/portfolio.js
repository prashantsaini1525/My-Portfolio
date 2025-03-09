/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Prashant Saini",
  title: "Hi, I'm Prashant",
  subTitle: emoji(
    "Hey there! I'm a passionate and aspiring Software Developer 🚀 who loves bringing ideas to life. I've built web applications using JavaScript, React.js, Node.js, and a bunch of other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1pNEG5U8ipkXiXczyFJw1nK-1H0mC90fo?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/prashantsaini1525/",
  linkedin: "https://www.linkedin.com/in/prashantssaini/",
  gmail: "Prashant.saini.3150@gmail.com",
  twitter: "https://x.com/Prashan58889893",
  facebook: "https://www.facebook.com/prashant.saini.31508076/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// About Section
const aboutSection = {
  title: "About Me",
  subTitle:
    "Hi, I'm Prashant Saini – a curious, driven full-stack developer from Aligarh, Uttar Pradesh. 🌐",
  aboutParagraphs: [
    "🎓 I completed my B.Tech in Information Technology from Dr. A.P.J. Abdul Kalam Technical University in July 2024 with a CGPA of 7.8. The moment I built my first web page, I knew that creating digital experiences was what I loved to do.",
    "💻 I work on both front-end and back-end development. I enjoy building user-friendly interfaces with JavaScript, HTML, and CSS, and I create reliable back-end systems using Node.js and MongoDB. My projects include a library management system, an educational website, and even a heart disease prediction model using machine learning.",
    "🚀 I mix creativity with solid coding skills. I love solving everyday problems with clear, efficient code and am always exploring new tools and techniques to improve my work.",
    "🤝 I value constant learning and teamwork. I believe that sharing ideas and working together leads to smart solutions that really make a difference.",
    "🙏 Thank you for reading about me. I'm excited to connect, collaborate, and use my skills to tackle new challenges."
  ],
  display: true
};

// Skills Section

const skillsSection = {
  title: "Tech Stack",
  subTitle:
    "Full-Stack Developer Showcasing a Modern Tech Stack with Custom Icons & Innovative Solutions.",
  // Software skills grouped by category
  softwareSkills: {
    webDevelopment: [
      // Front-end Technologies
      {
        skillName: "html-5",
        svgIconPath: "https://img.icons8.com/color/96/000000/html-5.png"
      },
      {
        skillName: "css3",
        svgIconPath: "https://img.icons8.com/color/96/000000/css3.png"
      },
      {
        skillName: "JavaScript",
        svgIconPath: "https://img.icons8.com/color/96/000000/javascript.png"
      },
      {
        skillName: "reactjs",
        svgIconPath: "https://img.icons8.com/color/96/000000/react-native.png"
      },
      {
        skillName: "nextjs",
        svgIconPath: "https://img.icons8.com/color/96/000000/nextjs.png"
      },
      {
        skillName: "tailwind",
        svgIconPath: "https://img.icons8.com/color/96/000000/tailwindcss.png"
      },
      // Removed EJS as it's not part of your skillset
      // Back-end / Server-side Technologies
      {
        skillName: "nodejs",
        svgIconPath: "https://img.icons8.com/color/96/000000/nodejs.png"
      },
      {
        skillName: "Express.js",
        svgIconPath: "https://img.icons8.com/color/96/000000/express-js.png"
      },
      {
        skillName: "sql-database",
        svgIconPath: "https://img.icons8.com/color/96/000000/database.png"
      },
      {
        skillName: "Mongo DB",
        svgIconPath: "https://img.icons8.com/color/96/000000/mongodb.png"
      }
    ],
    coding: [
      // Programming Languages (only including Java now)
      {
        skillName: "Java",
        svgIconPath:
          "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"
      }
      // Removed C language and C++ language
    ],
    tools: [
      // Development Tools and Utilities
      {
        skillName: "git",
        svgIconPath: "https://img.icons8.com/color/96/000000/git.png"
      },
      {
        skillName: "npm",
        svgIconPath: "https://img.icons8.com/color/96/000000/npm.png"
      },
      {
        skillName: "vscode",
        svgIconPath:
          "https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
      },
      {
        skillName: "figma",
        svgIconPath: "https://img.icons8.com/color/96/000000/figma.png"
      },
      {
        skillName: "notion",
        svgIconPath: "https://img.icons8.com/color/96/000000/notion.png"
      }
    ]
  },
  display: true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "55%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    },
    {
      Stack: "Version Control",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  schools: [
    {
      schoolName: "Aligarh College of Engineering and Technology (ACET)",
      logo: require("./assets/images/ACETLOGO.jpg"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "Nov 2020 - July 2024",
      desc: "Graduated with a CGPA of 7.8. ACET is affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU).",
      descBullets: [
        "Led the coding club, organizing technical workshops and hackathons.",
        "Coordinated the university's annual tech fest, fostering innovation and collaboration."
      ]
    }
  ],
  display: true,
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "",
      company: "",
      companylogo: require("./assets/images/Library.png"),
      date: "Oct 2022 - Mar 2023",
      desc: "",
      descBullets: [
        ""
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A showcase of my personal and collaborative projects that blend creativity with technology.",
  projects: [
    {
      image: require("./assets/images/Learniverse.png"),
      projectName: "Learniverse",
      projectDesc:
        "Learniverse is an evolving e-learning platform designed for students across different levels. Currently, it features a main page with Home, About, and Contact Us sections.",
      subtitle:
        "I'm actively developing Learniverse with plans to add many more features like courses, live classes, and interactive modules in the near future.",
      footerLink: [
        {
          name: "View Project",
          url: "https://learniverse-pied.vercel.app/" // Replace with your actual project URL
        }
      ]
    },
    {
      image: require("./assets/images/weather.png"),
      projectName: "Weatherwise",
      projectDesc:
        "A dynamic weather forecasting app that provides real-time updates and accurate predictions, helping users plan their day with confidence.",
      footerLink: [
        {
          name: "View Project",
          url: "https://weather-wise-ai.vercel.app/" // Replace with your actual project link
        }
      ]
    },
    {
      image: require("./assets/images/Library.png"),
      projectName: "MyLibrary",
      projectDesc:
        "A dynamic library management system built using Node.js, Express, EJS, and MongoDB. It simplifies tracking books and authors with efficient CRUD operations and a user-friendly design.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/prashantsaini1525/MyLibrary" // Replace with your actual project link
        }
      ]
    },
    {
      image: require("./assets/images/ITech.png"),
      projectName: "I Tech World",
      projectDesc:
        "An ongoing e-learning platform designed for students from high school to engineering offering interactive courses and practical learning experiences.",
      footerLink: [
        {
          name: "View Project",
          url: "https://i-tech-gamma.vercel.app/" // Replace with your actual project link
        }
      ]
    },
    {
      image: require("./assets/images/Heart.png"),
      projectName: "Heart Disease Prediction",
      projectDesc:
        "A machine learning project that predicts heart disease risk using real-world data, turning complex insights into actionable information.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/prashantsaini1525/Heart-Disease-Predicition" // Replace with your actual project link
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Problem Solving Basic Certificate",
      subtitle:
        "Through HackerRank’s engaging challenges, I refined my problem-solving skills and built a strong coding foundation, boosting my logical thinking and passion for coding.",
      image: require("./assets/images/HackerRank.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1kSiwm7T2VDl7XtT8eqayUu-LJvWxeUVB?usp=sharing"
        }
      ]
    },
    {
      title: "CSS Basic Certificate",
      subtitle:
        "I completed the CSS Basics course to enhance my design skills and create visually appealing web interfaces, mastering the art of clean and creative web styling.",
      image: require("./assets/images/HackerRank.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1GWZL8e9M9891-BfpVH9hiER9sJ19eADm?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Skill Builder Badge",
      subtitle:
        "Completed Generative AI Courses: 'Introduction to Generative AI – Art of Possible', 'Planning a Generative AI Certificate', and 'Building a Generative AI-Ready Organization'.",
      image: require("./assets/images/amazon.png"),
      imageAlt: "Amazon AWS Skill Builder",
      footerLink: [
        {
          name: "View All Certificates",
          url: "https://drive.google.com/drive/folders/1Yko2etEgpSiQnkOZBOaGYOBvCdJ1tIk0?usp=sharing" // Replace with your actual Google Drive link
        }
      ]
    },
    {
      title: "Data Analytics Consulting Virtual Internship",
      subtitle:
        "Completed on November 4th, 2023, this internship sharpened my skills in data quality assessment, insights, and presentation under expert mentorship.",
      image: require("./assets/images/KPMG.png"),
      imageAlt: "KPMG Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1mtV21KA-K9Gg4FI2mJjYjE-27o_LWBhn?usp=sharing"
        }
      ]
    },
    {
      title: "Data Analytics and Visualization Job Simulation",
      subtitle:
        "A transformative job simulation completed in October 2023, where I immersed myself in real-world projects, mastered data cleaning and modeling, created captivating visual stories, and presented clear, impactful insights.",
      image: require("./assets/images/accenture.png"),
      imageAlt: "ACCENTURE LOGO",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1Y252E-hI-7hvBEJ6TNOwvFaMIPhrud_0?usp=sharing"
        }
      ]
    },
    {
      title: "Google Developer Badge",
      subtitle: "Awarded for showing solid skills with Google tools and an ongoing drive to learn and try new things.",
      image: require("./assets/images/Google.png"), // Update with your badge image path
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "View Badge",
          url: "https://g.dev/prashant_saini"
        }
      ]
    },
    {
      title: "Apna College Alpha Java & DSA Certificate",
      subtitle: "Completed an intensive 4.5-month course at Apna College where I mastered Java fundamentals, learned essential data structures and algorithms, and honed my problem-solving skills.",
      image: require("./assets/images/APNA.png"), // Update the image path as needed
      imageAlt: "Apna College Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1-nqGZBUB0Ulule3Q-tmJBZELo5iklmFz?usp=sharing" // Replace with your actual certificate URL if available
        }
      ]
    },
    {
      title: "TVS Credit E.P.I.C 5.0-IT Challenge Participation",
      subtitle: "Proudly represented ACET, Aligarh in the Round 1 Online Quiz of the TVS Credit E.P.I.C 5.0-IT Challenge, demonstrating quick thinking and technical insight.",
      image: require("./assets/images/TVS.png"), // Update the image path as needed
      imageAlt: "TVS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1u5iCD8uuP4cWd4L-BtRtkSoaqa9N0jJE?usp=sharing" // Replace with your actual certificate URL
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [
    {
      title: "Git and GitHub Workshop",
      subtitle:
        "",
      slides_url:
        "",
      event_url:
        ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+91-955*****36 ",
  email_address: "Prashant.saini.3150@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Prashan58889893", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  aboutSection,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
