import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
};

// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    img: 'angular-logo.png',
    title: 'Angular',
  },
  {
    id: nanoid(),
    img: 'react-logo.png',
    title: 'React',
  },
  {
    id: nanoid(),
    img: 'javascript-logo.png',
    title: 'JavaScript',
  },
  {
    id: nanoid(),
    img: 'typescript-logo.png',
    title: 'TypeScript',
  },
  {
    id: nanoid(),
    img: 'rxjs-logo.png',
    title: 'RxJs',
  },
  {
    id: nanoid(),
    img: 'net-core-logo.png',
    title: '.NET Core',
  },
  {
    id: nanoid(),
    img: 'aspnetcore-logo.png',
    title: 'ASP.NET Core',
  },
  {
    id: nanoid(),
    img: 'csharp-logo.png',
    title: 'C#',
  },
  {
    id: nanoid(),
    img: 'html5-logo.png',
    title: 'HTML5',
  },
  {
    id: nanoid(),
    img: 'css-logo.png',
    title: 'CSS3',
  },
  {
    id: nanoid(),
    img: 'sass-logo.png',
    title: 'SASS',
  },
  {
    id: nanoid(),
    img: 'tailwind-logo.png',
    title: 'TailwindCSS',
  },
  {
    id: nanoid(),
    img: 'bootstrap-logo.png',
    title: 'Bootstrap',
  },
  {
    id: nanoid(),
    img: 'azure-logo.png',
    title: 'Azure',
  },
  {
    id: nanoid(),
    img: 'git-logo.png',
    title: 'Git',
  },
  {
    id: nanoid(),
    img: 'java-logo.png',
    title: 'Java',
  },
  {
    id: nanoid(),
    img: 'python-logo.png',
    title: 'Python',
  },
  {
    id: nanoid(),
    img: 'android-logo.png',
    title: 'Android Dev',
  },
  {
    id: nanoid(),
    img: 'php-logo.png',
    title: 'PHP',
  },
  {
    id: nanoid(),
    img: 'laravel-logo.png',
    title: 'Laravel',
  },
  {
    id: nanoid(),
    img: 'wordpress-logo.png',
    title: 'Wordpress',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'brain-tumor-detection.jpg',
    title: 'Brain Tumor Detection',
    info: 'Brain tumor detection models created using PyTorch and YOLOv5 and Azure Cognitive Services. ',
    info2: '',
    url: 'https://github.com/giuseppebrb/BrainTumorDetection',
    repo: 'https://github.com/giuseppebrb/BrainTumorDetection',
  },
  {
    id: nanoid(),
    img: 'asp-net-core-api.png',
    title: 'Aldo Giovanni Giacomo.API',
    info: 'This is a simple REST API whose purpose is to provide quotes and infos about Aldo, Giovanni e Giacomo.',
    info2: '',
    url: 'https://github.com/cobidev/react-simplefolio',
    repo: 'https://github.com/cobidev/react-simplefolio',
  },
  {
    id: nanoid(),
    img: 'covid-dashboard.jpg',
    title: 'COVID-19 Italian Dashboard',
    info: 'A flutter application that monitors the trend of COVID-19 in Italy.',
    info2: '',
    url: 'https://github.com/giuseppebrb/COVID-19_Italian_Dashboard',
    repo: 'https://github.com/giuseppebrb/COVID-19_Italian_Dashboard',
  },
  {
    id: nanoid(),
    img: 'ardutooth.jpg',
    title: 'Ardutooth',
    info: 'A lightweight .aar library to create easily a stable bluetooth connection between Android and Arduino.',
    info2: '',
    url: 'https://github.com/giuseppebrb/Ardutooth',
    repo: 'https://github.com/giuseppebrb/Ardutooth',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/giuseppe-barbato/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/giuseppebrb/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
