import { Movies } from "@/types/User";
import styles from "./FilmCard.module.css";
import { FC } from "react";

interface FilmCardProps {
  film: Movies;
}

export const FilmCard: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{film.name}</h2>
      <img className={styles.image} src={film.poster.url} alt="" />
    </div>
  );
};
