import * as React from "react";
import { graphql, Link } from "gatsby";
import { AllprojectsType } from "../types/projectTypes";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/Layout";
import CategorySelect from "../components/CategorySelect";

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
            resize(format: WEBP, width: 1440) {
              width
              height
              src
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
  // checks if category is empty, if it is, return all projects, if not, return projects that match the category
  const projects = category
    ? data.allContentfulProject.edges.filter((project) =>
        project.node.category.includes(category)
      )
    : data.allContentfulProject.edges;

  return (
    <Layout
      title="My Projects"
      description="All my current projects"
      siteUrl="https://arturlindstrom.netlify.app/projects"
      image="https://i.imgur.com/Zb7C2v3.png"
    >
      <h1 className="mb-4 text-3xl font-bold text-center text-slate-200">
        All Projects
      </h1>
      <CategorySelect onCategoryChange={changeCategory} />
      <section className="flex flex-col items-center gap-4">
        {projects.map((project, index) => (
          <ProjectCard project={project.node} key={index} />
        ))}
      </section>
    </Layout>
  );
}
