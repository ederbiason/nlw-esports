import { GameController } from "phosphor-react"
import { DuoInfo } from "./DuoInfo"
import { DuoCardProps } from "./Games"

interface Props {
  data: DuoCardProps
}

export const DuoCard = ({ data }: Props) => {
  return (
    <div className="text-white text-xl bg-[#3b3649] w-60 rounded-lg p-5 mr-4 flex flex-col gap-2">
      <DuoInfo
        label="Nome"
        value={data.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weeksDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceString ? "Sim" : "Não"}
        colorValue={data.useVoiceString ? 'text-[#34D399]' : 'text-[#F87171]'}
      />

      <div>
        <button className="flex items-center justify-center font-semibold text-lg gap-2 w-full rounded-lg bg-[#8B5CF6] h-10">
          <GameController 
            size={24}
          />
          Conectar
        </button>
      </div>
    </div>
  )
}