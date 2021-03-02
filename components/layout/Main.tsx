import React from "react";
import styles from "../../styles/Main.module.css";

interface Props {
  horizontalAlign?: "left" | "center" | "right";
}

export const Main: React.FC<Props> = (props) => {
  return (
    <>
      <main
        className={styles.main}
        style={{
          alignItems: props.horizontalAlign || "flex-start",
        }}>
        {props.children}
      </main>
    </>
  );
};

