import React from 'react';
import styles from "../styles/Watermark.module.css";

export const Watermark: React.FC = () => {
  return (
    <>
      <div className={styles.watermark}>
        Made by
        <svg
          className={styles.logo}
          width="40"
          height="35"
          viewBox="0 0 40 35"
          fill="#CCFF00"
          xmlns="http://www.w3.org/2000/svg">
          <g id="logo">
            <path id="X" d="M30 0L15 35H25L40 0H30Z" />
            <path id="A" d="M15 0L0 35H10L25 0H15Z" fill="#252525" />
            <g id="A_2" filter="url(#filter0_d)">
              <path d="M30 35L15 0H25L40 35H30Z" fill="#252525" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="12"
              y="-3"
              width="31"
              height="41"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <span>
          Ayyar<span className={styles["color-accent"]}> Khallilov</span>
        </span>
      </div>
    </>
  )
};

