import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"

export const CreateAdBanner = () => {
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8 mx-10 md:mx-0">
            <div className="bg-[#2A2634] px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <div className="text-center md:text-left">
                    <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
                    <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}