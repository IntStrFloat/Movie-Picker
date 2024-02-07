import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import classNames from "classnames";

import styles from "./Button.module.css";
interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  appearance: "like" | "dislike";
}
export const Button: FC<ButtonProps> = ({
  children,
  className,
  appearance,
  ...props
}) => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.like]: appearance === "like",
        [styles.dislike]: appearance === "dislike",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
