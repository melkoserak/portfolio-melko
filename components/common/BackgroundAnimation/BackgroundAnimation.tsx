// Em: components/common/BackgroundAnimation/BackgroundAnimation.tsx

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const BackgroundAnimation = () => {
const particlesInit = useCallback(async (engine: Engine) => {
await loadSlim(engine);
}, []);

return (
<Particles
id="tsparticles"
init={particlesInit}
options={{
fullScreen: { enable: false },
particles: {
number: {
value: 60, // Reduzindo um pouco o número para não sobrecarregar
density: {
enable: true,
area: 700, // Aumentando um pouco a densidade
},
},
color: {
value: ['#64748b', '#94a3b8'], // Tons de cinza um pouco mais claros
},
shape: {
type: 'circle', // Mudando para círculos para um visual mais fluido
},
opacity: {
value: 0.5, // Aumentando a opacidade
random: true,
anim: {
enable: true,
speed: 0.3,
opacity_min: 0.1,
sync: false,
},
},
size: {
value: 5, // Aumentando um pouco o tamanho
random: true,
},
move: {
enable: true,
speed: 0.7, // Aumentando a velocidade
direction: 'none',
random: true,
straight: false,
out_mode: 'bounce', // As partículas vão quicar nas bordas
attract: {
enable: true, // Adicionando um sutil efeito de atração
rotateX: 3000,
rotateY: 1200,
},
},
},
interactivity: {
events: {
onHover: {
enable: false,
},
onClick: {
enable: false,
},
resize: true,
},
},
retina_detect: true,
}}
/>
);
};

export default BackgroundAnimation;