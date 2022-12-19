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
          <h1 className="m-1 mb-2 text-3xl font-bold text-slate-200">
            {project.title}
          </h1>
          <p className="m-1 text-xl text-left text-slate-200">
            {project.shortDescription}
          </p>
          <a href={project.githubUrl}>Github</a>
          {/* if project.url exists write it out in an a tag */}
          {project.url ? <a href={project.url}>Live Site</a> : null}
          <div className="flex flex-row items-center justify-center gap-5">
            {project.screenshots.map((screenshot) => (
              <img
                className="rounded"
                src={screenshot.file.url}
                alt={project.title}
                width="70%"
              />
            ))}
          </div>
        </article>
      </section>
    </Layout>
  );
}
