import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/ThemeSlice";

export const store = configureStore({
	reducer: {
		theme: counterSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
