export interface ProjectType {
  title: string;
  slug: string;
  shortDescription: string;
  category: string[];
  longDescription?: string;
  screenshots: {
    file: {
      url: string;
    };
  }[];
}

export interface ProjectCardProps {
  project: ProjectType;
}

export interface SingleProjectType {
  data: {
    contentfulProject: ProjectType;
  };
}

export interface AllprojectsType {
  data: {
    allContentfulProject: {
      edges: {
        node: ProjectType;
      }[];
    };
  };
}
