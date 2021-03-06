import { rootReducer } from "./reducers/index"
import { configureStore } from "@reduxjs/toolkit"

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
