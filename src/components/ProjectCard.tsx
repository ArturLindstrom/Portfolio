import * as React from "react";
import { Link } from "gatsby";
import { ProjectCardProps } from "../types/projectTypes";

export default function ProductCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col items-center w-2/3 pb-4 mb-8 text-center transition-all duration-300 border-solid rounded bg-slate-700 ">
      <img
        className="transition-all duration-300 rounded-t "
        src={project.screenshots[0].resize.src}
        alt=""
      />
      <div className="px-2">
        <Link to={project.slug}>
          <h2 className="mt-4 font-bold underline text-primary ">
            {project.title}
          </h2>
        </Link>
        <p className="text-slate-200 min-h-[3rem] ">
          {project.shortDescription}
        </p>
      </div>
    </article>
  );
}
