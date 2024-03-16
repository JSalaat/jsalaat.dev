export const languages = {
    es: '🇪🇸',
    en: '🇺🇸',
  };

  export const defaultLang = 'en';

  export const ui = {
    en: {
      'layout.title' : `JSalaat's Portfolio - Software Engineer III @ Rewaa | JS Mentor @ Udacity | x Lead @ Alibaba | x Developer @ 10Pearls | Fullstack | React - Angular - Nodejs - AWS`,
      'layout.description': 'A Programming and Sports Enthusiast. Loves to learn, help and code things. Over six years of experience in designing, developing, deploying, and managing web and mobile applications using cutting-edge technologies and best practices.',
      'nav.home':'Experience',
      'nav.projects':'Projects',
      'nav.about':'About me',
      'nav.contact':'Contact',
      'hero.badge': 'Open to work',
      'hero.title': `Hey, I'm <strong>JS</strong>alaat`,
      'hero.bio': 'MSc (Software Engg.) having 8+ years of experience. <br><strong>Fullstack Software engineer and a JS mentor </strong> from London, UK. 🇬🇧 <br>AWS Solutions and Javascript Specialist.',
      'hero.mail': 'Lets Engage - Say Hi 👋',
      'hero.linkedin': 'LinkedIn',
      'hero.github': 'Github',
      'hero.soverflow': 'Stack Overflow',
      'hero.hr': 'Hackerrank',
      'hero.lc': 'LeetCode',
      'exp.title': 'Professional Experience',
      'projects.title': 'Projects',
      'about.title': 'About me',
      'about.bio': `<p>My name is M. <strong>J</strong>unaid <strong>S</strong>alaat, so I believe we could say I was the chosen one for <strong>JS</strong> 😊.
                        I'm a Programming and Sports Enthusiast. I love to <strong>learn</strong>, <strong>help</strong>, <strong>teach</strong> and <strong>code</strong> things. <br>
                        I'm currently learning <strong>AWS cloud solutions</strong> and preparing for the AWS Associate certifications.<br>
                         Some of my successes include working <strong>winning a hackathon</strong> as an individual in a competition of teams, <strong>working with Alibaba</strong> on various products, <strong>mentoring students</strong> get their nanodegree and having helping <strong>3k+ rep on stackoverflow</strong><br>
                         I consider myself a <strong>problem solver</strong> and an <strong>efficient learner</strong>.
                          I tend to do <strong>leetcode</strong>, <strong>hackerrank</strong>, and do <strong>competitive pc gaming</strong> in my spare time. </p>`,
      'footer.rights': 'Almost no rights reserved',
      exp: [
        {
          title: 'Software Engineer III - (Senior Software Engineer)',
          date: 'January 2023 - Present',
          company: "Rewaatech",
          description: 'Overseeing the entire lifecycle of our application, from analyzing requirements to developing, implementing, deploying, and even building the technical team that keeps it running smoothly.',

        },
        {
          title: 'Student Mentor and Reviewer',
          date: 'January 2020 - December 2022 (3 years)',
          company: 'Udacity',
          description: 'Certified Student Mentor and Reviewer for Intermediate JavaScript Nanodegree at Udacity.'
        },
        {
          title: 'Team Lead (Full Stack Engineer)',
          date: 'January 2018 - December 2022 (5 years)',
          company: 'Alibaba-Inc (Daraz Group)',
          description: 'Lead JavaScript engineering department and transitioned to Java development on AliStack (Alibaba tech Stack). Worked on many projects related to payments, CRM, seller education and other internal tools.'
        },
        {
          title: 'Senior Software Engineer',
          date: 'February 2017 - December 2017 (11 months)',
          company: 'Jumia Porto Tech Center',
          description: 'Complete Daraz sponsored training from Jumia Porto Tech Center for the complete Daraz technology Carve-Out from Europe to Pakistan. Leading the JavaScript/Frontend Department.'
        },
        {
          title: 'Software Developer',
          date: 'July 2015 - February 2017 (1 year 8 months)',
          company: '10Pearls',
          description: 'Angular.js, React.js, MEAN Stack and Ionic/Cordova Application Development'
        },
        {
            date: 'More On LinkedIn - https://www.linkedin.com/in/jsalaat/',
        }
      ],
      projects: [
        {
          title: "Coinfpro.com - One place for all the cryptocurrency information",
          description: "Coinfpro is a platform that provides all the information about cryptocurrencies. It provides the latest news, price, and other information about cryptocurrencies.",
          link: "https://coinfpro.com",
          image: "/projects/coinfpro.png",
          tags: ["nextjs", "javascript", "tailwindcss", "reactjs"],
        },
        {
          title: "Weave Inn Textile - A textile company website",
          description: "voluntary project website for a textile company. It provides all the information about the company and its products.",
          link: "https://weaveinntextile.com",
          image: "/projects/weaveinn.png",
          tags: ["HTML", "javascript"],
        },
        {
          title: "Pokemon Finder - A Pokedex with all the pokemons",
          description: "A Pokedex with all the pokemons. You can search, filter, sort based on their abilities and hear their cries.",
          link: "https://github.com/JSalaat/fullstack-pokemon-app",
          github: "https://github.com/JSalaat/fullstack-pokemon-app",
          image: "/projects/poke.png",
          tags: ["nextjs", "prisma", "chakraui", "typescript", "reactjs"],
        },
        {
          title: "Solid Waste Incentive Token Farming On Binance Smart Chain",
          description: "Efficient incentive approach to solid waste minimization and control through blockchain.",
          link: "https://bsc-masterclass-grp-42.netlify.app",
          github: "https://github.com/JSalaat/swt-dapp",
          image: "/projects/bsc-stake.png",
          tags: ["react", "solidity", "javascript", "redux", "blockchain", "bsc", "web3"],
        },
        {
          title: "The Food Shop - A food delivery app",
          description: "Using Ionic and Firebase It's a Real-Time food court App where user can order food from different restaurants menu.",
          github: "https://github.com/JSalaat/TheFoodShop",
          image: "/projects/fs.png",
          tags: ["ionic", "firebase", "angular", "javascript"],
        },
        {
          title: "Nasa Rover - A Mars Rover Dashboard",
          description: "A Mars Rover Dashboard. You can see the latest photos and information about the Mars Rover.",
          link: "https://github.com/JSalaat/nasa-rover",
          github: "https://github.com/JSalaat/nasa-rover",
          image: "/projects/nasa.png",
          tags: ["html", "css", "javascript"],
        },
        {
          title: "Restaurant Review App",
          description: "A restaurant review app. You can search, filter, sort based on their ratings and reviews.",
          github: "https://github.com/JSalaat/mws_restaurant_review",
          image: "/projects/restaurant.png",
          tags: ["html", "css", "javascript"],
        },
        {
          title: "More on Github",
          tags: [],
        }
      ]

    },

  } as const;
