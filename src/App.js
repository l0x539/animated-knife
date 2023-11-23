import { Canvas } from '@react-three/fiber';
// import Knife from './components/Knife';
import { Environment, OrbitControls } from '@react-three/drei';
import { LinearSRGBColorSpace } from 'three';
import { lazy } from 'react';
import { CONTROLS, ORBIT, TESTING } from './utils/constants.js';
import { Leva } from 'leva';
import { EffectComposer, N8AO } from "@react-three/postprocessing"
import { useMediaQuery } from "react-responsive";
import './App.css';

const KnifeSection = lazy(() => import('./components/KnifeSection.jsx'));

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return (
    <Canvas
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        stencil: false,
        outputColorSpace: LinearSRGBColorSpace
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
      <directionalLight color={'white'} intensity={8} position={[-10, 5, 10]} />
      <KnifeSection scale={isMobile || isTablet ? 5 : 7.6} position={[0, -.3, 3]} />
      <Environment
        preset='city'
        blur={0.5}
      />
      {ORBIT ? <OrbitControls /> : <></>}
      <EffectComposer disableNormalPass >
        <N8AO aoRadius={50} distanceFalloff={0.2} intensity={3} screenSpaceRadius halfRes />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
