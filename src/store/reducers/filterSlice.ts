import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: FilterState = {
    caribbean: true,
    greek: true,
    french: true,
    indian: true,
    chinese: true,
    calories: [100, 1200],
}
interface FilterState {
    caribbean: boolean
    greek: boolean
    french: boolean
    indian: boolean
    chinese: boolean
    calories: number[]
}
export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        caribbean(state, action: PayloadAction<boolean>) {
            state.caribbean = action.payload
        },
        greek(state, action: PayloadAction<boolean>) {
            state.greek = action.payload
        },
        french(state, action: PayloadAction<boolean>) {
            state.french = action.payload
        },
        indian(state, action: PayloadAction<boolean>) {
            state.indian = action.payload
        },
        chinese(state, action: PayloadAction<boolean>) {
            state.chinese = action.payload
        },
        calories(state, action: PayloadAction<number[]>) {
            state.calories = action.payload
        },
    },
})

export const { caribbean, greek, french, indian, chinese, calories } =
    filterSlice.actions
export default filterSlice.reducer
