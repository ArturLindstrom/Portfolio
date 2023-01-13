export interface PageType {
  data: {
    contentfulPage: {
      title: string;
      slug: string;
      links?: string[];
      body: any;
      image?: {
        file: {
          url: string;
        };
      };
      seoTitle: string;
      seoDescription: string;
      seoSiteUrl: string;
    };
  };
}
