import React from "react";

const Tags = () => {
  const tags = ["India", "Independence", "Freedom", "History"];
  return (
    <div className="flex flex-wrap gap-4 ">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-black text-white rounded-full mt-1  text-lg font-semibold shadow-lg shadow-neutral-700 "
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
