// CarouselStyles.js
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const sweepIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const sweepOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 120px);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  background-image: url(${(props) => props.src});
  opacity: ${(props) => (props.direction === "next" ? 0 : 1)};
  animation: ${(props) => (props.direction === "next" ? fadeIn : fadeOut)} 1s ease-in-out,
             ${(props) => (props.direction === "next" ? sweepIn : sweepOut)} 1s ease-in-out;
  transition: opacity 1s ease-in-out;
`;

export const NavButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 1.5em;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }

  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
`;
