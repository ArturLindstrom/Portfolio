import * as React from "react";
import { Link } from "gatsby";
import { ProjectCardProps } from "../types/projectTypes";

export default function ProductCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={project.slug}
      className="flex flex-col items-center w-2/3 pb-4 mb-8 text-center transition-all duration-300 border-solid rounded bg-slate-700 hover:ring-offset-2 hover:ring-2 hover:ring-slate-200"
    >
      <img
        className="transition-all duration-300 rounded-t "
        src={project.screenshots[0].resize.src}
        alt=""
      />
      <div className="px-2">
        <h2 className="mt-4 font-bold underline text-primary ">
          {project.title}
        </h2>
        <p className="text-slate-200 min-h-[3rem] ">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
}
