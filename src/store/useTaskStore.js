import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useTaskStore = create(
  devtools((set, get) => ({
    tasks: [],

    addTask: (taskData) => {
      set((state) => {
        const newTask = {
          ...taskData,
          id: crypto.randomUUID(),
        };

        return { tasks: [...state.tasks, newTask] };
      });
    },
  })),
);

export default useTaskStore;
