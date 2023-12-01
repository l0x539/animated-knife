import { Canvas } from '@react-three/fiber';
// import Knife from './components/Knife';
import { Environment, OrbitControls, useDetectGPU, useProgress } from '@react-three/drei';
import { lazy, useEffect } from 'react';
import { CONTROLS, ORBIT, TESTING } from './utils/constants.js';
import { Leva } from 'leva';
import { EffectComposer, N8AO } from "@react-three/postprocessing"
import { useMediaQuery } from "react-responsive";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from 'gsap/TextPlugin';
import {
  TRIGGER
} from './utils/constants.js';


import './App.css';


gsap.registerPlugin(TextPlugin);


const KnifeSection = lazy(() => import('./components/KnifeSection.jsx'));

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Target only the text in front of the knife
    const frontText = document.querySelector('.text-in-front-of-knife');
    frontText.innerHTML = frontText.textContent.split(' ').map(word => `<div class="word-wrapper"><span style="transform: translateY(100%);">${word}</span></div>`).join(' ');

    // Animate each word in the text in front of the knife
    gsap.to('.text-in-front-of-knife .word-wrapper span', {
      y: 0,
      duration: 0.2,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: TRIGGER,
        start: "top+=1200 top",
        toggleActions: "play none none reverse",
      }
    });

  }, []);

  const {
    progress: loadingProgress
  } = useProgress();
  const GPUTier = useDetectGPU();

  return (
    <>

      {loadingProgress < 100 && <div
        className={`h-full w-full flex items-center justify-center ${isTablet ? 'gap-60 text-xl' : isMobile ? 'gap-28 text-sm' : 'gap-96 text-lg'} ${loadingProgress >= 100 ? 'animate-none bg-transparent' : 'animate-pulse bg-white'}`}>
        <div className={`${loadingProgress >= 100 ? 'hidden' : 'visible'}`}>
          <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>}


      {/* Text Behind the Knife */}
      <div className="text-behind-knife">
        Full Size Function
      </div>

      <Canvas
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
          //outputColorSpace: LinearSRGBColorSpace
        }}
        className={`bg-transparent ${TESTING ? 'h-96' : ''}`}
        camera={{
          fov: 45,
          near: 1,
          far: 500,
          filmGauge: 100,
        }}
      >
        <Leva collapsed={false} hidden={!CONTROLS} />
        <directionalLight color={'white'} intensity={15} position={[-10, 5, 10]} />
        <KnifeSection scale={(isMobile || isTablet) ? 5 : 7.6} position={[0, -.3, 3]} />
        <Environment
          preset='city'
          blur={0.5}
        />
        {ORBIT ? <OrbitControls /> : <></>}
        {navigator.userAgent.indexOf('Mac OS X') !== -1 || GPUTier.tier < 3 ? <></> : <EffectComposer disableNormalPass >
          <N8AO aoRadius={50} distanceFalloff={0.2} intensity={3} screenSpaceRadius halfRes />
        </EffectComposer>}
      </Canvas>

      {/* Text In Front of the Knife */}
      <div className="text-in-front-of-knife">
        In the size of a house key
      </div>

    </>
  );
}

export default App;
