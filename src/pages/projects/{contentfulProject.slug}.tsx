import * as React from "react";
import { graphql } from "gatsby";
import { SingleProjectType } from "../../types/projectTypes";
import Layout from "../../components/Layout";
import FsLightbox from "fslightbox-react";
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
  const [lightboxController, setLightboxController] = React.useState({
    toggler: false,
    slide: 1,
  });
  // create a array of all the screenshots
  const screenshots = project.screenshots.map(
    (screenshot) => screenshot.file.url
  );

  function openLightboxOnSlide(number: number) {
    console.log(number);
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center gap-5 ">
        <article className="flex flex-col items-center w-2/3 text-center bg-gray-800 rounded m-9 p-9">
          <h1 className="mb-2 text-3xl font-bold text-slate-200">
            {project.title}
          </h1>
          <div className="flex justify-center gap-6">
            <a
              className="font-bold underline text-primary"
              href={project.githubUrl}
            >
              Github
            </a>
            {project.url ? (
              <a
                className="font-bold underline text-primary"
                href={project.url}
              >
                Live Site
              </a>
            ) : null}
          </div>
          <p className="m-4 text-xl text-left text-slate-200">
            {project.shortDescription}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            {project.screenshots.map((screenshot, index) => (
              <img
                className="cursor-pointer"
                key={index}
                src={screenshot.file.url}
                alt={project.title}
                width="70%"
                onClick={() => openLightboxOnSlide(index + 1)}
              />
            ))}

            <FsLightbox
              toggler={lightboxController.toggler}
              sources={screenshots}
              slide={lightboxController.slide}
            ></FsLightbox>
          </div>
        </article>
      </section>
    </Layout>
  );
}
