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
  username: "Suvitha Ramesh",
  title: "Hi all, I'm Suvitha",
  subTitle: emoji(
    "A passionate Software Developer 🚀 with hands-on experience in full-stack and AI-driven applications. Proficient in Java, JavaScript, web technologies, and automation tools. Experienced in agile software development methodologies and exposed to cross-cultural teamwork through Japanese language proficiency."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/suvitharamesh",
  linkedin: "https://www.linkedin.com/in/suvitharamesh/",
  gmail: "suviremsh@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER WITH EXPERTISE IN FULL-STACK AND AI-DRIVEN APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build automation solutions and custom add-ons within Jira, Confluence, and Jira Service Management platforms"
    ),
    emoji("⚡ Develop Flask-based AI systems for e-waste image classification with high model accuracy"),
    emoji(
      "⚡ Integration of API services and experienced in agile software development methodologies"
    ),
    emoji(
      "⚡ Strong leadership skills and cross-cultural exposure through Japanese language proficiency"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "M. Kumarasamy College of Engineering",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "2023 - 2027",
      desc: "CGPA: 7.8",
      descBullets: [
        "Object-Oriented Programming, Database Management Systems, Web Technologies, Software Engineering"
      ]
    },
    {
      schoolName: "Malar Matric Higher Secondary School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Higher Secondary Certificate",
      duration: "2019 - 2023",
      desc: "Percentage: 88%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python/Java", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Technologies",
      progressPercentage: "80%"
    },
    {
      Stack: "API Integration",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Internship",
      company: "INNOOV Co., Ltd, Japan",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "January 2025 – Present",
      desc: "Building automation solutions and custom add-ons within Jira, Confluence, and Jira Service Management platforms.",
      descBullets: [
        "Earned Jira Admin (ACP-620) and Jira Admin (ACP-120) certifications",
        "Gained practical experience in agile software development methodologies",
        "Exposed to cross-cultural teamwork in professional software environment"
      ]
    },
    {
      role: "Developer & Graphic Designer",
      company: "Fewinfos (Freelancing & Open-Source)",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "November 2024 – Present",
      desc: "Contributing to open-source software development and visual design projects.",
      descBullets: [
        "Contributing to open-source software development and visual design projects",
        "Collaborating with a distributed team of 10+ members across India",
        "Supporting client projects, earning ₹10K+ monthly revenue generation"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY RECENT PROJECTS AND APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Retail Chain Inventory Tracker",
      projectDesc: "A system to track and manage product stock in multiple retail stores with real-time updates and low stock alerts. Built with HTML, CSS, JavaScript, Python (Flask), SQLite, Git",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/suvitharamesh/retail-inventory-tracker"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Eco-Trace – Smart E-waste Classifier",
      projectDesc: "A Flask-based AI system for e-waste image classification, achieving high model accuracy using OpenCV and scikit-learn. Technologies: Python, Flask, SQLite, OpenCV, NumPy, scikit-learn, HTML",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/suvitharamesh/eco-trace"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Professional Certifications and Achievements",

  achievementsCards: [
    {
      title: "JLPT N3 - Japanese Language Proficiency",
      subtitle:
        "Japanese Language Proficiency Test N3 certification demonstrating intermediate-level Japanese language skills.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "JLPT Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Atlassian Jira Administrator (ACP-120)",
      subtitle:
        "Certified Jira Administrator with expertise in configuring and managing Jira instances.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Atlassian Logo",
      footerLink: [
        {
          name: "View Certification",
          url: ""
        }
      ]
    },
    {
      title: "Atlassian Certifications (ACA-900, ACP-620)",
      subtitle: "Atlassian Certified Associate and Jira Cloud Administration certifications",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Atlassian Logo",
      footerLink: [
        {name: "Certifications", url: ""}
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
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
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6379407335",
  email_address: "suviremsh@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  isHireable,
  resumeSection
};
