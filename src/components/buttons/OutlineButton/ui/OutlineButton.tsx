import {ButtonComponentProps} from "../../../../types/buttonType.ts";
import styles from "./OutlineButton.module.scss";


export const OutlineButton = (props: ButtonComponentProps) => {
  return (
    <button className={`${styles.outline_button} ${props.className}`}>
      {props.children}
    </button>
  );
};

