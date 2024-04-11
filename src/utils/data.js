import font from '../assets/skillsPart/frontend-icon.png'
import end from '../assets/skillsPart/backend-icon.png'
import database from '../assets/skillsPart/soft-skills-icon.png'
import tools from '../assets/skillsPart/tools-icon.png'
export const SKILLS= [
  {
      title:"Front-End",
      icon:font,
      skills: [
          {skills:"HTML",percentage:"20%"},
          {skills:"CSS(SCSS/Sass/Tailwind)",percentage:"10%"},
          {skills:"JavaScript (TypeScript)",percentage:"45%"},
          {skills:"React.js",percentage:"30%"},
      ],
  },
  {
      title:"Back-End",
      icon:end,
      skills: [
          {skills:"C#",percentage:"80%"},
          {skills:"Node.js",percentage:"70%"},
          {skills:"Python",percentage:"75%"},
          {skills:"Java",percentage:"20%"},
      ],
  },
  {
      title:"Database",
      icon:database,
      skills: [
          {skills:"mySQL",percentage:"90%"},
          {skills:"MongoDB",percentage:"70%"},
          {skills:"Firebase",percentage:"55%"},
          {skills:"Java",percentage:"50%"},
      ],
  },
  {
      title:"Tools",
      icon:tools,
      skills:[
          {skills:"Git & GitHub",percentage:"82%"},
          {skills:"Visual Studio Code",percentage:"70%"},
          {skills:"Responsive Design",percentage:"15%"},
          { skills: "Bootstrap", percentage: "61%" }
      ],
  },
]
export const WORK_EXPERIENCE = [
    {
      title: "Senior Frontend Developer at Tech Innovators",
      date: "January 2022 - Present",
      responsibilities: [
        "Led a team of frontend developers in the redesign of the company's flagship product, resulting in a 30% increase in user satisfaction.",
        "Implemented advanced CSS animations and transitions to enhance the overall user experience.",
        "Collaborated with UX/UI designers to translate wireframes and mockups into responsive and interactive web applications.",
        "Introduced and integrated Vue.js into the tech stack, improving code maintainability and development efficiency.",
      ],
    },
    {
      title: "Junior Web Developer at Digital Solution",
      date: "June 2020 - December 2021",
      responsibilities: [
        "Developed and maintained client websites, ensuring high-quality standards and timely project delivery.",
        "Implemented SEO best practices, leading to a 25% increase in organic search traffic for key clients.",
        "Worked closely with the design team to create pixel-perfect, cross-browser-compatible web pages.",
        "Conducted code reviews and mentored junior developers in adopting best coding practices.",
      ],
    },
    {
      title: "Frontend Intern at Web Studio",
      date: "May 2019 - August 2019",
      responsibilities: [
        "Assisted in the development of a new e-commerce platform, contributing to the implementation of frontend features using React.js.",
        "Conducted performance optimization tasks, resulting in a 15% improvement in page load times.",
        "Participated in daily stand-up meetings and collaborated with senior developers to troubleshoot and resolve coding issues.",
        "Gained hands-on experience with version control systems, specifically Git, in a collaborative development environment.",
      ],
    },
  ];