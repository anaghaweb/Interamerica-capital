import * as React from "react";

const StarSVG = ({ props }) => (
  <svg style={{
    left: 1,
    top: 1,
    width: 30,
    height: 30,
    display: "block",
    position: "relative",
    overflow: "hidden",
    pointerEvents: "none",
    verticalAlign: 'center',
  }}
    {...props}
  >
    <g
      style={{
        pointerEvents: "none",
      }}
    >
      <g
        style={{
          pointerEvents: "none",
        }}
      />
      <g
        style={{
          pointerEvents: "none",
        }}
      >
        <g
          transform="translate(0.5,0.5)"
          style={{
            visibility: "visible",
            pointerEvents: "none",
          }}
        >
          <path
            d="M 3.76 25.96 C 3.01 25.96 2.4 25.07 2.4 23.96 L 2.4 17.93 C 3.53 17.93 4.44 16.58 4.44 14.92 C 4.44 13.26 3.53 11.91 2.4 11.91 L 2.4 5.88 C 2.4 4.77 3.01 3.88 3.76 3.88 L 28.24 3.88 C 28.99 3.88 29.6 4.77 29.6 5.88 L 29.6 11.91 C 28.47 11.91 27.56 13.26 27.56 14.92 C 27.56 16.58 28.47 17.93 29.6 17.93 L 29.6 23.96 C 29.6 25.07 28.99 25.96 28.24 25.96 C 26.72 25.88 4.85 26.12 4.85 26.12 Z M 16.05 10.62 L 15.24 13.84 L 12.93 13.84 L 14.8 15.76 L 14.01 19.06 L 16.05 17.05 L 18.09 19.06 L 17.33 15.76 L 19.18 13.84 L 16.87 13.84 Z"
            fill="#dae8fc"
            stroke="#6c8ebf"
            strokeWidth={2.72}
            strokeMiterlimit={10}
            style={{
              pointerEvents: "none",
            }}
          />
        </g>
      </g>
      <g
        style={{
          pointerEvents: "none",
        }}
      />
      <g
        style={{
          pointerEvents: "none",
        }}
      />
    </g>
  </svg>
);
export default StarSVG;
