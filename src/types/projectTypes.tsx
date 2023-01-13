export interface ProjectType {
  title: string;
  slug: string;
  shortDescription: string;
  category: string[];
  longDescription?: string;
  url?: string;
  githubUrl: string;
  screenshots: {
    resize: {
      src: string;
      width: number;
      height: number;
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
        seoTitle: string;
        seoDescription: string;
        seoSiteUrl: string;
      }[];
    };
  };
}
