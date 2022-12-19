import * as React from "react";
import { graphql, Link } from "gatsby";
import { AllprojectsType } from "../../types/projectTypes";
import ProjectCard from "../../components/ProjectCard";
import Layout from "../../components/Layout";
import CategorySelect from "../../components/CategorySelect";

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          title
          slug
          shortDescription
          category
          screenshots {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default function Projects({ data }: AllprojectsType) {
  const [category, setCategory] = React.useState("");
  const changeCategory = (category: string) => {
    setCategory(category);
  };

  const projects = category
    ? data.allContentfulProject.edges.filter((project) =>
        project.node.category.includes(category)
      )
    : data.allContentfulProject.edges;

  return (
    <Layout>
      <h1 className="mb-4 text-3xl font-bold text-center text-slate-200">
        All Projects
      </h1>
      <CategorySelect onCategoryChange={changeCategory} />
      <section className="flex flex-col items-center gap-6">
        {projects.map((project) => (
          <ProjectCard project={project.node} />
        ))}
      </section>
    </Layout>
  );
}
