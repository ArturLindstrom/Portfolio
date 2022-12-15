import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";

categorySelect.propTypes = {
  onCategoryChange: PropTypes.func,
};

export default function categorySelect({ onCategoryChange }: any) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        distinct(field: category)
      }
    }
  `);
  const [category, setCategory] = React.useState<string>();
  const categories = data.allContentfulProduct.distinct;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCategory(value);
    onCategoryChange(value);
  };
  return (
    <div className="flex items-center justify-center p-4">
      <label className="mr-2 text-white">Filter by category:</label>
      <select className="text-white bg-gray-800" onChange={handleChange}>
        <option value={""}>All</option>
        {categories.map((category: string) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
