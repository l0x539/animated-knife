import { Canvas } from '@react-three/fiber';
// import Knife from './components/Knife';
import { Environment, OrbitControls } from '@react-three/drei';
import { LinearSRGBColorSpace } from 'three';
import { lazy } from 'react';
import { CONTROLS, ORBIT, TESTING } from './utils/constants.js';
import { Leva } from 'leva';
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
      <Environment preset='apartment' />
      {ORBIT ? <OrbitControls /> : <></>}
    </Canvas>
  );
}

export default App;
