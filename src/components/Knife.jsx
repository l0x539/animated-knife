/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { CONTROLS, END, END_TRIGGER, START, TESTING, TRIGGER } from "../utils/constants";
import { CustomEase } from "gsap/CustomEase";

if (typeof document !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CustomEase);
}
const Knife = (props) => {
  const knife = useRef();
  const { nodes, materials, animations } = useGLTF("/models/knife.glb");
  const { actions } = useAnimations(animations, knife);

  const {settings} = useMemo(() => {
    return {
      settings: {
        progress: 0
      },
      translateY: 1 // TO -.3
    }
  }, [])

  const {
    progress,
    position,
    scale
  } = useControls({
    progress: {
      value: 0,
      max: 1,
      min: 0,
      step: 0.01
    },
    position: {
      value: {
        x: 0,
        y: 0,
        z: 0
      },
      step: 0.1
    },
    scale: 10
  });

  const [duration, setDuration] = useState(0);
  const [mixerAction1, setMixer1] = useState(null);
  const [mixerAction2, setMixer2] = useState(null);
  // const customEase = useMemo(() => CustomEase.create("custom", "M0,0,C0.4,0.018,0.398,0.3,0.507,0.512,0.6,0.693,0.6,0.984,1,1"), []);

  useEffect(() => {
    gsap.to(settings,{
        scrollTrigger: {
          trigger: TRIGGER,
          endTrigger: END_TRIGGER,
          start: START,
          end: END,
          // refreshPriority: -1,
          markers: TESTING,
          onUpdate: t => {
            gsap.to(settings, {
              translateY: t.progress > 0 ? -.3 : 1,
              ease: 'power1.out'
            })
            gsap.to(settings, { // ADD gsap animation options here.
              progress: t.progress,
              ease: 'power1.out',
              // ease: customEase
            })
          }
        }
      });

    // tl.current.to({}, {
    //   ease: customEase,
    //   scrollTrigger: {
    //     trigger: TRIGGER,
    //     endTrigger: END_TRIGGER,
    //     start: START,
    //     end: END,
    //     // refreshPriority: -1,
    //     markers: TESTING,
    //     scrub: true,
    //     onUpdate: t => {
    //       tl.current.progress(t.progress)
    //     }
    //   }
    // });
  }, [settings]);

  useEffect(() => {
    setDuration(actions['node2Action'].getClip().duration-.100000000000001);
    setMixer1(actions['Empty.001Action'].getMixer());
    setMixer2(actions['node2Action'].getMixer());
  }, [actions]);

  useFrame(() => {
    if(mixerAction1 && mixerAction2 && duration) {
      const d = (CONTROLS ? progress : settings.progress)*duration
      mixerAction1.setTime(d);
      mixerAction2.setTime(d);
      actions['node2Action'].getEffectiveWeight();
      actions['Empty.001Action'].getEffectiveWeight();
      actions['Empty.001Action'].getMixer().update(.1)
      actions['node2Action'].play()
      actions['Empty.001Action'].play()

      knife.current.position.setY(settings.translateY)
    }
  });

  return (
    <group ref={knife} visible {...({...props, ...(CONTROLS ? {position: [position.x, position.y, position.z], scale} : {})})} dispose={null}>
      <group name="Scene">
        <group
          name="Empty001"
          position={[0, 0.051, 0]}
          rotation={[3.117, -0.113, 2.927]}
          scale={0.126}
        >
          <group
            name="Armature"
            position={[-0.043, -0.226, -0.074]}
            rotation={[3.126, 0.118, 3.139]}
            scale={0.101}
          >
            <skinnedMesh
              name="node1"
              geometry={nodes.node1.geometry}
              material={materials["handle mat"]}
              skeleton={nodes.node1.skeleton}
            />
            <primitive object={nodes.Bone} />
            <primitive object={nodes.neutral_bone} />
          </group>
          <mesh
            name="node0"
            castShadow
            receiveShadow
            geometry={nodes.node0.geometry}
            material={materials.Part__Feature}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node10"
            castShadow
            receiveShadow
            geometry={nodes.node10.geometry}
            material={materials.Part__Feature013}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node11"
            castShadow
            receiveShadow
            geometry={nodes.node11.geometry}
            material={materials.Part__Feature014}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node12"
            castShadow
            receiveShadow
            geometry={nodes.node12.geometry}
            material={materials.Part__Feature015}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node13"
            castShadow
            receiveShadow
            geometry={nodes.node13.geometry}
            material={materials.Part__Feature016}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node14"
            castShadow
            receiveShadow
            geometry={nodes.node14.geometry}
            material={materials.Part__Feature017}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node15"
            castShadow
            receiveShadow
            geometry={nodes.node15.geometry}
            material={materials.Part__Feature018}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node16"
            castShadow
            receiveShadow
            geometry={nodes.node16.geometry}
            material={materials.Part__Feature019}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node17"
            castShadow
            receiveShadow
            geometry={nodes.node17.geometry}
            material={materials.Part__Feature020}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node18"
            castShadow
            receiveShadow
            geometry={nodes.node18.geometry}
            material={materials.Part__Feature021}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node19"
            castShadow
            receiveShadow
            geometry={nodes.node19.geometry}
            material={materials.Part__Feature022}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node2"
            castShadow
            receiveShadow
            geometry={nodes.node2.geometry}
            material={materials["blade mat"]}
            position={[-0.004, 0.017, 0]}
            rotation={[-1.571, 1.536, -3.142]}
            scale={10.712}
          >
            <mesh
              name="D2_logo"
              castShadow
              receiveShadow
              geometry={nodes.D2_logo.geometry}
              material={materials["wesn logo"]}
              position={[-0.008, -0.005, -0.007]}
              rotation={[0.002, 0.019, -3.139]}
              scale={0.003}
            />
            <mesh
              name="node25"
              castShadow
              receiveShadow
              geometry={nodes.node25.geometry}
              material={materials["blade mat"]}
            />
            <mesh
              name="node3"
              castShadow
              receiveShadow
              geometry={nodes.node3.geometry}
              material={materials["blade mat"]}
            />
            <mesh
              name="Wesn"
              castShadow
              receiveShadow
              geometry={nodes.Wesn.geometry}
              material={materials["wesn logo"]}
              position={[0.001, -0.005, 0]}
              rotation={[-1.569, -0.003, 0.006]}
              scale={[0.828, 0.792, 0.828]}
            />
          </mesh>
          <mesh
            name="node20"
            castShadow
            receiveShadow
            geometry={nodes.node20.geometry}
            material={materials.Part__Feature023}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node21"
            castShadow
            receiveShadow
            geometry={nodes.node21.geometry}
            material={materials.Part__Feature024}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node22"
            castShadow
            receiveShadow
            geometry={nodes.node22.geometry}
            material={materials["blade mat"]}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node23"
            castShadow
            receiveShadow
            geometry={nodes.node23.geometry}
            material={materials["blade mat"]}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node24"
            castShadow
            receiveShadow
            geometry={nodes.node24.geometry}
            material={materials["blade mat"]}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node26"
            castShadow
            receiveShadow
            geometry={nodes.node26.geometry}
            material={materials["handle mat"]}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node27"
            castShadow
            receiveShadow
            geometry={nodes.node27.geometry}
            material={materials.Part__Feature030}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node28"
            castShadow
            receiveShadow
            geometry={nodes.node28.geometry}
            material={materials["blade mat"]}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node29"
            castShadow
            receiveShadow
            geometry={nodes.node29.geometry}
            material={materials.Part__Feature032}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node30"
            castShadow
            receiveShadow
            geometry={nodes.node30.geometry}
            material={materials["Brushed aluminium"]}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node31"
            castShadow
            receiveShadow
            geometry={nodes.node31.geometry}
            material={materials["blade mat"]}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node32"
            castShadow
            receiveShadow
            geometry={nodes.node32.geometry}
            material={materials.Part__Feature035}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node33"
            castShadow
            receiveShadow
            geometry={nodes.node33.geometry}
            material={materials["blade mat"]}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node34"
            castShadow
            receiveShadow
            geometry={nodes.node34.geometry}
            material={materials["blade mat"]}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node4"
            castShadow
            receiveShadow
            geometry={nodes.node4.geometry}
            material={materials.Part__Feature007}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node5"
            castShadow
            receiveShadow
            geometry={nodes.node5.geometry}
            material={materials.Part__Feature008}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node6"
            castShadow
            receiveShadow
            geometry={nodes.node6.geometry}
            material={materials.Part__Feature009}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node7"
            castShadow
            receiveShadow
            geometry={nodes.node7.geometry}
            material={materials.Part__Feature010}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node8"
            castShadow
            receiveShadow
            geometry={nodes.node8.geometry}
            material={materials.Part__Feature011}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
          <mesh
            name="node9"
            castShadow
            receiveShadow
            geometry={nodes.node9.geometry}
            material={materials.Part__Feature012}
            position={[-0.004, 0.017, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={10.712}
          />
        </group>
      </group>
    </group>
  );
}

export default Knife;

useGLTF.preload("/models/knife.glb");
