import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import logo from './assets/logo-nlw-esports.svg'
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

export function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])


  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo image" />

      <h1 className="text-6xl text-white font-black mt-20 text-center">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui
      </h1>

      <ul className="flex gap-6 mt-16 overflow-x-auto snap-x snap-mandatory before:shrink-0 after:shrink-0 pb-2">
        {games.map((game) => (
          // <Link to={`/games/${game.id}`} key={game.id}>
            <li className="shrink-0 snap-center" key={game.id}>
              <GameBanner
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
                id={game.id}
              />
            </li>
        ))}
      </ul>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}