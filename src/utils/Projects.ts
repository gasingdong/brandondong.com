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
};

export default PROJECTS;
