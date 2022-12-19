export interface PageType {
  data: {
    contentfulPage: {
      title: string;
      slug: string;
      body: {
        raw: string;
      };
    };
  };
}
