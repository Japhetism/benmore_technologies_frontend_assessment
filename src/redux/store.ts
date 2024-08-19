import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from "./group";
import listsReducer from "./list";

export const store = configureStore({
    reducer: {
        groups: groupsReducer,
        lists: listsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

