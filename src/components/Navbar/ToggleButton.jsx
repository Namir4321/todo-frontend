import React, { useState } from "react";
import { Grid3X3, List } from "lucide-react";
import { Button } from "../ui/button";

const ToggleButton = () => {
  const [viewMode, setViewMode] = useState("grid");
  return (
    <div className="btn-group  ">
      <div className="flex items-center   ">
        <Button
          variant={viewMode === "grid" ? "default" : "outline"}
          size="sm"
          className="mx-[4px]"
          onClick={() => setViewMode("grid")}
        >
          <Grid3X3 className="h-4 w-4" />
        </Button>
        <Button
          variant={viewMode === "list" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewMode("list")}
        >
          <List className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ToggleButton;
