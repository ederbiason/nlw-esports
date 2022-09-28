import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Game } from "../App";

import logo from '../assets/logo-nlw-esports.svg'

export const Games = () => {
  const [game, setGame] = useState<Game>()
  const { id } = useParams()

  useEffect(() => {
    axios(`http://localhost:3333/games/${id}/ads`)
      .then(response => {
        setGame(response.data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo image" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui
      </h1>

      <h1>
        {game?.title}
      </h1>
    </div>
  )
}