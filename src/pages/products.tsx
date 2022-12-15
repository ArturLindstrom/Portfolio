import * as React from "react";
import { graphql } from "gatsby";
import ProductCard from "../components/ProductCard";
import { allProductsType, productType } from "../types/productTypes";
import Layout from "../components/Layout";
import CategorySelect from "../components/CategorySelect";

export const allProductsQuery = graphql`
  query MyQuery {
    allContentfulProduct {
      edges {
        node {
          id
          price
          title
          category
          description {
            description
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default function Products({ data }: allProductsType) {
  const [category, setCategory] = React.useState("");
  // filter products by category if no category is selected, show all products
  const changeCategory = (category: string) => {
    setCategory(category);
  };

  const products = category
    ? data.allContentfulProduct.edges.filter(
        (product: any) => product.node.category == category
      )
    : data.allContentfulProduct.edges;
  return (
    <Layout>
      <CategorySelect onCategoryChange={changeCategory} />
      <section className="grid min-h-screen grid-cols-3 gap-6 py-6 place-items-center">
        {products.map((product: any) => (
          <ProductCard product={product.node} key={product.node.title} />
        ))}
      </section>
    </Layout>
  );
}
