import * as React from "react";
import { Link } from "gatsby";
import { ProjectCardProps } from "../types/projectTypes";

export default function ProductCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={project.slug}
      className="flex flex-col items-center w-2/3 pb-4 mb-6 text-center transition-all rounded bg-slate-700"
    >
      <img className="rounded-t" src={project.screenshots[0].file.url} alt="" />
      <div className="px-2">
        <h2 className="mt-4 text-slate-200 ">{project.title}</h2>
        <p className="text-slate-200 min-h-[3rem] ">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
}
