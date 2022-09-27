import { Routes, Route } from "react-router-dom"
import { App } from "../App"
import { Game } from "../components/Game"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} /> 
            <Route path="/games/:id"  element={<Game />}/>
        </Routes>
    )
}