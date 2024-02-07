import classnames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import topSepor from "@assets/topSepor.svg";
import secondSepor from "@assets/secondSepor.svg";

import styles from "./JoinRoom.module.css";
import { joinRoom } from "@/api/requests/joinRoom";

export const JoinRoom = () => {
  const [code, setCode] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  const userName = useParams().userName as string;

  const navigate = useNavigate();
  const handleJoinRoom = async () => {
    setActive(!active);
    setTimeout(async () => {
      try {
        await joinRoom({ userName, roomId: code });
      } catch (error) {
        alert("Неправильный код");
        navigate("/");
        return;
      }
      navigate(`/lobby/${code}`, { replace: true });
    }, 200);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
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
          <button className={styles.newGameP} style={{ border: "none" }}>
            <Link to={"/"} className={styles.link}>
              <p>НАЗАД</p>
            </Link>
          </button>
          <button onClick={handleJoinRoom} className={styles.newGameP}>
            ВОЙТИ
          </button>
        </div>
        <div className={styles.middleSeparator}></div>
        <div className={styles.inviteFriends}>
          <div className={styles.inviteButton}>ВВеди код комнаты:</div>
          <input
            value={code}
            onChange={onChange}
            className={styles.chooseButton}
            placeholder="Код"
          />
        </div>
        <div className={styles.bottomSeparator}></div>
      </div>
    </div>
  );
};
