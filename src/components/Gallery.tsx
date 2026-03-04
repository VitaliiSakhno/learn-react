import Scientist from "./Scientist";
import css from "../styles/Gallery.module.css"

export default function Gallery() {
  return (
    <>
    <h1 className={css.title}>The great scientists</h1>
    <div className={css.scientists}>
      <Scientist src="https://i.imgur.com/MK3eW3As.jpg" alt="Alla Burds" name="Alla Burds"/>
      <Scientist src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" name="Alan L. Hart"/>
      <Scientist src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" name="Katsuko Saruhashi"/>
      </div>
    </>
  );
}