/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 -k --transform --keepmeshes public/models/knife-baked-v2.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/knife-baked-v2-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty001" position={[0, 0.051, 0]} rotation={[3.117, -0.113, 2.927]} scale={0.126}>
          <mesh name="node2" geometry={nodes.node2.geometry} material={materials['blade mat']} position={[-0.004, 0.017, 0]} rotation={[-1.571, 1.536, -3.142]} scale={10.712}>
            <mesh name="D2_logo" geometry={nodes.D2_logo.geometry} material={materials['D2 logo_baked']} position={[-0.008, -0.005, -0.007]} rotation={[0.002, 0.019, -3.139]} scale={0.003} />
            <mesh name="node25" geometry={nodes.node25.geometry} material={materials['blade mat']} />
            <mesh name="node3" geometry={nodes.node3.geometry} material={materials['blade mat']} />
            <mesh name="Wesn" geometry={nodes.Wesn.geometry} material={materials.Wesn_baked} position={[0.001, -0.005, 0]} rotation={[-1.569, -0.003, 0.006]} scale={[0.828, 0.792, 0.828]} />
          </mesh>
          <mesh name="node0" geometry={nodes.node0.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node10" geometry={nodes.node10.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node11" geometry={nodes.node11.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node12" geometry={nodes.node12.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node13" geometry={nodes.node13.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node14" geometry={nodes.node14.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node15" geometry={nodes.node15.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node16" geometry={nodes.node16.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node17" geometry={nodes.node17.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node18" geometry={nodes.node18.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node19" geometry={nodes.node19.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node20" geometry={nodes.node20.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node21" geometry={nodes.node21.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node22" geometry={nodes.node22.geometry} material={materials['blade mat']} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node23" geometry={nodes.node23.geometry} material={materials['blade mat']} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node24" geometry={nodes.node24.geometry} material={materials['blade mat']} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node26" geometry={nodes.node26.geometry} material={materials['handle mat']} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node27" geometry={nodes.node27.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node28" geometry={nodes.node28.geometry} material={materials.node28_baked} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node29" geometry={nodes.node29.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node30" geometry={nodes.node30.geometry} material={materials.node30_baked} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node31" geometry={nodes.node31.geometry} material={materials['blade mat']} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node32" geometry={nodes.node32.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node33" geometry={nodes.node33.geometry} material={materials['blade mat']} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node34" geometry={nodes.node34.geometry} material={materials['blade mat']} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node4" geometry={nodes.node4.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node5" geometry={nodes.node5.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node6" geometry={nodes.node6.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node7" geometry={nodes.node7.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node8" geometry={nodes.node8.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node9" geometry={nodes.node9.geometry} material={materials.Part__Feature} position={[-0.302, -0.405, 0]} scale={7.944} />
          <mesh name="node1" geometry={nodes.node1.geometry} material={materials['handle mat']} position={[-0.004, 0.017, 0]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={10.712} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/knife-baked-v2-transformed.glb')
