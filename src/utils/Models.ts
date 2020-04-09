export interface ProjectsModel {
  [key: string]: ProjectModel;
}

export interface ProjectModel {
  title: string;
  links: MetaLinkModel[];
  role: Role;
  description: string;
  tech: MetaLinkModel[];
  thumbnail: string;
}

export interface MetaLinkModel {
  name: string;
  link: string;
}

export enum Role {
  FULL_STACK = 'Full-Stack Web Developer',
  FRONT_END = 'Front-End Web Developer',
  BACK_END = 'Back-End Web Developer',
  WEB_DESIGN = 'Web Designer',
}

export class TechModel {
  static readonly VALUES: TechModel[] = [];

  static readonly REACT = new TechModel('React', {
    name: 'React.js',
    link: 'https://reactjs.org/',
  });

  static readonly REDUX = new TechModel('Redux', {
    name: 'Redux',
    link: 'https://redux.js.org/',
  });

  static readonly HTML5 = new TechModel('HTML5', {
    name: 'HTML5',
    link: 'https://en.wikipedia.org/wiki/HTML5',
  });

  static readonly CSS = new TechModel('CSS', {
    name: 'CSS',
    link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
  });

  static readonly EXPRESS = new TechModel('Express', {
    name: 'Express.js',
    link: 'https://expressjs.com/',
  });

  static readonly NODE = new TechModel('Node', {
    name: 'Node.js',
    link: 'https://nodejs.org/en/',
  });

  static readonly JAVASCRIPT = new TechModel('Javascript', {
    name: 'Javascript',
    link: 'https://www.javascript.com/',
  });

  private constructor(
    private readonly key: string,
    public readonly value: MetaLinkModel
  ) {
    TechModel.VALUES.push(this);
  }

  toString(): string {
    return this.key;
  }
}
