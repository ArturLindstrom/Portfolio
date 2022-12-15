export interface PolicyType {
  data: {
    allContentfulIntegrityPolicy: {
      edges: {
        node: {
          policy: {
            raw: string;
          };
        };
      }[];
    };
  };
}
