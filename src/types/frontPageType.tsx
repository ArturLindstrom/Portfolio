export interface frontPageType {
  data: {
    allContentfulHomePage: {
      edges: {
        node: {
          heroImage: {
            file: {
              url: string;
            };
          };
          welcomeMessage: string;
          paragraph: string;
        };
      }[];
    };
  };
}
