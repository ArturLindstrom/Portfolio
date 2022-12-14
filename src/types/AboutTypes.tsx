export interface AboutType {
  data: {
    allContentfulAbout: {
      edges: {
        node: {
          about: {
            raw: string;
          };
        };
      }[];
    };
  };
}
