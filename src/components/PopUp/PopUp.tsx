import { Movies } from "@/types/User";
import { FC } from "react";
import styles from "./PopUp.module.css";
import classNames from "classnames";
import { Button } from "@/pages/Lobby/components/Button/Button";

interface PopUpProps {
  film: Movies;
  isOpen: boolean;
  onContinue: () => void;
  onClose: () => void;
}
export const PopUp: FC<PopUpProps> = ({
  onClose,
  onContinue,
  isOpen,
  film,
}) => {
  return (
    <div className={classNames(styles.popup, { [styles.open]: isOpen })}>
      <div className={styles.popupContent}>
        <div className={styles.container}>
          <p>Всем понравился фильм: {film.name}</p>
          <img className={styles.image} src={film.poster.url} alt="" />
          <div className={styles.buttonContainer}>
            <Button
              appearance="dislike"
              className={styles.closeButton}
              onClick={onClose}
            >
              Выйти
            </Button>
            <Button
              appearance="like"
              className={styles.continueButton}
              onClick={onContinue}
            >
              Дальше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
