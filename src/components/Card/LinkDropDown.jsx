import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import EditTask from "../Task/EditTask";
import { SlOptionsVertical } from "react-icons/sl";
import { useTasks } from "@/Context/TaskContext";

const LinkDropDown = ({ card }) => {
  const { deleteTask } = useTasks();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <SlOptionsVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onMouseDown={(e) => {
              e.preventDefault(); // prevent Radix from closing dropdown first
              setIsDialogOpen(true); // open the dialog
            }}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onMouseDown={(e) => {
              e.preventDefault();
              deleteTask(card._id); // ✅ delete by ID
            }}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditTask open={isDialogOpen} setOpen={setIsDialogOpen} card={card} />
    </>
  );
};

export default LinkDropDown;
