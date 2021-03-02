import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import styles from "../styles/Math.module.css";

interface Props {
  expression: string;
}

const Math: React.FC<Props> = (props) => {
  const el = useRef(null);

  useEffect(() => {
    katex.render(props.expression, el.current);
  }, [props.expression, el]);

  return (
    <>
      <div className={styles.math} ref={el}></div>
    </>
  )
};

export default Math;