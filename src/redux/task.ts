import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask, ITaskMutate, ITaskState } from "../interfaces/ITask";
import { api } from "../service/api";

const endpoint_path = 'tasks';

const initialState: ITaskState = {
    tasks: [],
    currentTask: null,
    status: 'idle',
    error: null,
}

export const fetchTasks = createAsyncThunk('/tasks', async () => {
    const response = await api<ITask[]>(endpoint_path, "GET");
    return response.data;
});

export const fetchTaskById = createAsyncThunk('/tasks/:id', async (id: string) => {
    const response = await api<ITask>(`${endpoint_path}/${id}`, "GET");
    return response.data;
});

export const addTask = createAsyncThunk('/tasks/add', async (list: ITaskMutate) => {
    const response = await api<ITask>(endpoint_path, "POST", list);
    return response.data;
});

export const updateTask = createAsyncThunk('/tasks/update/:id', async (task: ITask) => {
    const response = await api<ITask>(`${endpoint_path}/${task.id}`, "PUT", task);
    return response.data;
});

export const deleteTask = createAsyncThunk('/tasks/delete/:id', async (id: string) => {
    await api<void>(`${endpoint_path}/${id}`, "DELETE");
    return id;
});

export const taskSlice = createSlice ({
    name: "tasks",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<ITask[]>) => {
                state.status = "success";
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(fetchTaskById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTaskById.fulfilled, (state, action: PayloadAction<ITask>) => {
                state.status = "success";
                state.currentTask = action.payload;
            })
            .addCase(fetchTaskById.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(addTask.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addTask.fulfilled, (state, action: PayloadAction<ITask>) => {
                state.status = "success";
                state.currentTask = action.payload;
            })
            .addCase(addTask.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(updateTask.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateTask.fulfilled, (state, action: PayloadAction<ITask>) => {
                const index = state.tasks.findIndex((task: ITask) => task.id === action.payload.id);
                state.status = "success";
                if (index !== -1) {
                    state.tasks[index] = action.payload;
                }
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(deleteTask.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = "success";
                state.tasks = state.tasks.filter((task: ITask) => task.id !== action.payload)
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
    }
});


export default taskSlice.reducer;