'use client'
import Image from "next/image";
import useSound from "use-sound";

const EngineButton = () => {
    const [play, { stop }]= useSound('/sounds/RS3ExhaustSound.mp3');
    return <button onMouseEnter={() => play()} onMouseLeave={() => stop()}>Engine Sound</button>;
};

const audiRs3Img = {
    AudiRS3: { src: '/audiRS3_1.png', alt: 'A first gen red Audi RS3'},
    AudiRS3_2: { src: '/audiRS3_2.png', alt: 'A 2024 grey Audi RS3'}
}

export default function AudiRS3() {
    return (
        <section>
            <div className='audiContainerFlipped'>
                <div className='openingParagraph'>
                    <h2>Audi RS3</h2>
                    <p> The highest specification RS 3 model is fitted with a 2.5-litre 5-cylinder producing 400 PS (294 kW; 395 hp) and 500 N⋅m (369 lb⋅ft), and has 0-60 mph (97 km/h) acceleration time of 3.8 seconds. It gets a seven-speed dual-clutch automatic, or an electric S-Tronic gearbox. It also gets the new MMI infotainment system, with a 10.25 or 12.3-inch digital instrument cluster, and a secondary screen of 10.1-inches. With the RS Dynamic package the speed limiter is removed, allowing the RS3 to reach a top speed of 290 km/h (180 mph). The US-market RS3 produces marginally more power than the European RS3, at a claimed 401 hp (299 kW; 407 PS). This is partially due to the lack of a Gasoline particulate filter for US model cars, as it is not required to meet emissions standards. The US-market RS3 instead receives a secondary catalytic converter.
                    </p>
                </div>
                <div className='audiImageDivGroupB'>
                    {Object.entries(audiRs3Img).map(([key, { src, alt }]) => (
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