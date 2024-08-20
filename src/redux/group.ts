import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroup, IGroupMutate, IGroupState } from "../interfaces/IGroup";
import { api } from "../service/api";

const endpoint_path = 'groups';

const initialState: IGroupState = {
    groups: [],
    currentGroup: null,
    status: 'idle',
    error: null,
}

export const fetchGroups = createAsyncThunk('/groups', async () => {
    const response = await api<IGroup[]>(endpoint_path, "GET");
    return response.data;
});

export const fetchGroupById = createAsyncThunk('/groups/:id', async (id: string) => {
    const response = await api<IGroup>(`${endpoint_path}/${id}`, "GET");
    return response.data;
});

export const addGroup = createAsyncThunk('/groups/add', async (group: IGroupMutate) => {
    const response = await api<IGroup>(endpoint_path, "POST", group);
    return response.data;
});

export const updateGroup = createAsyncThunk('/groups/update/:id', async (group: IGroup) => {
    const response = await api<IGroup>(`${endpoint_path}/${group.id}`, "PUT", group);
    return response.data;
});

export const deleteGroup = createAsyncThunk('/groups/delete/:id', async (id: string) => {
    await api<void>(`${endpoint_path}/${id}`, "DELETE");
    return id;
});

export const groupSlice = createSlice ({
    name: "group",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGroups.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGroups.fulfilled, (state, action: PayloadAction<IGroup[]>) => {
                state.status = "success";
                state.groups = action.payload;
            })
            .addCase(fetchGroups.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(fetchGroupById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGroupById.fulfilled, (state, action: PayloadAction<IGroup>) => {
                state.status = "success";
                state.currentGroup = action.payload;
            })
            .addCase(fetchGroupById.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(addGroup.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addGroup.fulfilled, (state, action: PayloadAction<IGroup>) => {
                state.status = "success";
                state.currentGroup = action.payload;
            })
            .addCase(addGroup.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(updateGroup.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateGroup.fulfilled, (state, action: PayloadAction<IGroup>) => {
                const index = state.groups.findIndex((group: IGroup) => group.id === action.payload.id);
                state.status = "success";
                if (index !== -1) {
                    state.groups[index] = action.payload;
                }
            })
            .addCase(updateGroup.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
            .addCase(deleteGroup.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteGroup.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = "success";
                state.groups = state.groups.filter((group: IGroup) => group.id !== action.payload)
            })
            .addCase(deleteGroup.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || null;
            })
    }
});


export default groupSlice.reducer;