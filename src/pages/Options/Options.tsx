import { useState } from "react";
import classnames from "classnames";

import topSepor from "@assets/topSepor.svg";
import secondSepor from "@assets/secondSepor.svg";
import { Option } from "@components/Option/Option";

import styles from "./Options.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { createRoom } from "@/api/requests/createRoom";
import { setMovies } from "@/api/requests/setMovies";
import { OptionList } from "./components/OptionList";

export const Options = () => {
  const [active, setActive] = useState<boolean>(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const navigate = useNavigate();
  const userName = useParams().userName as string;
  const genres = [
    "комедия",
    "боевик",
    "ужасы",
    "триллер",
    "приключения",
    "драма",
    "криминал",
    "фэнтези",
    "военный",
    "документальный",
    "сузыкальный",
    "научная фантастика",
    "постапокалипсис",
  ];
  function swapYears(str: string) {
    return str.replace(/(\d{4})-(\d{4})/, "$2-$1");
  }

  const onClick = async () => {
    setActive(!active);
    const data = await createRoom({
      userName,
    });
    console.log(selectedGenres);

    console.log(selectedYears);
    console.log(data.roomId);
    setTimeout(async () => {
      const movie = await setMovies({
        roomId: data.roomId,
        genres: selectedGenres,
        years: selectedYears,
      });
      console.log(movie);
      navigate(`/lobby/${data.roomId}`);
    }, 0);
  };

  const handleGenreSelect = (genre: string) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  const handleYearSelect = (unFormatYear: string) => {
    const year = swapYears(unFormatYear);
    setSelectedYears((prevYears) =>
      prevYears.includes(year)
        ? prevYears.filter((y) => y !== year)
        : [...prevYears, year]
    );
  };

  return (
    <div className={styles.wrapper}>
      <img
        src={secondSepor}
        alt=""
        className={classnames(styles.topSeporator, {
          [styles.active]: active,
        })}
      />
      <div className={styles.conteiner}>
        <div className={styles.topSeparator}>
          <img src={topSepor} alt="" />
        </div>
        <div className={styles.newGame}>
          <button className={styles.newGameP} onClick={onClick}>
            старт
          </button>
          <Link to={"/"} className={styles.link}>
            <button className={styles.newGamePa} style={{ border: "none" }}>
              назад
            </button>
          </Link>
        </div>
        <div className={styles.middleSeparator}>
          <button className={styles.inviteButton}>жанры:</button>
          <div className={styles.optionList}>
            <OptionList name={genres} onSelect={handleGenreSelect} />
          </div>
        </div>
        <div className={styles.inviteFriends}>
          <button className={styles.inviteButton}>года:</button>
          <div className={styles.optionList}>
            <Option string="2023-2020" onSelect={handleYearSelect} />
            <Option string="2020-2015" onSelect={handleYearSelect} />
            <Option string="2015-2010" onSelect={handleYearSelect} />
            <Option string="2010-2005" onSelect={handleYearSelect} />
            <Option string="2005-2000" onSelect={handleYearSelect} />
          </div>
        </div>
        <div className={styles.bottomSeparator}></div>
      </div>
    </div>
  );
};
