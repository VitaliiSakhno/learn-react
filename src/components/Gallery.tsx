import Scientist from "./Scientist";
import css from "../styles/Gallery.module.css"

export default function Gallery() {
  return (
    <>
    <h1 className={css.title}>The great scientists</h1>
    <div className={css.scientists}>
      <Scientist src="https://i.imgur.com/MK3eW3As.jpg" alt="Alla Burds" name="Alla Burds"/>
      <Scientist src="https://i.imgur.com/MK3eW3As.jpg" alt="Tiana Carol" name="Tiana Carol"/>
      <Scientist src="https://i.imgur.com/MK3eW3As.jpg" alt="Lucid Fee" name="Lucid Fee"/>
      </div>
    </>
  );
}