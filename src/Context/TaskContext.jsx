import { createContext, useContext, useEffect, useState } from "react";
import { request } from "@/utils/Request";
import { useUser } from "./UserContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    project: "",
    tags: [],
    members: [],
    search: "",
  });
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      filterTasks();
    }
  }, [user, filters]);
  //  convert json to array
  const parseJsonArrayString = (input) => {
    console.log(input);
    try {
      const parsed = JSON.parse(input);
      console.log(parsed);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return input.split(",").map((item) => item.trim());
    }
  };

  // Fetch tasks from backend with optional query string
  const fetchTasks = async (query = "") => {
    const res = await request.get(`/task/getall${query}`);
    setTasks(res.data);
  };
  // use to clear task from state
  const resetTasks = () => {
    setTasks([]);
    setFilters({
      project: "",
      tags: [],
      members: [],
      search: "",
    });
  };
  // string based on active filters
  const buildQueryString = () => {
    const query = new URLSearchParams();

    if (filters.project) query.append("project", filters.project);
    if (filters.tags.length) query.append("tags", filters.tags.join(","));
    if (filters.members.length)
      query.append("members", filters.members.join(","));
    if (filters.search) query.append("search", filters.search);

    return query.toString() ? `?${query.toString()}` : "";
  };

  const filterTasks = async () => {
    const query = buildQueryString();
    await fetchTasks(query);
  };

  // Update filter state (called from dropdown or search)
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Add a task from form
  const handleAddTask = async (e, setLoading) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const tagsArray = parseJsonArrayString(data.tags);

    const payload = {
      ...data,
      tags: tagsArray,
    };

    console.log(data);
    try {
      console.log(payload);
      const res = await request.post("/task/add", payload);
      setTasks((prev) => [...prev, res.data]);
      setLoading(false);
      e.target.reset();
    } catch (err) {
      console.error("Error adding task:", err);
      setLoading(false);
    }
  };

  // Update a task
  const updateTask = async (id, data) => {
    await request.put(`/task/update/${id}`, data);
    setTasks((prev) =>
      prev.map((task) => (task._id === id ? { ...task, ...data } : task))
    );
  };
  // Delete a task
  const deleteTask = async (id) => {
    try {
      await request.delete(`/task/delete/${id}`);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  // Initial load and re-filter on filters change
  useEffect(() => {
    filterTasks();
  }, [filters]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        updateTask,
        handleAddTask,
        filterTasks,
        updateFilter,
        filters,
        deleteTask,
        resetTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
