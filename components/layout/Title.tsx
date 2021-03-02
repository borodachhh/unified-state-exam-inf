import React from "react";
import styles from '../../styles/Title.module.css';

interface Props {
  level_UNSTABLE?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title: React.FC<Props> = (props) => {
  return (
    <>
      <h1 className={styles.title}>{props.children}</h1>
    </>
  );
};
