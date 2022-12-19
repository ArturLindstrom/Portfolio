export interface SingleProjectType {
  data: {
    contentfulProject: {
      title: string;
      slug: string;
      shortDescription: string;
      longDescription?: string;
      screenshots: {
        file: {
          url: string;
        };
      }[];
    };
  };
}
