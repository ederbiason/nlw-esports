import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import axios from 'axios';

import { CaretDown, CaretUp, Check, GameController } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import { Input } from './Form/Input';

interface Game {
    id: string;
    title: string;
}

export const CreateAdModal = () => {
    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceString, setUseVoiceString] = useState<boolean>(false)

    useEffect(() => {
        axios('http://localhost:3333/games')
            .then(response => {
                setGames(response.data)
            })
    }, [])

    async function handleCreateAd(event: FormEvent) {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        // fazer uma validação melhor

        if(!data.name) {
            return;
        }

        try {
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weeksDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceString: useVoiceString
            })

            alert("Anúncio criado com sucesso!")
        } catch (err) {
            console.log(err)
            alert("Erro ao criar o anúncio!")
        }   
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:w-[480px] shadow-lg shadow-black/25">
                <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>

                <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">Qual o game?</label>
                        <Select.Root name='game'>
                            <Select.Trigger className="inline-flex items-center justify-between bg-zinc-900 py-3 px-4 rounded text-sm">
                                <Select.Value placeholder="Selecione o game que deseja jogar" className="text-zinc-500" />
                                <Select.Icon>
                                    <CaretDown />
                                </Select.Icon>
                            </Select.Trigger>

                            <Select.Portal>
                                <Select.Content className="bg-zinc-900 rounded-md shadow-xl">
                                    <Select.ScrollUpButton>
                                        <CaretUp />
                                    </Select.ScrollUpButton>

                                    <Select.Viewport className="p-2 text-white">
                                        <Select.Group>
                                            <Select.Label>
                                                Games
                                            </Select.Label>
                                            <Select.Separator className="h-[2px] bg-zinc-800" />
                                            {games.map((game) => {
                                                return (
                                                    <Select.Item
                                                        key={game.id}
                                                        value={game.id}
                                                        className="flex items-center gap-1 hover:bg-zinc-800 rounded px-2"
                                                    >
                                                        <Select.ItemIndicator className="">
                                                            <Check />
                                                        </Select.ItemIndicator>
                                                        <Select.ItemText>
                                                            {game.title}
                                                        </Select.ItemText>
                                                    </Select.Item>
                                                )
                                            })}
                                        </Select.Group>
                                    </Select.Viewport>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <Input name="name" id="name" type="text" placeholder="Como te chamam dentro do game?" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                            <Input name="yearsPlaying" id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord">Qual seu discord id?</label>
                            <Input name="discord" id="discord" type="text" placeholder="Usuário#0000" />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="weeksDays">Quando costuma jogar?</label>

                            <ToggleGroup.Root
                                type="multiple"
                                className="grid grid-cols-4 gap-2"
                                value={weekDays}
                                onValueChange={setWeekDays}
                            >
                                <ToggleGroup.Item
                                    value="0"
                                    title="Domingo"
                                    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    D
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="1"
                                    title="Segunda"
                                    className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="2"
                                    title="Terça"
                                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    T
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="3"
                                    title="Quarta"
                                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="4"
                                    title="Quinta"
                                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="5"
                                    title="Sexta"
                                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="6"
                                    title="Sábado"
                                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                >
                                    S
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hourStart">Qual horário do dia?</label>
                            <div className="grid grid-cols-2 gap-2">
                                <Input name="hourStart" id="hourStart" type="time" placeholder="De" />
                                <Input name="hourEnd" id="hourEnd" type="time" placeholder="Até" />
                            </div>
                        </div>
                    </div>

                    <label className="mt-2 flex gap-2 text-sm items-center">
                        <Checkbox.Root
                            className="w-6 h-6 rounded bg-zinc-900 p-1"
                            checked={useVoiceString}
                            onCheckedChange={(checked) => {
                                if (checked === true) {
                                    setUseVoiceString(true)
                                } else {
                                    setUseVoiceString(false)
                                }
                            }}
                        >
                            <Checkbox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </label>

                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close className="bg-zinc-500 rounded-md px-5 h-12 font-semibold hover:bg-zinc-600">
                            Cancelar
                        </Dialog.Close>

                        <button
                            type="submit"
                            className="bg-violet-500 rounded-md px-5 h-12 font-semibold flex items-center gap-3 hover:bg-violet-600"
                        >
                            <GameController size={24} />
                            Encontrar duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}