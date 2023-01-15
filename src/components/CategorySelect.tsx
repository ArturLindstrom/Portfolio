import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";

categorySelect.propTypes = {
  onCategoryChange: PropTypes.func,
};

export default function categorySelect({
  onCategoryChange,
}: {
  onCategoryChange: Function;
}) {
  // get each distinct category from the projects
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        distinct(field: { category: SELECT })
      }
    }
  `);

  const [category, setCategory] = React.useState<string>();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // get the value of the selected option
    // and pass it to the onCategoryChange function
    // which is emitted to the parent component to filter the projects
    const value = event.target.value;
    setCategory(value);
    onCategoryChange(value);
  };
  return (
    <div className="flex items-center justify-center p-4">
      <label className="mr-2 text-slate-200">Filter by category:</label>
      <select className="bg-gray-800 text-slate-200" onChange={handleChange}>
        <option value={""}>All</option>
        {data.allContentfulProject.distinct.map((project: any) => (
          <option key={project} value={project}>
            {project}
          </option>
        ))}
      </select>
    </div>
  );
}
