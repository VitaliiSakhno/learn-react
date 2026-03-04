import css from "../styles/Scientist.module.css";

export interface ScientistProps {
  src: string;
  alt: string;
  name: string;
}

export default function Scientist({src, alt, name}: ScientistProps) {
  return ( 
    <>
    <div className={css.scientistWrapper}>
      <img
        className={css.scientistAvatar}
        src={src}
        alt={alt}
      />
      <p>{name}</p>
      </div>
    </>
  );
}
