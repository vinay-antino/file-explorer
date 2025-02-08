import { configureStore } from "@reduxjs/toolkit";
import foldersReducer from "./folderSlice";

export const store = configureStore({
  reducer: {
    folders: foldersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
