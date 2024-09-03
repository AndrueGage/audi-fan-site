import Image from "next/image"
import audiLogo from "../../public/old_audi_logo.png"


export default function Navbar() {
    return (
        <nav>
            <div style={{ backgroundColor: "rgb(143, 143, 143)" }}>
                <div className='audiLogo'>
                    <Image
                        src={audiLogo}
                        width={200}
                        height={100}
                        alt="audi logo"
                        layout="fixed"
                        style={{ objectFit: 'contain' }} />
                </div>
                <ul>
                    <li>
                        <p>History</p>
                    </li>
                    <li>
                        <p>Gallery</p>
                    </li>
                    <li>
                        <p>Something</p>
                    </li>
                    <li>
                        <p>Something</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}