import { useEffect, useState } from "react";
import styles from "./FavoriteFilms.module.css";
import { likeFilm } from "@/api/requests/likeFilm";
import { useNavigate, useParams } from "react-router-dom";
import { Movies } from "@/types/User";
import { FilmCard } from "./FilmCard/FilmCard";
import { Button } from "../Lobby/components/Button/Button";
export const FavoriteFilms = () => {
  const [films, setFilms] = useState<Movies[]>([]);
  const navigate = useNavigate();
  const roomId = useParams().roomId as string;

  useEffect(() => {
    const fetchData = async () => {
      const data = await likeFilm({ roomId, movieId: "0" });
      setFilms(data);
    };
    fetchData();
  }, []);

  const onClick = () => {
    navigate("/");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.likedFilms}>
        <span> Эти фильмы понравились всем:</span>
        <div className={styles.filmList}>
          {films.length > 0 && films.map((el) => <FilmCard film={el} />)}
        </div>
      </div>
      <Button onClick={onClick} className={styles.button} appearance="like">
        В главное меню
      </Button>
    </div>
  );
};
