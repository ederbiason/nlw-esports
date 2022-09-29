import { DuoCardProps } from "./Games"

interface Props {
    data: DuoCardProps
}

export const DuoCard = ({data}: Props) => {
  return (
    <div className="text-white text-xl bg-[#3b3649] w-56 rounded-lg p-5 mr-4">
        {data.name}
    </div>
  )
}