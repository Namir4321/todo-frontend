import { useTasks } from "@/Context/TaskContext";
import { DragOverlay, DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useState, useEffect } from "react";
import BoardTab from "./BoardTab";
import DraggableCard from "./DraggableCard"; 

const Board = () => {
  const { tasks, updateTask } = useTasks();

  const [columns, setColumns] = useState({
    todo: [],
    "in-progress": [],
    done: [],
  });

  const [activeCardId, setActiveCardId] = useState(null);

  const cards = tasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  useEffect(() => {
    console.log(tasks)
    const colMap = {
      todo: [],
      "in-progress": [],
      done: [],
    };

    tasks.forEach((task) => {
      if (colMap[task.status]) {
        colMap[task.status].push(task._id);
      }
    });

    setColumns(colMap);
  }, [tasks]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    let sourceCol, destCol;

    Object.entries(columns).forEach(([colId, cardIds]) => {
      if (cardIds.includes(active.id)) sourceCol = colId;
      if (colId === over.id) destCol = colId;
    });

    if (!sourceCol || !destCol || sourceCol === destCol) return;

    setColumns((prev) => {
      const newSource = prev[sourceCol].filter((id) => id !== active.id);
      const newDest = [active.id, ...prev[destCol]];
      return { ...prev, [sourceCol]: newSource, [destCol]: newDest };
    });

    updateTask(active.id, { status: destCol });
    setActiveCardId(null);
  };

  return (
    <div className="board-cont">
      <DndContext
        onDragStart={(event) => setActiveCardId(event.active.id)}
        onDragEnd={handleDragEnd}
      >
        <div className="board grid grid-cols-3 gap-2 mx-auto">
          {Object.entries(columns).map(([colId, cardIds]) => (
            <SortableContext key={colId} items={cardIds}>
              <BoardTab id={colId} cardIds={cardIds} cards={cards} />
            </SortableContext>
          ))}
        </div>

        <DragOverlay>
          {activeCardId ? (
            <DraggableCard
              id={activeCardId}
              card={cards[activeCardId]}
              isOverlay
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Board;
