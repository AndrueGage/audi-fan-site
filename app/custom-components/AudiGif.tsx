import Image from "next/image"
import audiGif from "../../public/audi_combo_gif.gif"

export default function AudiGif() {
    return (
        <section>
            <div>
                <h1 className="title">Audi MotorSports Excellence</h1>
            </div>
            <div className="audiContainer">
            <div className="openingParagraph">
                <h2>5-Cylinder History</h2>
                    <p>Audi, founded in 1909 by August Horch, has a rich history that spans over a century, marked by a relentless pursuit of engineering excellence. The brand's foray into motorsports began in the early 1980s with the introduction of the Audi Quattro, a revolutionary all-wheel-drive system that dominated the World Rally Championship. Audi's commitment to innovation and performance has since translated into numerous victories across various racing disciplines, including the 24 Hours of Le Mans, where they became a powerhouse with 13 wins. This legacy of success in motorsports underscores Audi's reputation for precision engineering and cutting-edge technology.</p>
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