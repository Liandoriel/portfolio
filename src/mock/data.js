import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bastien | Developer', // e.g: 'Name | Developer'
  lang: 'en, fr, kr', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '', // Hello, my name is
  name: 'Bastien', // John
  subtitle: 'I am the Engineer you are looking for, and here\'s why', // I'm the Unknown Developer.
  cta: '', // Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Computer Engineer, having graduated in 2017 through an intership program. I have spent one year in South Korea on a volunteer program in a Korean kindergarten.',
  paragraphTwo: 'Through this opportunity I was able to discover a new culture, a new language and I was able to improve my speaking skills with the children, parents and coworkers.  At the end of each day of volunteering (including weekends), I went to Sookmyung University to improve my Korean.  ',
  paragraphThree: ' When I returned to France in 2018, I gained experience on a variety of different projects with several companies to improve my IT knowledge and programming skills. Since June 2019, I have been monitoring servers and dataflows with Airbus Defence and Space, specifically for the Copernicus mission of ESA (the European Space Agency) for Earth observation. This has consisted of managing the workflows of the data received from the satellites to four data centres (Germany, Italy, France).',
  resume: 'https://www.linkedin.com/in/bastien-vautier/?locale=en_US', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_1.jpg',
    title: 'Sentinel 3 Expert Center with Telespazio France for ESA',
    info: 'Monitoring the proper functioning of S3 satellites for the Copernicus project and its process of repatriation and processing of production at the various centres in Europe. ',
    info2: 'Monitoring of 200 servers spread over 4 centres in Europe (Italy, Germany, Norway and France) on many key points such as the monitoring of the remaining disk space, the version of the tools, remote access on the machines, monitoring internet access to servers, database administration. Creation and implementation of monitoring tools to independently check certain parameters. Writing Daily report with Excel and word. Bash, SQL, Unix, Unix, cron, NPM',
    url: 'https://sentinel.esa.int/web/sentinel/missions/sentinel-3',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_2.jpg',
    title: 'Dev and software testing for Nexeya',
    info: 'Extended the development of the application (utilizing Python and C++) used to simulate the Singapore Subway system',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_3.jpg',
    title: 'Engineer Satellites Integration Test for Airbus',
    info: 'Developed satellite simulation specifications and test plans utilized to simulate hardware components by writing applications (in C++/Java) for evaluating mission scenarios prior to space launch .',
    info2: '',
    url: 'https://www.airbus.com/space/earth-observation/portfolio.html',
    repo: '', // if no repo, the button will not show up
  },
  { 
    id: nanoid(),
    img: 'project_4.jpg',
    title: 'Volonteer program for korean Kindergarten in South Korea at ICYE',
    info: 'Motivated and helped teachers in day-to-day tasks such as :',
    info2: 'Explaining activities to children, assisting with meals, facilitating sport and games, and managing cultural programs (e.g. visiting the Korean DMZ).',
    url: 'https://www.icye.org/icye-in-the-world/south-korea/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_5.jpg',
    title: 'Database IT Technician for Human ressources at Latécoère',
    info: 'Data audit, editing, and clean-up as part of the primary Business Intelligence effort.',
    info2: 'By using PL/SQL, Bash and SAP Bex Analyser',
    url: 'https://www.latecoere.aero/en/  ',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_6.jpg',
    title: 'Avionics Software Engineer Intern at Thales Avionics',
    info: 'Automatic generation of PDF documentation in Python via parsing of Ada code and using Miktek in Latex format.',
    info2: 'Developed code analysis program in C++ per the Enterprise development standards, Continued development (Ada / Java) on a project started by a previous employee, Work by using the Agile method (Scrum)',
    url: 'https://onboard.thalesgroup.com/a400m-bringing-together-the-best-of-civil-and-military-functions/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '“If you want to go quickly, go alone. If you want to go far, go together.” ',
  btn: '',
  email: 'https://www.linkedin.com/in/bastien-vautier/?locale=en_US',
};

// FOOTER DATA
export const footerData = {
  networks: [
    //{
    //  id: nanoid(),
    //  name: 'twitter',
    //  url: '',
    //},
   // {
   //   id: nanoid(),
    //  name: 'codepen',
    //  url: '',
    //},
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bastien-vautier/?locale=en_US',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/eluwien?tab=projects',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
