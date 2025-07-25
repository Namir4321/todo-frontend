import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import EditTask from "../Task/EditTask";
import { FlipVertical } from "lucide-react";

const LinkDropDown = ({card}) => {
    // console.log(card)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger> <FlipVertical/>        </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <EditTask card={card} />
        </DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
        {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
        {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinkDropDown;
