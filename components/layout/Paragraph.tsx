import React from 'react';
import styles from "../../styles/Paragraph.module.css";

export const Paragraph: React.FC = (props) => {
  return (
    <>
      <p className={styles.paragraph}>
        {props.children}
      </p>
    </>
  )
};