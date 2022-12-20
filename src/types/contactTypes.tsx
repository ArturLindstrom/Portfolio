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
        };
      }[];
    };
  };
}
