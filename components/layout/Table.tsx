import React from 'react';
import styles from "../../styles/Table.module.css";

export const Table: React.FC = (props) => {
  return (
    <>
      <table className={styles.table}>
        {props.children}
      </table>
    </>
  )
}