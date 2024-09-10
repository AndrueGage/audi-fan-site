'use client'

import useSound from 'use-sound';
import Image from 'next/image';

const EngineButton = () => {
    const [play] = useSound('/sounds/audiQuattro.mp3');
    const handleClick = () => play();
    return <button onClick={handleClick}>Engine Sound</button>;
};

const groupBImg = {
    AudiS1: { src: '/audiQuattroGroupB.png', alt: 'Audi S1 Car' },
    AudiS1_2: { src: '/audiQuattroGroupB2.png', alt: 'Audi S1 Car' }
};

export default function GroupB() {
    return (
        <section>
            <div className='audiContainerFlipped'>
                <div className='openingParagraph'>
                    <h2>Audi Sport Quattro S1</h2>
                    <p>Audi's success in the Group B rally era is one of the most significant chapters in the brand's motorsport history. The story begins in the late 1970s when Audi's engineers, led by Ferdinand Piëch, developed the concept of an all-wheel-drive system for a road car. This innovative idea led to the creation of the Audi Quattro, which was unveiled at the Geneva Motor Show in 1980. The Quattro was revolutionary, being the first high-performance car to feature permanent four-wheel drive, a technology that would soon transform rallying.
                        Audi entered the World Rally Championship (WRC) in 1981, initially with modest success. However, the true breakthrough came in 1982 when Audi officially entered the Group B category with the Audi Quattro A1. Group B was known for its minimal restrictions, allowing manufacturers to push the limits of technology and performance, which perfectly suited Audi's engineering prowess.
                        The Quattro quickly proved to be a game-changer. Its all-wheel-drive system provided superior traction on the varied and often treacherous rally surfaces, giving it a significant advantage over its rear-wheel-drive competitors. The car's powerful turbocharged inline-five engine delivered exceptional performance, making the Quattro nearly unbeatable.
                        In 1982, Audi secured its first manufacturers' title in the WRC, with Hannu Mikkola driving the Quattro to several victories. The following year, in 1983, Mikkola won the drivers' championship, further cementing Audi's dominance in the sport. Audi's success continued in 1984 with the introduction of the Quattro A2, which was lighter and even more powerful. Stig Blomqvist won the drivers' championship that year, and Audi once again took the manufacturers' title.
                        The most iconic version of Audi's Group B car was the Audi Sport Quattro S1, introduced in 1985. This evolution of the Quattro featured a shorter wheelbase for better handling, a more powerful engine producing up to 600 horsepower, and aggressive aerodynamic enhancements, including a large rear wing. The S1 became one of the most formidable rally cars of the Group B era, known for its raw power and distinctive, roaring engine sound.
                    </p>
                </div>
                <div className='audiImageDivGroupB'>
                    {Object.entries(groupBImg).map(([key, { src, alt }]) => (
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