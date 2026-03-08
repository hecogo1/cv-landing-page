export const siteContent = {
  meta: {
    title: 'Héctor Cózar',
    description:
      'From psychology to data engineering — building better systems, workflows, and ways of working.',
    ogImage: 'og-cover.svg',
  },
  brand: {
    name: 'Héctor Cózar',
    roleBadge: 'Data Engineer / Analytics Engineer',
    trajectoryLabel: 'Psychology → Research → Data → Systems',
  },
  links: {
    linkedinUrl: 'https://www.linkedin.com/in/hecogo/',
    cvUrl: 'https://example.com/replace-with-your-cv.pdf',
    email: 'mailto:cozar1992@hotmail.com',
  },
  images: {
    heroPortrait: '/images/profile picture.jpg',
    story: {
      fixingComputers: '/images/mwc.jpeg',
      research: '/images/research-crop-rightcenter.jpg',
      australia: '/images/sydney.jpg',
      professional: '/images/microsoft-visit.jpeg',
    },
    team: '/images/team-caixa.jpeg',
    caseStudies: {
      sqlScale: '',
      dataQuality: '',
      sasToSql: '',
      enablement: '',
    },
  },
  navigation: [
    { label: 'Summary', href: '#summary' },
    { label: 'Story', href: '#story' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Impact', href: '#transformations' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    title: 'From psychology to data engineering — building better systems, workflows, and ways of working.',
    text:
      'I work at the intersection of data, technology, and business. My path has not been linear, and that has become one of my strengths: I learn fast, improve workflows, connect technical and non-technical worlds, and help teams adopt better tools and practices.',
    primaryCta: {
      label: 'View my career story',
      href: '#story',
    },
    secondaryCta: {
      label: 'Download CV',
      linkKey: 'cvUrl',
    },
    tertiaryCta: {
      label: 'LinkedIn',
      linkKey: 'linkedinUrl',
    },
  },
  signalStrip: [
    'Early technical curiosity',
    'Research background',
    'SQL at scale',
    'Automation mindset',
    'Tooling adoption',
    'Technical enablement',
  ],
  summary: {
    title: 'A profile built across systems, analysis, and people',
    paragraphs: [
      'I did not arrive in data through the most conventional route. I started very young solving technical problems, later developed a strong academic foundation in psychology, research, statistics, and psychometrics, and eventually moved into real-world data environments where scale, performance, and process design matter.',
      'Today, I work as a data-focused professional with strong experience in SQL-heavy environments, workflow improvement, automation, data quality, tooling adoption, and technical enablement. I am especially effective when I can bridge business needs and technical execution, improve inefficient processes, and help others work better through documentation, training, and practical system design.',
    ],
    quote:
      '“I am at my best when I can improve workflows, bridge business and technical needs, and help other people work better.”',
  },
  story: {
    title: 'My story',
    intro:
      'My professional story started earlier than my formal career. At around 12 years old, I was already making money fixing computers. Looking back, that says something important about me: I have always been drawn to technology as a practical way to solve real problems.',
    paragraphs: [
      'In school, I was not the model student. For a while, I relied too much on raw ability and not enough on discipline. That changed in my final years before university, when I had a real wake-up call and understood that talent without effort has limits. That lesson changed the way I approached learning.',
      'I first studied sports science through TAFAD, and that experience helped me reconnect with study in a more practical and meaningful way. It made me realize that I actually loved learning when I could see the point of it.',
      'From there, I moved into Psychology. That decision shaped me deeply. During my degree, I became increasingly interested in research, statistics, psychometrics, and technical problem-solving. In a way, I ended up returning to technology through a different door: not because I loved computers for their own sake, but because I was fascinated by systems, measurement, and the logic behind how things work.',
      'I collaborated in academic research projects involving intelligence assessment, museum preference models, and data simulation in R. That was also where programming became real for me. I started with R, and I quickly realised I genuinely loved building things through code.',
      'Later, I completed advanced study in research methodology and psychometrics, and then spent a year in Australia before COVID to improve my English. That period mattered to me not just personally, but professionally: it was a deliberate investment in becoming more capable and more prepared.',
      'When I returned, I worked first in a psychometric testing company and later at Invisalign, where I strengthened something that would become central in my career: the ability to connect technical understanding with business and client-facing reality.',
      'After completing a Master’s degree in Big Data and Data Science, that combination finally gave me access to the data world professionally. It became the bridge into the field I work in now.',
    ],
    imageSlots: [
      {
        key: 'fixingComputers',
        title: 'Early technical curiosity',
        description: 'Optional childhood or early technical photo slot.',
      },
      {
        key: 'research',
        title: 'Research and academic work',
        description: 'Optional image for psychology, R, or research collaborations.',
      },
      {
        key: 'australia',
        title: 'Australia before COVID',
        description: 'Optional image for the year spent improving English.',
      },
      {
        key: 'professional',
        title: 'Professional / corporate chapter',
        description: 'Optional image for later professional environments.',
      },
    ],
  },
  timeline: {
    title: 'Professional timeline',
    items: [
      {
        year: '2023 – now',
        title: 'Data Engineer',
        org: 'CaixaBank',
        desc: 'SQL at scale, automation, data quality, enablement, and migration across core banking data systems.',
      },
      {
        year: '2023',
        title: 'Data Analyst',
        org: 'Days',
        desc: 'First hands-on step into professional data work — analytics, dashboards, and product metrics.',
      },
      {
        year: '2022 – 2023',
        title: "Master's in Big Data & Data Science",
        org: 'University',
        desc: 'Python, cloud, ML pipelines, and large-scale data processing.',
      },
      {
        year: '2021 – 2022',
        title: 'Technology & Client Operations',
        org: 'Invisalign',
        desc: 'Technology adoption, client support, and exposure to corporate product operations.',
      },
      {
        year: '2020 – 2021',
        title: 'Psychometric Analyst',
        org: 'Testing company',
        desc: 'Item analysis, test construction, and applied measurement in a professional setting.',
      },
      {
        year: '2019 – 2020',
        title: 'English immersion year',
        org: 'Australia',
        desc: 'Full language immersion before COVID — communication skills & independence.',
      },
      {
        year: '2018 – 2019',
        title: "Master's in Research Methods & Psychometrics",
        org: 'University',
        desc: 'Advanced statistics, measurement theory, and research design.',
      },
      {
        year: '2015 – 2019',
        title: 'Research collaborations',
        org: 'University labs',
        desc: 'Intelligence, museum visitor behaviour, driving simulation — data collection and analysis with R.',
      },
      {
        year: '2014 – 2018',
        title: 'Psychology degree',
        org: 'University',
        desc: 'Research methodology, statistics, psychometrics, and programming in R.',
      },
    ],
  },
  strengths: {
    title: 'What I do best',
    cards: [
      {
        icon: 'workflow',
        title: 'Improve workflows',
        text: 'I naturally look for friction, bottlenecks, manual effort, and avoidable complexity. When a process is slow, repetitive, or overly dependent on bureaucracy, I tend to look for a better way.',
      },
      {
        icon: 'bridge',
        title: 'Bridge business and technology',
        text: 'I am not the kind of professional who lives only in pure technical depth or only in business abstraction. One of my strongest skills is translating between both worlds and helping them work together.',
      },
      {
        icon: 'tooling',
        title: 'Learn and adopt tools quickly',
        text: 'I enjoy understanding new tools, testing them in practice, and identifying where they genuinely improve the way a team works. I am often the person pushing adoption when I see clear value.',
      },
      {
        icon: 'enablement',
        title: 'Document, teach, and enable',
        text: 'I do not just like solving problems once. I like making solutions understandable, repeatable, and teachable so other people can use them too.',
      },
    ],
  },
  caseStudies: {
    title: 'Real-World Impact',
    items: [
      {
        imageKey: 'sqlScale',
        title: 'Querying at Enterprise Scale',
        context:
          'I entered CaixaBank through a long selection process that ended with a datathon focused on predictive modeling. Once inside, the reality was completely different: instead of building models, I found myself working in large-scale SQL environments with hundreds of millions of records.',
        challenge:
          'This was the first time I had to work with real database scale, where badly designed queries are not just inelegant — they waste real time, every day.',
        whatIDid:
          'I learned by doing, but I also questioned the working habits around me. I could see that many workflows were slower than they needed to be, and I started paying close attention to how to make them faster, cleaner, and more scalable.',
        outcome:
          'That shift changed my profile. I stopped thinking only in terms of analysis and started thinking in terms of systems, performance, process design, and operational efficiency.',
        whatItSays: 'I adapt fast, especially when the problem is real.',
      },
      {
        imageKey: 'dataQuality',
        title: 'Removing External Dependencies',
        context:
          'Some of the processes we depended on were owned by other teams. Requests were slow, coordination was inefficient, and there was resistance to taking ownership internally.',
        challenge: 'The team had accepted this dependency as normal. I had not.',
        whatIDid:
          'I started exploring alternatives on my own, prototyping solutions in my own time. Once I proved that the work could be done internally, faster and with less bureaucracy, I documented it clearly and presented it as a workable improvement.',
        outcome:
          'That became one of the paths through which I helped automate a data quality process and reduce dependency on external bottlenecks.',
        whatItSays: 'I do not just identify inefficiency — I prototype my way out of it.',
      },
      {
        imageKey: 'sasToSql',
        title: 'From 1 Week to 1.5 Hours',
        context:
          'Some existing processes were built in SAS, ran slowly, depended on local execution, and required manual supervision.',
        challenge: 'The workflow was too slow and too fragile for the amount of value it delivered.',
        whatIDid:
          'I learned enough SAS to understand the logic, translated key parts into SQL-based flows, and contributed to a new approach that could be executed in a more robust and scalable way.',
        outcome:
          'A process that used to take about a week, with manual local supervision, was eventually reduced to around 1.5 hours and orchestrated on a server through Airflow, with far better documentation and structure behind it.',
        whatItSays: 'I am good at moving work from “painful but accepted” to “designed and operational”.',
      },
      {
        imageKey: 'enablement',
        title: 'Driving Technical Adoption',
        context:
          'As the team evolved, I increasingly found myself not only building or improving workflows, but also helping others adopt better tools and practices.',
        challenge:
          'Introducing new ways of working is rarely just about the tool. It is about trust, clarity, teaching, and proving value in practice.',
        whatIDid:
          'I helped drive adoption around tools and ways of working such as VS Code, GitLab, DBT, and AI-assisted workflows. I also gave training to colleagues and acted as a practical guide for how these tools could improve real work.',
        outcome:
          'This helped move part of the team toward better workflows and a more future-oriented technical mindset.',
        whatItSays: 'I create value not only through execution, but through enablement.',
      },
    ],
  },
  howIWork: {
    title: 'How I work',
    blocks: [
      {
        title: 'I care about what works in practice',
        text: 'I like ideas, but I trust reality. I am most engaged when I can take a messy or inefficient process and make it more usable, faster, clearer, and less dependent on manual effort.',
      },
      {
        title: 'I tend to prototype before I persuade',
        text: 'When I believe something can be improved, my instinct is often to build a first version, prove that it works, and then use that as the basis for alignment.',
      },
      {
        title: 'I like systems that other people can use',
        text: 'A solution is stronger when it is documented, understandable, and transferable. I care about helping teams become more autonomous, not just about solving a problem once.',
      },
      {
        title: 'I learn horizontally',
        text: 'I am curious by nature. I do not only go deeper in one area — I also tend to scan across new tools, workflows, and technologies to see what is worth adopting and what is just noise.',
      },
    ],
  },
  background: {
    title: 'Background and foundation',
    intro: 'My technical profile is stronger because it is not only technical.',
    blocks: [
      {
        title: 'Psychology and research',
        text: 'My academic background trained me to think carefully about measurement, uncertainty, models, behavior, and methodological rigor. That still shapes the way I approach data today.',
      },
      {
        title: 'Programming and analysis',
        text: 'I first learned to program through R in research settings, and later expanded into data-oriented environments where SQL, workflow design, and practical automation became central.',
      },
      {
        title: 'Client-facing and human side',
        text: 'Across different roles — including customer-facing work — I developed a real appreciation for helping people, solving problems in front of them, and making technical work actually useful in context.',
      },
    ],
  },
  next: {
    title: 'What I’m building next',
    paragraphs: [
      'I want to keep growing on the technical side while staying close to the kind of work that has always suited me best: improving systems, accelerating teams, and turning scattered or inefficient ways of working into clearer and more scalable ones.',
      'I am especially interested in environments where data engineering, analytics, automation, tooling adoption, and practical technical judgment matter more than buzzwords.',
    ],
  },
  contact: {
    title: 'Let’s connect',
    text:
      'If you think my profile could be useful in your team, or if you simply want to talk about data, systems, tooling, or workflow improvement, feel free to reach out.',
    buttons: [
      { label: 'LinkedIn', linkKey: 'linkedinUrl' },
      { label: 'Email', linkKey: 'email' },
      { label: 'Download CV', linkKey: 'cvUrl' },
    ],
  },
  footer: {
    text: 'Built as an extension of my CV — a more complete version of how I think, work, and grow.',
  },
};
