import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FormInput from "../Form/FormInput";
import FormSelect from "../Form/FormSelect";
import { Button } from "../ui/button";
import FormContainer from "../Form/FormContainer";
import FormMultiSelect from "../Form/FormMultiSelect";
import { useTasks } from "@/Context/TaskContext";

const EditTask = ({ open, setOpen, card }) => {
  const [loading, setLoading] = useState(false);
  const { updateTask } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Ensure tags is an array (handle comma-separated or JSON-style input)
    const tags =
      typeof data.tags === "string"
        ? data.tags.split(",").map((t) => t.trim())
        : [];

    const payload = {
      title: data.title,
      description: data.description,
      thumbnail: data.thumbnail,
      tags: tags,
      status: data.status,
      date: data.date,
      projects: data.project,
    };

    try {
      await updateTask(card._id, payload);
      setOpen(false); // close dialog
    } catch (err) {
      console.error("Error updating task:", err);
    } finally {
      setLoading(false);
    }
  };
console.log(card?.tags);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <FormContainer onSubmit={handleSubmit}>
          <div>
            <FormInput
              id="title"
              name="title"
              type="text"
              placeholder="Task Name"
              label="Task Name"
              defaultValue={card?.title}
            />
            <FormInput
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              label="Description"
              defaultValue={card?.description}
            />
            <FormSelect
              heading="Project"
              name="project"
              className="w-full mb-2"
              categories={["one", "two", "three"]}
              defaultValue={card?.project?.[0] || ""}
            />
            <FormInput
              id="thumbnail"
              name="thumbnail"
              type="text"
              placeholder="Thumbnail"
              label="Thumbnail"
              defaultValue={card?.thumbnail}
            />
            {/* <FormMultiSelect
              heading="Tags"
              name="tags"
              options={[
                ...new Set([
                  "Moderate-Priority",
                  "High-Priority",
                  "Low-Priority",
                  ...(card?.tags || []),
                ]),
              ]}
              defaultValues={card?.tags || []}
            /> */}

            <FormSelect
              heading="status"
              className="w-full mb-2"
              name="status"
              categories={["todo", "in-progress", "done"]}
              defaultValue={card?.status}
            />
            <FormInput
              label="time"
              id="date"
              name="date"
              type="date"
              placeholder="Date"
              defaultValue={card?.date}
            />
          </div>

          <Button disabled={loading} variant="default" size="sm">
            {loading ? "Saving..." : "Save"}
          </Button>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
