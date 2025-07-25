import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const FormInput = ({ label, name, type, defaultValue, placeholder }) => {
  return (
    <div className="mb-2">
      {label && (
        <Label htmlFor={name} className="capitalize mb-1">
          {label}
        </Label>
      )}
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormInput;
