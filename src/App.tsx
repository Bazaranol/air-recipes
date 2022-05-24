import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import { RecipePage } from "./components/pages/RecipePage"
import { RecipesPage } from "./components/pages/RecipesPage"
import { Layout } from "./components/templates/Layout"
import { SCREENS } from "./routes/endpoints"

function App() {
    return (
        <>
            <Routes>
                <Route path={SCREENS.SCREEN_LAYOUT} element={<Layout />}>
                    <Route index element={<RecipesPage />} />
                    <Route
                        path={SCREENS.SCREEN_RECIPE}
                        element={<RecipePage id={1} />}
                    />
                    <Route
                        path={SCREENS.SCREEN_UNKNOWN}
                        element={<RecipesPage />}
                    />
                </Route>
            </Routes>
        </>
    )
}

export default App
