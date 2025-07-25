import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardImage from "./CardImage";
import TagList from "./TagList";
import ActionButton from "./ActionButton";
import AvatarGroup from "./AvatarGroup";
import { Pencil } from "lucide-react";
import TaksForm from "../Task/TaksForm";
import { Button } from "../ui/button";
import LinkDropDown from "./LinkDropDown";
import EditTask from "../Task/EditTask";
const UserCard = ({card}) => {
  if (!card) return null; // Skip rendering if card is undefined
  return (
    <div className="mb-4">
      <Card className={` h-auto px-2 py-0 flex flex-col justify-between`}>
        <CardHeader className="px-2 gap-0 flex justify-between p-2">
          <CardTitle className="font-semibold text-sm p-0 m-0">
            {card.title}
          </CardTitle>
          <CardAction
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <LinkDropDown  card={card} />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0 m-0 gap-0 ">
          <CardImage image={card.thumbnail} />
          <TagList tags={card.tags} />
        </CardContent>
        <CardFooter className="block px-2  mb-2 ">
          <h6 className=" text-xs font-bold p-0 m-0">Members</h6>
          <div className="flex justify-between items-start  w-full ">
            <AvatarGroup />
            <ActionButton />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserCard;
