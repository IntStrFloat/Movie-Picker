import styles from "./Menu.module.css";
import topSepor from "@assets/topSepor.svg";
import secondSepor from "@assets/secondSepor.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Menu = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");

  const handleCreateRoom = async () => {
    if (!userName) {
      alert("Please, enter a user name");
    } else {
      // Добавить в состояние клиента через редакс список пользователей и roomId

      navigate(`/options/${userName}`, { replace: true });
    }
  };

  const handleJoinRoom = async () => {
    if (!userName) {
      alert("Please, enter a user name");
    } else {
      navigate(`/joinRoom/${userName}`, { replace: true });
    }
  };

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <img src={secondSepor} alt="" className={styles.topSeporator} />
      <div className={styles.conteiner}>
        <div className={styles.topSeparator}>
          <img src={topSepor} alt="" />
        </div>
        <div className={styles.newGame}>
          <button onClick={handleCreateRoom} className={styles.newGameP}>
            <p>НОВАЯ ИГРА</p>
          </button>
          <button
            onClick={handleJoinRoom}
            className={styles.newGameP}
            style={{ border: "none" }}
          >
            <p>ПРИСОЕДЕНИТЬСЯ</p>
          </button>
        </div>
        <div className={styles.middleSeparator}>
          <input
            type="text"
            placeholder="Введите никнейм"
            value={userName}
            onChange={onChangeNickName}
            className={styles.input}
          />
        </div>
        <div className={styles.inviteFriends}>
          <button className={styles.inviteButton}>пригласи друзей</button>
          <button className={styles.chooseButton}>
            выбери фильм с компанией
          </button>
        </div>
        <div className={styles.bottomSeparator}></div>
      </div>
    </div>
  );
};
