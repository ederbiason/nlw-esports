import * as Dialog from '@radix-ui/react-dialog'
import { Check, CheckCircle, Copy, GameController, X } from "phosphor-react"
import { DuoInfo } from "./DuoInfo"
import { DuoCardProps } from "./Games"

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState } from 'react'

interface Props {
  data: DuoCardProps
}

export const DuoCard = ({ data }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const handleCopyIcon = () => {
    setIsCopied(true)

    setInterval(() => {
      setIsCopied(false)
    }, 1500)
  }

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
            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[311px] shadow-lg shadow-black/25 flex flex-col items-center">
              <Dialog.Title className="mb-6">
                <CheckCircle size={84} className="text-emerald-400" />
              </Dialog.Title>
            
              <Dialog.Title className="font-black text-2xl">
                Let's play!
              </Dialog.Title>

              <Dialog.Title className="text-zinc-400 text-base mb-6">
                Agora é só começar a jogar!
              </Dialog.Title>

              <div className="text-center flex flex-col gap-2">
                <Dialog.Title>
                  Adicone no Discord
                </Dialog.Title>
                <div className="flex items-center justify-center py-2 px-4 bg-zinc-900 rounded-lg w-full">
                  <input 
                    className="text-zinc-200 text-base w-full text-center bg-zinc-900" 
                    value={data.discord} 
                    disabled 
                    type="text" 
                  />

                  <CopyToClipboard text={data.discord}>
                    <button 
                      className={`hover:bg-zinc-800 p-2 rounded flex items-center justify-center ${isCopied ? 'border-[1px] border-emerald-400' : 'border-[1px] border-zinc-900'} focus:bg-zinc-800`} 
                      onClick={handleCopyIcon}
                    >
                      {
                        isCopied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} />
                      }
                    </button>
                  </CopyToClipboard>
                </div>
              </div>

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