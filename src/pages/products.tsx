import * as React from "react";
import { graphql } from "gatsby";
import ProductCard from "../components/ProductCard";
import { allProductsType } from "../types/productTypes";
import Layout from "../components/Layout";

export const allProductsQuery = graphql`
  query MyQuery {
    allContentfulProduct {
      edges {
        node {
          id
          price
          title
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
  const products = data.allContentfulProduct.edges;
  return (
    <Layout>
      <section className="grid min-h-screen grid-cols-3 gap-6 py-6 place-items-center">
        {products.map((product: any) => (
          <ProductCard product={product.node} key={product.node.title} />
        ))}
      </section>
    </Layout>
  );
}
