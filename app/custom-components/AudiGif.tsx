import Image from "next/image"
import audiGif from "../../public/audi_combo_gif.gif"

export default function AudiGif() {
    return (
        <section>
            <div>
                <h1 className="title">Audi Motor Sports Excellence</h1>
            </div>
            <div className="audiContainer">
                <div className="openingParagraph">
                    <h2>5-Cylinder History</h2>
                    <p>text goes here</p>
                </div>
                <div className="audiImageDiv">
                    <Image
                        src={audiGif}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="gif of the famous 5 cylinder audis" />
                </div>
            </div>
        </section>
    )
}