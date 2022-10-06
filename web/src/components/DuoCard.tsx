import * as Dialog from '@radix-ui/react-dialog'
import { CheckCircle, GameController, X } from "phosphor-react"
import { DuoInfo } from "./DuoInfo"
import { DuoCardProps } from "./Games"

interface Props {
  data: DuoCardProps
}

export const DuoCard = ({ data }: Props) => {
  return (
    <div className="text-white text-xl bg-[#2A2634] w-60 rounded-lg p-5 mr-4 flex flex-col gap-2">
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

      <Dialog.Root>
        <Dialog.Trigger className="flex items-center justify-center font-semibold text-lg gap-2 w-full rounded-lg bg-[#8B5CF6] h-10">
          <GameController 
            size={24}
          />
          Conectar
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          
          <div className="relative">
            <Dialog.Content className="fixed bg-[#2A2634] py-3 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[311px] shadow-lg shadow-black/25 flex flex-col items-center">
              <Dialog.Title className="my-4">
                <CheckCircle size={84} className="text-emerald-400" />
              </Dialog.Title>
            
              <Dialog.Title className="font-black text-2xl">
                Let's play!
              </Dialog.Title>

              <Dialog.Title className="text-zinc-400 text-base mb-6">
                Agora é só começar a jogar!
              </Dialog.Title>

              <Dialog.Title>
                Adicone no Discord
              </Dialog.Title>

              

              <Dialog.Close className="absolute top-3 right-3">
                <X className="text-zinc-500" size={20}/>
              </Dialog.Close>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}