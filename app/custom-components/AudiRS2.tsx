import Image from "next/image"
import useSound from 'use-sound';

const rs2Img = {
    AudiRS2: { src: '/audiRS2.png', alt: 'A blue Audi RS2'},
    AudiRS2_2: { src: '/audiRS2_2.png', alt: 'A blue Audi RS2' }
};

export default function Rs2(){
    return(
        <section>
            <div className="audiContainer">
                <div className="openingParagraph">
                    <h2>Audi RS2</h2>
                    <p>Test test test</p>
                </div>
                <div className="audiImageDivGroupB">
                    {Object.entries(rs2Img).map(([key, { src, alt }]) => (
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

