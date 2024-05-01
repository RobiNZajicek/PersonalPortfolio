import Nara from "../assets/Nara.png";
import cardsss from '../assets/cardsss.png'
import xtb from '../assets/xtb.png'
  import txtGame from '../assets/txtGame.png'
  import dokumentace from '../assets/dokumentace/DokumentEmpty.pdf'
  import dokumentaceTrue from '../assets/dokumentace/Dokumentace.pdf'

const frontEnd = [
    {
      name: "NaraWebs website",
      description:
       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quis veritatis perferendis dolor earum necessitatibus iure a vel vero aspernatur provident voluptatem ipsum, consectetur adipisci natus repudiandae id! Magni, autem.',
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Sass",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
          
        },
        
      ],
      dokumentation:dokumentace,
      image: Nara,
      source_code_link: "https://github.com/RobiNZajicek/NaraTs",
      source_code_link_page:"https://narawebs.com/"
    },
    
      {
        name: "Random website",
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quis veritatis perferendis dolor earum necessitatibus iure a vel vero aspernatur provident voluptatem ipsum, consectetur adipisci natus repudiandae id! Magni, autem.',
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "Java",
            color: "green-text-gradient",
          },
          {
            name: "SQL",
            color: "pink-text-gradient",
          },
        ],
        dokumentation:dokumentace,
        image: xtb,
        source_code_link: "https://github.com/RobiNZajicek/Trading-Portfolio-App",
        source_code_link_page:""
      },
      {
        name: "Random website",
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quis veritatis perferendis dolor earum necessitatibus iure a vel vero aspernatur provident voluptatem ipsum, consectetur adipisci natus repudiandae id! Magni, autem.',
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "Java",
            color: "green-text-gradient",
          },
          {
            name: "SQL",
            color: "pink-text-gradient",
          },
        ],
        dokumentation:dokumentace,
        image: xtb,
        source_code_link: "https://github.com/RobiNZajicek/Trading-Portfolio-App",
      },
  ];
  const BackEnd=[
    {
      name: "Text Game",
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quis veritatis perferendis dolor earum necessitatibus iure a vel vero aspernatur provident voluptatem ipsum, consectetur adipisci natus repudiandae id! Magni, autem.',
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      dokumentation:dokumentaceTrue,
      image: txtGame,
      source_code_link: "https://github.com/RobiNZajicek/TextGame",
    },
  ]

  const FullStack=[
    {
      name: "Trading app",
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quis veritatis perferendis dolor earum necessitatibus iure a vel vero aspernatur provident voluptatem ipsum, consectetur adipisci natus repudiandae id! Magni, autem.',
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      dokumentation:dokumentace,
      image: xtb,
      source_code_link: "https://github.com/RobiNZajicek/Trading-Portfolio-App",
    },
    {
      name: "Card App",
      description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quis veritatis perferendis dolor earum necessitatibus iure a vel vero aspernatur provident voluptatem ipsum, consectetur adipisci natus repudiandae id! Magni, autem.',
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      dokumentation:dokumentace,
      image: cardsss,
      source_code_link: "https://github.com/RobiNZajicek/musle-cards",
      source_code_link_page:"https://cards-j8kl.vercel.app/"
    },
  ]
  const experiences = [
    {
      key: "education_experience",
      title: "education_title",
      company_name: "technical_school_name",
      icon:"" ,
      iconBg: "#383E56",
      date: "",
      points: [
        "education_point_1",
        "education_point_2",
        "education_point_3",
        "education_point_4"
      ],
    },
    {
      key: "college_experience",
      title: "college_title",
      company_name: "random_college_name",
      icon: "",
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "college_point_1",
        "college_point_2",
        "college_point_3"
      ],
    },
    {
      key: "pied_piper_experience",
      title: "pied_piper_title",
      company_name: "pied_piper_name",
      icon:"",
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "pied_piper_point_1",
        "pied_piper_point_2",
        "pied_piper_point_3",
        "pied_piper_point_4"
      ],
    },
    {
      key: "narawebs_experience",
      title: "narawebs_title",
      company_name: "narawebs_name",
      icon: "",
      iconBg: "#383E56",
      date: "",
      points: [
        "narawebs_point_1",
        "narawebs_point_2",
        "narawebs_point_3",
        "narawebs_point_4"
      ],
    },
  ];
  
  
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Robin proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Robin does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Robin optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  export {frontEnd,experiences,testimonials,BackEnd,FullStack };