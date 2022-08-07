/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ferradura-v1-v2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Horse_Shoe_lambert2_0.geometry} material={materials.lambert2} />
    </group>
  )
}

useGLTF.preload('/ferradura-v1-v2-transformed.glb')
