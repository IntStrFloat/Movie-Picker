import styles from "./Lobby.module.css";
import { FilmCard } from "./components/FilmCard/FilmCard";
import { Container } from "./components/Container/Container";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useChatMembers } from "@/hooks/useChatMembers";
import { useMovies } from "@/api/queries/useMovies";
import Star from "@/assets/Star.png";
import { PopUp } from "@/components/PopUp/PopUp";
import { useNavigate } from "react-router-dom";
import { likeFilm } from "@/api/requests/likeFilm";
import { Movies } from "@/types/User";
import _ from "lodash";
import classNames from "classnames";
export function arraysAreEqual<T extends { name: string }>(
  arr1: T[],
  arr2: T[]
): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].name !== arr2[i].name) {
      return false;
    }
  }

  return true;
}
export const Lobby: FC = () => {
  const [filmIndex, setFilmIndex] = useState<number>(0);
  const [exiting, setExiting] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedFilm, setSelectedFilm] = useState<Movies | null>();
  const [likedFilms, setLikedFilms] = useState<Movies[]>([]);

  const navigate = useNavigate();

  const roomId = useParams().roomId as string;
  const movies = useMovies(roomId!);
  const members = useChatMembers(roomId!);

  const handleNextMovie = async () => {
    const dislikedFilm = await likeFilm({ roomId, movieId: "0" });
    console.log(dislikedFilm);
    console.log(likedFilms);
    if (!arraysAreEqual(likedFilms, dislikedFilm)) {
      setLikedFilms(dislikedFilm);
      setSelectedFilm(dislikedFilm[dislikedFilm.length - 1]);
      setIsOpen(true);
    }
    setExiting(filmIndex + 1);
    setTimeout(() => {
      setFilmIndex(filmIndex + 1);
    }, 500);
  };
  const onContinue = () => {
    setIsOpen(false);
  };
  const onClose = () => {
    setIsOpen(false);
    navigate(`/favoriteFilms/${roomId}`);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  if (movies.status !== "success") {
    return <p>Loadind...</p>;
  }
  if (filmIndex === movies.data.length) {
    return <span>Фильмы закончились</span>;
  }
  return (
    <>
      {selectedFilm && (
        <PopUp
          onClose={onClose}
          onContinue={onContinue}
          isOpen={isOpen}
          film={selectedFilm as Movies}
        />
      )}
      <div
        className={classNames(styles.wrapper, {
          [styles.popupOpen]: isOpen,
        })}
      >
        <div className={styles.playersWrapper}>
          <div>
            <Container appearance="big">код лобби: {roomId}</Container>
          </div>
          {members?.participants &&
            members.participants.map((item) => (
              <Container appearance="big" isAdmin={item.isAdmin}>
                {item.userName}
              </Container>
            ))}
        </div>
        <div className={styles.filmCardWrapper}>
          {movies.data.map((movie) => (
            <FilmCard
              setLikedFilms={setLikedFilms}
              className={styles.caard}
              handleNextMovie={handleNextMovie}
              likedFilms={likedFilms}
              image={movie.poster.url}
              exiting={exiting}
              roomId={roomId!}
              handleOpen={handleOpen}
              setSelectedFilm={setSelectedFilm}
              movieId={movie.id.toString()}
              style={{ transform: `translateY(-${exiting * 100}vh)` }}
            />
          ))}
        </div>
        <div className={styles.descriptionWrapper}>
          <Container appearance="small" className={styles.title}>
            <img src={Star} alt="" style={{ width: "30px" }} />
            {movies.data[filmIndex].rating.kp} / 10 KP
          </Container>
          <Container appearance="small">
            {movies.data[filmIndex].name}
          </Container>
          <div className={styles.genresWrapper}>
            {movies.data[filmIndex].genres.map((item) => (
              <Container appearance="small" className={styles.genre}>
                {item.name}
              </Container>
            ))}
          </div>
          <Container appearance="small" className={styles.title}>
            {movies.data[filmIndex].year}
            {"   "}
            {`${movies.data[filmIndex].ageRating}+`}
          </Container>
          <Container appearance="small" className={styles.description}>
            {movies.data[filmIndex].description}
          </Container>
        </div>
      </div>
    </>
  );
};
