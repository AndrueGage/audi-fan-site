import Image from "next/image"
import audiGif from "../../public/audi_combo_gif.gif"

export default function AudiGif() {
    return (
        <div>
            <Image
                src={audiGif}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }} 
                alt="gif of the famous 5 cylinder audis" />
        </div>
    )
}