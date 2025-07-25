import { useDraggable } from "@dnd-kit/core";
import UserCard from "../Card/UserCard";

const DraggableCard = ({ id, card, isOverlay = false }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
  });
 
  return (
    <div
      ref={setNodeRef}
      {...(!isOverlay ? listeners : {})}
      {...(!isOverlay ? attributes : {})}
      style={{
        opacity: isDragging && !isOverlay ? 0.5 : 1,
        cursor: isOverlay ? "default" : "grab",
        marginBottom: "8px",
      }}
    >
      
      <UserCard card={card} />
    </div>
  );
};

export default DraggableCard;
