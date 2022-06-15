import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchRecipe = createAsyncThunk(
    "recipe",
    async (id: number, thunkApi) => {
        try {
            const response = await axios.get(
                `https://test.kode-t.ru/detail_${id}.json`
            )
            return response.data.recipe
        } catch (error) {
            return thunkApi.rejectWithValue("Ошибка при загрузке рецепта!")
        }
    }
)
