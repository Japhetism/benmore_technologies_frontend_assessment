import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModal, IModalType } from "../interfaces/IModal";

const initialState: IModal = {
    isVisible: false,
    type: 'tasks'
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state, action: PayloadAction<{ type: IModalType}>) => {
            state.isVisible = true;
            state.type = action.payload.type;
        },
        hideModal: (state) => {
            state.isVisible = false;
            state.type = "tasks";
        }
    }
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;