import { FC, useState } from "react";
import styles from "./Option.module.css";
import classNames from "classnames";
interface OptionProps {
  string: string;
  onSelect: (value: string) => void;
}
export const Option: FC<OptionProps> = ({ string, onSelect }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
    onSelect(string);
  };
  return (
    <div
      className={classNames(styles.option, { [styles.selected]: selected })}
      onClick={handleClick}
    >
      {string}
    </div>
  );
};
