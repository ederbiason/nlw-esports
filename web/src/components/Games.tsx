import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams} from "react-router-dom";
import { DuoCard } from "./DuoCard";

export interface DuoCardProps {
  hourEnd: string; 
  hourStart: string;
  id: string;
  name: string;
  useVoiceString: boolean;
  weeksDays: string[];
  yearsPlaying: number;
}

export const Games = () => {
  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const location = useLocation();
  const { id } = useParams()

  useEffect(() => {
    axios(`http://localhost:3333/games/${id}/ads`)
      .then(response => {
        setDuos(response.data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto my-20">
      <div className="flex items-center justify-evenly">
        <img src={location.state.bannerUrl} alt="Logo image" className="rounded-lg h-64" />

        <div>
          <h1 className="text-6xl text-white font-black mt-10">
            Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui
          </h1>

          <h1 className="text-6xl text-white font-black mt-3">
            {location.state.title}
          </h1>
        </div>
      </div>

      <div>
        {duos.map((duo) => (
          <DuoCard
            key={duo.id}
            data={duo}
          />
        ))}
      </div>
    </div>
  )
}