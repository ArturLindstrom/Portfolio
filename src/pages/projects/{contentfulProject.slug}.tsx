import * as React from "react";
import { graphql } from "gatsby";
import { SingleProjectType } from "../../types/projectTypes";
import Layout from "../../components/Layout";

export const query = graphql`
  query ($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
      slug
      shortDescription
      url
      githubUrl
      screenshots {
        file {
          url
        }
      }
    }
  }
`;

export default function project({ data }: SingleProjectType) {
  const project = data.contentfulProject;
  console.log(project.githubUrl);
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center gap-5 ">
        <article className="flex flex-col items-center w-2/3 text-center bg-gray-800 rounded m-9 p-9">
          <h1 className="mb-2 text-3xl font-bold text-slate-200">
            {project.title}
          </h1>
          <div className="flex justify-center gap-6">
            <a className="text-primary font-bold" href={project.githubUrl}>
              Github
            </a>
            {project.url ? (
              <a className="text-primary font-bold" href={project.url}>
                Live Site
              </a>
            ) : null}
          </div>
          <p className="m-1 text-xl text-center text-slate-200">
            {project.shortDescription}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            {project.screenshots.map((screenshot) => (
              <img src={screenshot.file.url} alt={project.title} width="70%" />
            ))}
          </div>
        </article>
      </section>
    </Layout>
  );
}
