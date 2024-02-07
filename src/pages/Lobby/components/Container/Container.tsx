import classNames from "classnames";

import styles from "./Container.module.css";
import { ComponentProps, FC } from "react";
import Crown from "@/assets/Crown.svg";

interface ContainerProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  appearance: "small" | "big";
  isAdmin?: boolean;
}

export const Container: FC<ContainerProps> = ({
  children,
  appearance,
  isAdmin,
  className,
  ...props
}) => (
  <div
    className={classNames(styles.container, styles[appearance], className)}
    {...props}
  >
    {children}
    {isAdmin && <img src={Crown} className={styles.crown} alt="" />}
  </div>
);
