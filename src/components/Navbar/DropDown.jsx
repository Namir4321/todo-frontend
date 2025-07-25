import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { useTasks } from "@/Context/TaskContext";

const DropDown = ({ heading, arraylist }) => {
  const { updateFilter } = useTasks();

  const handleSelect = (value) => {
    const key = heading.toLowerCase();

    if (value === "All") {
      // Clear the respective filter
      if (key === "users") updateFilter("members", []);
      else if (key === "tags") updateFilter("tags", []);
      else if (key === "projects") updateFilter("project", "");
    } else {
      // Apply selected filter
      if (key === "users") updateFilter("members", [value]);
      else if (key === "tags") updateFilter("tags", [value]);
      else if (key === "projects") updateFilter("project", value);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {heading} <IoIosArrowDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => handleSelect("All")}>
          All
        </DropdownMenuItem>
        {arraylist.map((res, idx) => (
          <DropdownMenuItem key={idx} onSelect={() => handleSelect(res)}>
            {res}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
