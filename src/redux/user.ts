import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../interfaces/IUser";
import { api } from "../service/api";

const endpoint_path = 'users';

const initialState: IUserState = {
    users: [],
    status: 'idle',
    error: null,
}

export const fetchUsers = createAsyncThunk('/', async () => {
    const response = await api<IUser[]>(endpoint_path, "GET");
    return response.data;
});

export const taskSlice = createSlice ({
    name: "tasks",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.status = "success";
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
    }
});


export default taskSlice.reducer;