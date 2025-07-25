import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const FormMultiSelect = ({
  heading = "Select",
  options = [],
  name,
  onChange,
}) => {
  const [selected, setSelected] = useState([]);

  const toggleOption = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <div className="mb-2 w-full">
      <Label className="mb-1 block text-sm font-medium">{heading}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="justify-start w-full text-left font-normal"
          >
            {selected.length ? selected.join(", ") : `Select ${heading}`}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full max-w-xs p-2">
          {options.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 py-1 px-2 rounded-md hover:bg-muted"
            >
              <Checkbox
                id={`${name}-${idx}`}
                checked={selected.includes(item)}
                onCheckedChange={() => toggleOption(item)}
              />
              <Label htmlFor={`${name}-${idx}`} className="text-sm">
                {item}
              </Label>
            </div>
          ))}
        </PopoverContent>
      </Popover>

      {/* Hidden input for form submission */}
      <input
        type="hidden"
        name={name}
        value={JSON.stringify(selected)}
        readOnly
      />
    </div>
  );
};

export default FormMultiSelect;
