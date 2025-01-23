
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Rushial Malhotra",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },


  ],
}

export const intro = {
  title: "Hey, I'm Rushial",
  description: "I am a Msc. Business Analytics student at UCD Smurfit. I have worked as a technical Business Analyst with 4 years of experience and am aspiring to learn and grow each day",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/12uWH-6Ec-WMZyhsF1kFpnmgkyDDjdk9n4AHLzK3fTWw/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am a highly skilled Technical Business Analyst with 4 years of experience.  I possess a strong foundation in data analysis, leveraging tools like Oracle SQL, Tableau, Excel, and Python to translate complex business needs into actionable insights. In my current role in my organisation, I thrived in a fast-paced environment, recognized for my vision and critical thinking.  I excelled at:",

    "Conceptualizing Solutions: Bridging the gap between advanced analytics and business strategy, I designed solutions that met objectives while managing risk.",

    "Communication & Collaboration: I fostered strong relationships with stakeholders at all levels, ensuring clear communication and project alignment.",

    "Leadership & Work Ethic: I consistently delivered results, leading by example and demonstrating a commitment to excellence.",

    "I am passionate about leveraging data to drive impactful business decisions.  I am confident in my ability to add significant value to your organization.",
  ],

}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Business Analysis and Research",
      description: "Using my leisure time to research on latest topics and market trends and writing research papers and thesis on them",
      icons: null,
    },
    {
      title: "Data Analysis and Visualisation",
      description: "Exploring technologies like Oracle SQL and Python for Data Analysis and further using Tableau and PowerBI for visualisations through dashboards ",
      icons: null,
    },

    {
      title: "Learning Frontend and Backend Development",
      description: "I aspire to have my own startup building software solutions which will be focused on social causes and issues hence enhancing my tech stack",
      icons: null,
    },

  ],
}


export const projects = {
  title: "Projects",
  cards: [

    {
      title: "Business Analysis using various analysis techniques",
      description: "Have covered a variety of Quantitative, Statistical and Mathematical Techniques for analysis various types of real-time business case studies ",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/RushialMalhotra/Business-Analysis-using-Analysis-Techniques",
        },
      ]
    },
    {
      title: "Data Querying and modeling through SQL",
      description: "List of projects undertaken for data modeling and querying data from the Oracle db to create required views",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/RushialMalhotra/Data_Querying_and_modeling_through_SQL",
        },
      ]
    },
    {
      title: "Data Analysis using Python and Excel",
      description: "Projects depicting data analysis on various data sets using Python libraries like Numpy, pandas, matplot and scikit",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/RushialMalhotra/Data_Querying_and_Analysis_using_Python-and-Excel",
        },
      ]
    },
    {
      title: "Data Visualisation using Tableau Dashboards",
      description: "I have developed some tableau dashboards covering various data trends of global markets",
      icons: [
        {
          icon: faGithub,
          link: "https://public.tableau.com/app/profile/rushial/vizzes",
        },
      ]
    },
    {
      title: "Research Work and Thesis",
      description: "In the quest of learning the current affairs and having a zeal for research work, I have done some individual research and have written some essays,research papers and thesis on latest trends",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/RushialMalhotra/Research-Work-Written-material",
        },
      ]
    },
    {
      title: "Miscellaneous Coding Projects",
      description: "Have tried some frontend and backend development as well like a small Client-Server handshake with Express.js as the Server Framework and Vue as the Client Framework.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/RushialMalhotra/Python_basic_codes",
        },
      ]
    }

  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at malhotrarushial22@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:malhotrarushial22@gmail.com",
      isPrimary: true,
    }
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Rushial Malhotra | Business Analyst | Software Engineer",
  description: "I am a highly skilled Technical Business Analyst with 4 years of experience.  I possess a strong foundation in data analysis, leveraging tools like Oracle SQL, Tableau, Excel, and Python to translate complex business needs into actionable insights. In my current role in my organisation, I thrived in a fast-paced environment, recognized for my vision and critical thinking.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@rushial_malhotra",
  description: "Rushial Malhotra | Business Analyst | Software Engineer",
  cards: [
    {
      title: "My GitHub",
      link: "https://github.com/RushialMalhotra",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/rushial-malhotra-159862144/",
    },
    {
      title: "My Instagram",
      link: "https://www.instagram.com/rushial_malhotra?igsh=YzEyc3Qwd3czcTBv&utm_source=qr",
    },
  ]
}
