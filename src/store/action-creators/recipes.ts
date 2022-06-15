import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchRecipes = createAsyncThunk("recipes", async (_, thunkApi) => {
    try {
        const response = await axios.get("https://test.kode-t.ru/list.json")
        return response.data.recipes
    } catch (error) {
        return thunkApi.rejectWithValue("Ошибка при загрузке рецептов!")
    }
})
