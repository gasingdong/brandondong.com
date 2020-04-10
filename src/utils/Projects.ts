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
};

export default PROJECTS;
