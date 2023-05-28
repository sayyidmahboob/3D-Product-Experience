// import { proxy } from 'valtio';

// const state = proxy({
//   intro: true,
//   color: '#EFBD48',
//   isLogoTexture: true,
//   isFullTexture: false,
//   logoDecal: './threejs.png',
//   fullDecal: './threejs.png',
// });

// export default state;

import { proxy } from "valtio";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const state = proxy({
  intro: true,
  color: generateRandomColor(), // Generate initial random color
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
