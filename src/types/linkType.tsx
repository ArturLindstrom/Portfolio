export type LinkType = {
  title: string;
  slug?: string;
  url: string;
};

export interface DynamicLinkType {
  node: LinkType;
}
