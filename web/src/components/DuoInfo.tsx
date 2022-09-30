
interface Props {
    label: string;
    value: string;
    colorValue?: string;
}

export const DuoInfo = ({ label, value, colorValue }: Props) => {

  return (
    <div className="">
        <h1 className="text-lg text-[#C4C4C6]">
            {label}
        </h1>

        <h1 className={`text-lg text-white ${colorValue}`}>
            {value}
        </h1>
    </div>
  )
}