import styles from "./FilmCard.module.css";
import FilmCardBackground from "@/assets/FilmCardBackground.svg";
import { Button } from "../Button/Button";
import { ComponentProps, FC, useState } from "react";
import classNames from "classnames";
import { likeFilm } from "@/api/requests/likeFilm";
import { Movies } from "@/types/User";
import { arraysAreEqual } from "../../Lobby";
interface FilmCardProps extends ComponentProps<"div"> {
  handleNextMovie: () => void;
  image: string;
  exiting: number;
  roomId: string;
  likedFilms: Movies[];
  movieId: string;
  setSelectedFilm: (v: Movies) => void;
  handleOpen: (v: boolean) => void;
  setLikedFilms: (v: Movies[]) => void;
}

export const FilmCard: FC<FilmCardProps> = ({
  exiting,
  image,
  roomId,
  likedFilms,
  movieId,
  handleOpen,
  setLikedFilms,
  setSelectedFilm,
  handleNextMovie,
}) => {
  const [disables, setDisables] = useState(false);
  const handleLike = async () => {
    setDisables(true);
    handleNextMovie();
    const data = await likeFilm({ roomId: roomId, movieId: movieId });
    console.log(data);
    if (!arraysAreEqual(likedFilms, data)) {
      handleOpen(true);
      setLikedFilms(data);
      setSelectedFilm(data[data.length - 1]);
    }
  };
  const shouldAnimate = exiting > 0;

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.exiting]: shouldAnimate,
      })}
      style={{
        transform: `translateY(-${exiting * 100}vh)`,
      }}
    >
      <div className={styles.cardWrapper}>
        <img className={styles.image} src={FilmCardBackground} alt="" />
        <div className={styles.wr}>
          <img className={styles.poster} src={image} alt="" />
          <div className={styles.buttonWrapper}>
            <Button
              onClick={handleNextMovie}
              className={styles.dislike}
              appearance="dislike"
            >
              DISLIKE
            </Button>
            <Button
              onClick={handleLike}
              className={styles.like}
              appearance="like"
              disabled={disables}
            >
              LIKE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
