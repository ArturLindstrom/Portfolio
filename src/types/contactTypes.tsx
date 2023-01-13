export interface ContactType {
  data: {
    allContentfulContactPage: {
      edges: {
        node: {
          title: string;
          body: any;
          image: {
            file: {
              url: string;
            };
          };
          seoTitle: string;
          seoDescription: string;
          seoSiteUrl: string;
        };
      }[];
    };
    allContentfulLink: LinkType;
  };
}

export interface LinkType {
  edges: {
    node: {
      title: string;
      url: string;
    };
  }[];
}
