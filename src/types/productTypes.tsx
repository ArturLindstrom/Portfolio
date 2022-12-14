export interface productType {
  id: string;
  price: number;
  title: string;
  category: string;
  description: {
    description: string;
  };
  image: {
    file: {
      url: string;
    };
  };
}

export interface productCardProps {
  product: productType;
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


