import { ProjectsModel, Role, TechModel } from './Models';

const PROJECTS: ProjectsModel = {
  ALLEGIANCE: {
    title: 'Allegiance',
    links: [
      {
        name: 'Live',
        link: 'https://www.allegiance17.com',
      },
      {
        name: 'FE GitHub',
        link: 'https://github.com/Lambda-School-Labs/allegiance-fe',
      },
      {
        name: 'BE GitHub',
        link: 'https://github.com/Lambda-School-Labs/allegiance-be',
      },
    ],
    role: Role.FULL_STACK,
    description:
      "A social networking website for sports fans. With a team of 6 developers, I evaluated and refactored a code base inherited from a previous team and completed 3 major milestones for the website's stakeholder: real-time social updates, a notification system, and group management.",
    tech: [
      TechModel.REACT.value,
      TechModel.REDUX.value,
      TechModel.HTML.value,
      TechModel.CSS.value,
      TechModel.JAVASCRIPT.value,
      TechModel.EXPRESS.value,
    ],
    thumbnail: 'allegiance_thumbnail.jpg',
  },
  TRIPSPLIT: {
    title: 'Trip Splitter',
    links: [
      {
        name: 'Live Docs',
        link: 'https://bd-trip-split.herokuapp.com/api/docs/',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/Build-Week-Trip-Split-FT/Back-End',
      },
    ],
    role: Role.BACK_END,
    description:
      "A web app for tracking and splitting expenses among multiple travelers. As the back-end developer, I used Node.js/Express.js to build an API server for the project's front-end developers and wrote full documentation of all endpoints using apiDoc.",
    tech: [
      TechModel.EXPRESS.value,
      TechModel.NODE.value,
      TechModel.TYPESCRIPT.value,
    ],
    thumbnail: 'tripsplit_thumbnail.png',
  },
  BETTERSUBSTATS: {
    title: 'Better Sub Stats',
    links: [
      {
        name: 'Live',
        link: 'https://bettersubstats.netlify.com/',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/sub-stats/front-end',
      },
    ],
    role: Role.FRONT_END,
    description:
      'An SPA that displays subreddit data from Reddit for a specified time period. As the front-end developer, I worked with the data science team to hook their back-end server data visualization to a front-end dashboard using React, Material UI, and Styled Components.',
    tech: [
      TechModel.HTML.value,
      TechModel.CSS.value,
      TechModel.REACT.value,
      TechModel.JAVASCRIPT.value,
    ],
    thumbnail: 'bettersubstats_thumbnail.png',
  },
};

export default PROJECTS;
