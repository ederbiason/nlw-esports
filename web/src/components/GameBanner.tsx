import { useNavigate } from "react-router-dom";

interface Props {
    bannerUrl: string;
    title: string;
    adsCount: number;
    id: string;
}

export const GameBanner = ({ bannerUrl, title, adsCount, id}: Props) => {
    const navigate = useNavigate()

    function goToGameAds() {
        navigate(`/games/${id}`, { state: { title, bannerUrl, id } })
    }

    return (
        <a href="" className="relative rounded-lg overflow-hidden"  onClick={() => goToGameAds()}>
            <img src={bannerUrl} alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">
                    {title}
                </strong>

                <span className="text-zinc-300 text-sm block">
                    {adsCount} anúncio(s)
                </span>
            </div>
        </a>
    )
}