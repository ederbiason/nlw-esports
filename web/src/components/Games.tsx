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
    <div className="max-w-[1344px] mx-auto mt-20">
      <div className="flex items-center justify-evenly flex-col md:flex-row text-center">
        <img src={location.state.bannerUrl} alt="Logo image" className="rounded-lg h-64" />

        <div>
          <h1 className="text-6xl text-white font-black mt-10 mb-7 md:mb-0">
            Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui
          </h1>

          <h1 className="text-6xl text-white font-black mt-3">
            {location.state.title}
          </h1>
        </div>
      </div>
      
      <div className="flex mt-14 mx-16 gap-8 mb-12 md:mb-0">
        {duos.length > 0 ? duos.map((duo) => (
          <DuoCard
            key={duo.id}
            data={duo}
          />
        )) : 
          <div className="text-center text-white m-auto mt-28 text-2xl">
            <h1>
              Não há anúncios publicados ainda.
            </h1>
          </div>
        }
      </div>
    </div>
  )
}