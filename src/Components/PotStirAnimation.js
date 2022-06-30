import './PotStirAnimation.css'
import React from "react";

function PotStirAnimation() {
  return (
    <>
    <div className="animation">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="-180 0 1440 1024"
    >
      <g id="pot">
        <path fill="#fff" d="M0 0H1440V1024H0z"></path>
        <g>
          <rect
            width="68"
            height="63"
            x="625"
            y="405"
            fill="#D9D9D9"
            rx="10"
          ></rect>
          <rect
            width="68"
            height="63"
            x="415"
            y="405"
            fill="#D9D9D9"
            rx="10"
          ></rect>
          <rect
            width="27"
            height="32"
            x="655"
            y="421"
            fill="#fff"
            rx="5"
          ></rect>
          <rect
            width="27"
            height="32"
            x="427"
            y="421"
            fill="#fff"
            rx="5"
          ></rect>
          <path
            fill="#717572"
            d="M440 427c0-41.421 33.579-75 75-75h79c41.421 0 75 33.579 75 75v195c0 6.627-5.373 12-12 12H452c-6.627 0-12-5.373-12-12V427z"
          ></path>
          <ellipse
            cx="638.5"
            cy="544.5"
            fill="#C7C5C1"
            rx="4.5"
            ry="62.5"
          ></ellipse>
          <ellipse
            cx="554.5"
            cy="398.5"
            fill="#000"
            rx="92.5"
            ry="37.5"
          ></ellipse>
        </g>
        <g id="soup">
          <ellipse
            cx="554"
            cy="407.5"
            fill="#E3AC5F"
            rx="90"
            ry="28.5"
          ></ellipse>
          <ellipse
            cx="554.5"
            cy="412"
            fill="#F5D09A"
            rx="87.5"
            ry="24"
          ></ellipse>
          <g filter="url(#filter0_f_0_3)">
            <ellipse
              cx="587.5"
              cy="409"
              fill="#F5B04C"
              rx="37.5"
              ry="11"
            ></ellipse>
          </g>
          <ellipse
            cx="510.5"
            cy="408"
            fill="#5ABF56"
            rx="15.5"
            ry="4"
          ></ellipse>
          <ellipse cx="589" cy="394" fill="#5ABF56" rx="18" ry="4"></ellipse>
          <ellipse
            cx="562.5"
            cy="423.5"
            fill="#5ABF56"
            rx="17.5"
            ry="2.5"
          ></ellipse>
          <ellipse cx="545" cy="394" fill="#D6542D" rx="13" ry="4"></ellipse>
          <ellipse
            cx="594.5"
            cy="421"
            fill="#D6542D"
            rx="12.5"
            ry="5"
          ></ellipse>
          <ellipse
            cx="554.5"
            cy="411.5"
            fill="#DB7C09"
            rx="16.5"
            ry="5.5"
          ></ellipse>
          <ellipse
            cx="617.5"
            cy="406.5"
            fill="#DB7C09"
            rx="16.5"
            ry="5.5"
          ></ellipse>
          <ellipse
            cx="513.5"
            cy="423.5"
            fill="#E3E171"
            rx="12.5"
            ry="2.5"
          ></ellipse>
        </g>
        <g id="spoon">
          <path
            fill="#E6B873"
            d="M583.326 246c0-5.523 4.477-10 10-10h6c5.522 0 10 4.477 10 10v173h-26V246z"
          ></path>
          <path
            stroke="#F5D09A"
            strokeLinecap="round"
            strokeWidth="3"
            d="M576.429 420.007c1.701-.02 3.817.118 5.358-.792.894-.529 2.004-1.389 3.116-1.258 1.293.152 2.134 1.1 3.28 1.558 1.39.556 3.39.593 4.716-.136 2.304-1.267 3.874-2.706 6.766-2.187 1.229.22 2.26.892 3.458 1.202 1.505.39 3.436-.02 4.743-.792 1.133-.67 2.313-1.1 3.636-.793 1.116.259 2.063 1.224 3.116 1.421.247.047 2.174-.029 2.174-.273 0-.321-.64.053-.957.096-.752.102-1.496.213-2.256.232-.816.021-1.628-.039-2.433.137-.671.147-1.103.613-1.708.806-.879.281-1.838-.19-2.747.041-.632.161-1.206.402-1.859.492-1.806.249-3.676.448-5.468 0-.928-.232-3.091-1.037-3.991-.765-.574.173-.986.715-1.503.998-.921.502-2.158.076-3.144.027-1.847-.092-3.714-.014-5.563-.014-1.652 0-3.537-.253-5.153.137-1.08.261-1.976.769-2.83 1.462-.705.574-3.01 2.034-2.228 1.572 2.11-1.244 4.162-2.836 6.643-3.116 1.498-.169 2.874.063 4.237.683 1.484.675-3.245-.875-4.852-.601-.723.123-1.596.196-2.282.465-.326.127-1.131.748-.369-.014.599-.599 1.194-.918 2.036-1.025.558-.071 2.313-.076.492.068-1.782.142-3.267.308-4.92.984-2.466 1.009.922-.804 1.776-1.107.473-.167 1.872-.307.342-.109-.903.117-1.714.264-2.556.601-1.959.784 1.536-.71 2.201-.71 1.503 0-3.063.421-4.347 1.202-1.097.668.338-.171.643-.328 1.037-.533-1.67.472-1.996.574"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_0_3"
          width="83"
          height="30"
          x="546"
          y="394"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_0_3"
            stdDeviation="2"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
    </div>
    </>
  );
}

export default PotStirAnimation;
