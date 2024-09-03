import Image from "next/image";
import styles from "./page.module.css";
import audiGif from "../public/audi_combo_gif.gif"

export default function Home() {
  return (
    <main>
      <div>
        <Image 
        src={audiGif}
        height={500}
        width={1000}
        alt="gif of the famous 5 cylinder audis"/>
      </div>
      </main>
  );
}
