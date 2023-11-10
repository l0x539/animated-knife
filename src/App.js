import { Canvas } from '@react-three/fiber';
// import Knife from './components/Knife';
import { Environment, OrbitControls } from '@react-three/drei';
import { LinearSRGBColorSpace } from 'three';
import { lazy } from 'react';
import { CONTROLS, ORBIT, TESTING } from './utils/constants.js';
import { Leva } from 'leva';
import { EffectComposer, N8AO } from "@react-three/postprocessing"

const Knife = lazy(() => import('./components/Knife.jsx'));

function App() {
  return (
    <Canvas
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        stencil: false,
        outputColorSpace: LinearSRGBColorSpace
      }}
      className={`bg-transparent ${TESTING? 'h-96' : ''}`}
      camera={{
        fov: 45,
        near: 1,
        far: 500,
        filmGauge: 100,
      }}
    >
      <Leva collapsed={false} hidden={!CONTROLS} />
      <hemisphereLight />
      <Knife scale={7.6} position={[0, -.3, 3]} />
      <Environment preset='forest' blur={.5} />
      {ORBIT ? <OrbitControls /> : <></>}
      <EffectComposer disableNormalPass >
        <N8AO aoRadius={50} distanceFalloff={0.2} intensity={6} screenSpaceRadius halfRes />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
