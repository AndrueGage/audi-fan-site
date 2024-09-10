'use client'
import Image from "next/image";
import useSound from "use-sound";

const EngineButton = () => {
    const [play, { stop }]= useSound('/sounds/TTRS5-CylinderSound.mp3');
    return <button onMouseEnter={() => play()} onMouseLeave={() => stop()}>Engine Sound</button>;
};

const tTRSImg = {
    AudiTTRS_1: { src: '/AudiTTRS_1.png', alt: 'A red 2009 Audi TTRS'},
    AudiTTRS_2: { src: '/AudiTTRS_2.png', alt: 'A grey 2023 Audi TTRS' }
};

export default function AudiTTRS() {
    return (
        <section>
            <div className="audiContainer">
                <div className="openingParagraph">
                    <h2>Audi TTRS</h2>
                    <p>The Audi TT RS is a high-performance sports car known for its distinctive design and powerful performance. It features a 2.5-liter turbocharged five-cylinder engine that produces around 394 horsepower, allowing it to accelerate from 0 to 60 mph in about 3.6 seconds. Equipped with a 7-speed dual-clutch automatic transmission and Audi's Quattro all-wheel-drive system, the TT RS offers agile handling and impressive traction. This combination of power, precision, and Audi's signature style makes the TT RS a standout in the sports car segment.</p>
                </div>
                <div className="audiImageDivGroupB">
                    {Object.entries(tTRSImg).map(([key, { src, alt }]) => (
                        <div key={key}>
                            <div className='groupBImage'>
                                <Image priority src={src} alt={alt} height={500} width={500} style={{ width: '80%', height: 'auto' }} />
                            </div>
                            <EngineButton />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}