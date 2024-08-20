import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from "./group";
import listsReducer from "./list";
import tasksReducer from "./task";

export const store = configureStore({
    reducer: {
        groups: groupsReducer,
        lists: listsReducer,
        tasks: tasksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

