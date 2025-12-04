import { createSlice } from '@reduxjs/toolkit'

export type Theme = "dark" | "light"

const initialTheme: Theme = (localStorage.getItem('theme') as Theme) || "light"
document.body.dataset.theme = initialTheme
export const appSlice = createSlice({
    name: "app",
    initialState: {
        theme: initialTheme
    },
    reducers: (create)=>({
        toggleTheme: create.reducer((state) =>{
            state.theme = state.theme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', state.theme)
            document.body.dataset.theme = state.theme;
        })
    }),
    selectors: {
        selectTheme: (state) => state.theme,
    },
})
export const { toggleTheme } = appSlice.actions;
export const { selectTheme } = appSlice.selectors;

export const appReducer = appSlice.reducer;