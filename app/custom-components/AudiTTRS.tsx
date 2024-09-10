import Image from "next/image";

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
                    <p>Test test test</p>
                </div>
                <div className="audiImageDivGroupB">
                    {Object.entries(tTRSImg).map(([key, { src, alt }]) => (
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