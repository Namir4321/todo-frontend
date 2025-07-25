import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useTasks } from "@/Context/TaskContext";
import { useState } from "react";

const SearchInput = () => {
  const { updateFilter } = useTasks();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    updateFilter("search", e.target.value);
  };

  return (
    <div className="md:w-1/2 relative rounded border-gray-200 border">
      <Input
        type="text"
        placeholder="Search something ..."
        className="rounded ring-0 pl-10"
        value={searchTerm}
        onChange={handleChange}
      />
      <Search className="absolute top-2 left-2 text-gray-300" />
    </div>
  );
};

export default SearchInput;
