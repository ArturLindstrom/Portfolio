import * as React from "react";
import { graphql, Link } from "gatsby";
import { singleProductType } from "../../types/productTypes";
import Layout from "../../components/Layout";

export const singleProductQuery = graphql`
  query ($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      title
      id
      description {
        description
      }
      image {
        file {
          url
        }
      }
      price
    }
  }
`;

export default function Product({ data }: singleProductType) {
  const product = data.contentfulProduct;
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center gap-5 ">
        <article className="flex flex-col items-center w-2/3 text-center rounded bg-slate-300 m-9 p-9">
          <h1 className="m-1 text-3xl">{product.title}</h1>
          <img className="rounded" src={product.image.file.url} alt={product.title} width="70%"/>
          <p className="m-1 text-xl text-red-700">$ {product.price}</p>
          <p className="m-1 text-xl text-left">{product.description.description}</p>
        </article>
      </section>
    </Layout>
  );
}
