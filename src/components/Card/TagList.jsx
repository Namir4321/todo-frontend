import React from "react";
import { Button } from "../ui/button";

const TagList = (tags) => {
  console.log(tags.tags);
  return (
    <div className="tags-cont  ">
      <h6 className="mb-1 text-sm font-semibold text-gray-700">TAGS</h6>
      <div className="flex flex-wrap gap-2">
        {tags.tags.map((res,index) => (
          <Button key={index} disabled={true} className="bg-gray-600 text-xs" size="sm">
            {res}
          </Button>
        ))}
       
      </div>
    </div>
  );
};

export default TagList;
