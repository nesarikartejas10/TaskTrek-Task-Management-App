import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTaskStore = create(
  devtools(
    persist(
      (set, get) => ({
        tasks: [],
        activeTaskId: null,

        addTask: (taskData) => {
          set((state) => {
            const newTask = {
              ...taskData,
              id: crypto.randomUUID(),
            };

            return { tasks: [...state.tasks, newTask] };
          });
        },

        deleteTask: (taskId) => {
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== taskId),
          }));
        },

        setActiveTask: (id) => {
          set({ activeTaskId: id });
        },

        moveTask: (status, position) => {
          const { tasks, activeTaskId } = get();

          const taskToMove = tasks.find((task) => task.id === activeTaskId);

          const remainingTasks = tasks.filter(
            (task) => task.id !== activeTaskId,
          );

          remainingTasks.splice(position, 0, { ...taskToMove, status: status });
          set({ tasks: remainingTasks, activeTaskId: null });
        },
      }),
      { name: "tasktrek-storage" },
    ),
  ),
);

export default useTaskStore;
