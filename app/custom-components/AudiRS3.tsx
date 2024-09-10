import Image from "next/image";

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
                    <p> test test test
                    </p>
                </div>
                <div className='audiImageDivGroupB'>
                    {Object.entries(audiRs3Img).map(([key, { src, alt }]) => (
                        <div key={key}>
                            <div className='groupBImage'>
                                <Image priority src={src} alt={alt} height={500} width={500} style={{ width: '80%', height: 'auto' }} />
                            </div>
                            {/* <EngineButton /> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}