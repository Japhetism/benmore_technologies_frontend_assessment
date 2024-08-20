import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from "./group";
import listsReducer from "./list";
import tasksReducer from "./task";
import modalReducer from "./modal";

export const store = configureStore({
    reducer: {
        groups: groupsReducer,
        lists: listsReducer,
        tasks: tasksReducer,
        modal: modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

