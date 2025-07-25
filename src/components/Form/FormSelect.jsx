import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
const FormSelect = ({ heading, categories }) => {
  const name = "category";
  return (
    <div className="mb-2 w-full">
      <Label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {heading}
      </Label>
      <Select name={heading} required className="w-full">
        <SelectTrigger id={name} className="w-full ">
          <SelectValue placeholder={heading} />
        </SelectTrigger>
        <SelectContent>
          {categories.map((res, index) => (
            <SelectItem key={index} value={res}>
              <span className="flex items-center gap-2">{res}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
