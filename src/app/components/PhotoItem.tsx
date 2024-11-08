import { Photo } from "@/types/Photo";

type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({photo, onClick}: Props) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
      <img src={`/assets/${photo.url}`} alt={photo.alt || "Photo"} className="w-full" />
      </div>
    )
}