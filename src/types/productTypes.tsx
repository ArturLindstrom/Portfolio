export interface productType {
  id: string;
  price: number;
  title: string;
  description: {
    description: string;
  };
  image: {
    file: {
      url: string;
    };
  };
}

export interface allProductsType {
  data: {
  allContentfulProduct: {
    edges: {
      node: 
        productType;
        
    }[];
  };
};
}

export interface singleProductType {
  data: {
    contentfulProduct: 
      productType;
  };
}


