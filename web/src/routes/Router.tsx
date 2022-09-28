import { Routes, Route } from "react-router-dom"
import { App } from "../App"
import { Games } from "../components/Games"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} /> 
            <Route path="/games/:id"  element={<Games />}/>
        </Routes>
    )
}