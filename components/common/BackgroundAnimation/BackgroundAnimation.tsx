// Em: components/common/BackgroundAnimation/BackgroundAnimation.tsx

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const BackgroundAnimation = () => {
const particlesInit = useCallback(async (engine) => {
await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
// console.log(container);
}, []);

return (
<Particles
id="tsparticles"
init={particlesInit}
loaded={particlesLoaded}
options={{
fullScreen: { enable: false },
particles: {
number: {
value: 80,
density: {
enable: true,
area: 800,
},
},
color: {
value: ['#374151', '#4b5563'], // Tons de cinza escuro
},
shape: {
type: 'square',
},
opacity: {
value: 0.3,
random: true,
anim: {
enable: true,
speed: 0.5,
opacity_min: 0.05,
sync: false,
},
},
size: {
value: 4,
random: true,
},
move: {
enable: true,
speed: 0.5,
direction: 'none',
random: true,
straight: false,
out_mode: 'out',
attract: {
enable: false,
rotateX: 600,
rotateY: 1200,
},
},
},
interactivity: {
events: {
onHover: {
enable: false,
mode: 'grab',
},
onClick: {
enable: false,
mode: 'push',
},
resize: true,
},
modes: {
grab: {
distance: 140,
line_linked: {
opacity: 1,
},
},
push: {
particles_nb: 4,
},
},
},
retina_detect: true,
}}
/>
);
};

export default BackgroundAnimation;