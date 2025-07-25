import React from "react";
import { useDroppable } from "@dnd-kit/core";
import UserCard from "../Card/UserCard";
import TaksForm from "../Task/TaksForm";
import DraggableCard from "./DraggableCard";
const BoardTab = ({ id, cardIds, cards }) => {
  // console.log(cardIds)
  const { setNodeRef, isOver } = useDroppable({
    id, 
  });
  return (
    <div
      ref={setNodeRef}
      className={`px-5 py-4 uppercase rounded min-h-[300px] transition-all ${
        isOver ? "bg-gray-200" : "bg-gray-100"
      }`}
    >
      <h6 className="font-bold mb-2">{id}</h6>
      {cardIds.map((cardId) => (
        <DraggableCard key={cardId} id={cardId} card={cards[cardId]} />
      ))}
    </div>
  );
};

export default BoardTab;
