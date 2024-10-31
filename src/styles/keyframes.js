const { keyframes } = require("styled-components");

export const fadeIn = keyframes`
    0% {
        opacity:0;
        transform: translate(0,-30px);
    }
    100% {
        opacity:1;
        transform: translate(0,0);
    }
`;