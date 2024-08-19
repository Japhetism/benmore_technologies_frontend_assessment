import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IList, IListMutate, IListState } from "../interfaces/IList";
import { api } from "../service/api";

const endpoint_path = 'lists';

const initialState: IListState = {
    lists: [],
    currentList: null,
    status: 'idle',
    error: null,
}

export const fetchLists = createAsyncThunk('/', async () => {
    const response = await api<IList[]>(endpoint_path, "GET");
    return response.data;
});

export const fetchListById = createAsyncThunk('/:id', async (id: string) => {
    const response = await api<IList>(`${endpoint_path}/${id}`, "GET");
    return response.data;
});

export const addList = createAsyncThunk('/add', async (list: IListMutate) => {
    const response = await api<IList>(endpoint_path, "POST", list);
    return response.data;
});

export const updateList = createAsyncThunk('/update/:id', async (list: IList) => {
    const response = await api<IList>(`${endpoint_path}/${list.id}`, "PUT", list);
    return response.data;
});

export const deleteList = createAsyncThunk('/delete/:id', async (id: string) => {
    await api<void>(`${endpoint_path}/${id}`, "DELETE");
    return id;
});

export const listSlice = createSlice ({
    name: "list",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLists.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchLists.fulfilled, (state, action: PayloadAction<IList[]>) => {
                state.status = "success";
                state.lists = action.payload;
            })
            .addCase(fetchLists.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(fetchListById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchListById.fulfilled, (state, action: PayloadAction<IList>) => {
                state.status = "success";
                state.currentList = action.payload;
            })
            .addCase(fetchListById.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(addList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addList.fulfilled, (state, action: PayloadAction<IList>) => {
                state.status = "success";
                state.currentList = action.payload;
            })
            .addCase(addList.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(updateList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateList.fulfilled, (state, action: PayloadAction<IList>) => {
                const index = state.lists.findIndex((list: IList) => list.id === action.payload.id);
                state.status = "success";
                if (index !== -1) {
                    state.lists[index] = action.payload;
                }
            })
            .addCase(updateList.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(deleteList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteList.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = "success";
                state.lists = state.lists.filter((list: IList) => list.id !== action.payload)
            })
            .addCase(deleteList.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
    }
});


export default listSlice.reducer;