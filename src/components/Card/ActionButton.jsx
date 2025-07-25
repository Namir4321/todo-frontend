import React from "react";
import { Button } from "../ui/button";
import { FaPaperclip } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
const ActionButton = () => {
  return (
    <div className="w-1/2 flex justify-end gap-1 ">
      <Button
        disabled
        className="bg-gray-600 p-1 w-8 h-8 flex items-center justify-center"
      >
        <FaRegCommentAlt className="w-4 h-4" />
      </Button>
      <Button
        disabled
        className="bg-gray-600 p-1 w-8 h-8 flex items-center justify-center"
      >
        <FaPaperclip className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ActionButton;
