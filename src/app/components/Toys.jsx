import React, { useRef } from "react";
import {
  Environment,
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import * as THREE from "three";

export default function Toys(props) {
  const { nodes, materials } = useGLTF("/toy.glb");
  const orbitControlsRef = useRef(null);
  const texture = useTexture("/bg.jpg");
  if (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
  }
  useFrame((state) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-MathUtils.degToRad(x * 45));
      orbitControlsRef.current.setPolarAngle(
        MathUtils.degToRad((y + 1) * 60) + 0.5
      );
      orbitControlsRef.current.update();
    }
  });
  return (
    <>
      {texture && (
        <Environment background={true} map={texture} intensity={0.03} />
      )}
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={MathUtils.degToRad(80)} // bottom
        maxPolarAngle={MathUtils.degToRad(120)} // top
        enableZoom={false}
      />
      <ambientLight intensity={0.3} />
      <directionalLight args={[0, 3, 3]} intensity={1} color={"white"} />
      <group
        {...props}
        style={{ zIndex: 5 }}
        dispose={null}
        position={[0, -0.5, 0]}
        scale={0.03}
      >
        <group rotation={[0.3, 0.2, 0]}>
          <group rotation={[0, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["23-material"].geometry}
              material={materials.material_5}
              position={[-4.276, 46.614, 8.19]}
              rotation={[-0.102, -0.065, 0.566]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["23-material_1"].geometry}
              material={materials.material_5}
              position={[-6.412, 46.243, -4]}
              rotation={[-0.328, -0.203, 0.535]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["23-material_2"].geometry}
              material={materials.material_5}
              position={[-18.496, 34.443, 6.197]}
              rotation={[0.385, 0.082, 0.2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["23-material_3"].geometry}
              material={materials.material_5}
              position={[-17.989, 41.448, -4]}
              rotation={[0.128, 0.028, 0.215]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["233814d130-material"].geometry}
              material={materials["233814d130"]}
              position={[-8.76, 35.54, -4]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["23-material_4"].geometry}
              material={materials.material_5}
              position={[-3.228, 32.636, -4]}
              rotation={[-Math.PI / 2, -Math.PI / 8, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["23-material_5"].geometry}
              material={materials.material_5}
              position={[-8.76, 35.54, -4]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["23-material_6"].geometry}
              material={materials.material_5}
              position={[-10.619, 29.575, -4]}
              rotation={[-Math.PI / 2, -Math.PI / 8, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material"].geometry}
              material={materials.material}
              position={[-12.659, 44.953, 14.016]}
              rotation={[-0.891, -0.312, 0.243]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material"].geometry}
              material={materials.material_1}
              position={[-7.956, 33.6, 12]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_1"].geometry}
              material={materials.material}
              position={[-5.508, 48.542, 7.912]}
              rotation={[0.409, -0.701, 0.774]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["23-material_7"].geometry}
              material={materials.material_5}
              position={[-17.868, 57.528, -4]}
              rotation={[0.365, -0.712, 0.53]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["243626d154-material"].geometry}
              material={materials["243626d154"]}
              position={[-14.194, 48.659, -4]}
              rotation={[0.365, -0.712, 0.53]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["23-material_8"].geometry}
              material={materials.material_5}
              position={[-13.658, 47.366, -4]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_1"].geometry}
              material={materials.material_1}
              position={[-23.755, 19.479, -4]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_2"].geometry}
              material={materials.material_1}
              position={[13.2, 34.786, -4]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["44-material"].geometry}
              material={materials.material_4}
              position={[-53.829, 6.373, 7.1]}
              rotation={[Math.PI / 2, -1.178, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["44-material_1"].geometry}
              material={materials.material_4}
              position={[43.733, 46.784, 7.1]}
              rotation={[-Math.PI / 2, 1.178, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["41-material"].geometry}
              material={materials.material_3}
              position={[43.733, 46.784, -18.5]}
              rotation={[-Math.PI / 2, 1.178, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["41-material_1"].geometry}
              material={materials.material_3}
              position={[-53.829, 6.373, -21.7]}
              rotation={[Math.PI / 2, -1.178, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_2"].geometry}
              material={materials.material}
              position={[-53.829, 6.373, -18.5]}
              rotation={[Math.PI / 2, -1.178, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_3"].geometry}
              material={materials.material}
              position={[43.733, 46.784, -15.3]}
              rotation={[-Math.PI / 2, 1.178, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_4"].geometry}
              material={materials.material}
              position={[-46.438, 9.434, 0]}
              rotation={[Math.PI, 0, 1.178]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_5"].geometry}
              material={materials.material}
              position={[36.342, 43.723, 0]}
              rotation={[-Math.PI, 0, -1.964]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["41-material_2"].geometry}
              material={materials.material_3}
              position={[-6.502, 30.089, 54.4]}
              rotation={[Math.PI / 2, Math.PI / 8, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_3"].geometry}
              material={materials.material_1}
              position={[-6.502, 30.089, 35.2]}
              rotation={[Math.PI / 2, Math.PI / 8, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_6"].geometry}
              material={materials.material}
              position={[-6.502, 30.089, 25.6]}
              rotation={[Math.PI / 2, Math.PI / 8, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_4"].geometry}
              material={materials.material_1}
              position={[-6.502, 30.089, 16]}
              rotation={[Math.PI / 2, Math.PI / 8, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_5"].geometry}
              material={materials.material_1}
              position={[-6.502, 30.089, 16]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["41-material_3"].geometry}
              material={materials.material_3}
              position={[-8.569, 35.078, -48]}
              rotation={[Math.PI / 2, Math.PI / 8, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_7"].geometry}
              material={materials.material}
              position={[-8.569, 35.078, -38.4]}
              rotation={[Math.PI / 2, Math.PI / 8, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_6"].geometry}
              material={materials.material_1}
              position={[-4.283, 24.731, -4]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_7"].geometry}
              material={materials.material_1}
              position={[-4.283, 24.731, 12]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_8"].geometry}
              material={materials.material_1}
              position={[-19.043, 29.008, -4]}
              rotation={[Math.PI / 2, -1.178, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_9"].geometry}
              material={materials.material_1}
              position={[3.13, 38.192, -4]}
              rotation={[-Math.PI / 2, 1.178, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["41-material_4"].geometry}
              material={materials.material_3}
              position={[6.804, 29.323, 16]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["41-material_5"].geometry}
              material={materials.material_3}
              position={[-15.369, 20.139, 16]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_8"].geometry}
              material={materials.material}
              position={[-14.566, 18.198, -15.8]}
              rotation={[-Math.PI, 0, 2.749]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_9"].geometry}
              material={materials.material}
              position={[7.607, 27.383, -15.8]}
              rotation={[-Math.PI, 0, 2.749]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["48-material"].geometry}
              material={materials.material_2}
              position={[-17.512, 25.312, -1.6]}
              rotation={[Math.PI / 2, Math.PI / 8, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["48-material_1"].geometry}
              material={materials.material_2}
              position={[4.661, 34.497, -1.6]}
              rotation={[Math.PI / 2, Math.PI / 8, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_10"].geometry}
              material={materials.material_1}
              position={[6.804, 29.323, -4]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_11"].geometry}
              material={materials.material_1}
              position={[-15.369, 20.139, -4]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_12"].geometry}
              material={materials.material_1}
              position={[14.195, 32.384, 0]}
              rotation={[-Math.PI / 2, 1.178, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_13"].geometry}
              material={materials.material_1}
              position={[-22.76, 17.077, 0]}
              rotation={[Math.PI / 2, -1.178, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_14"].geometry}
              material={materials.material_1}
              position={[-20.311, 11.164, 0]}
              rotation={[Math.PI / 2, -1.178, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_15"].geometry}
              material={materials.material_1}
              position={[16.644, 26.472, 0]}
              rotation={[-Math.PI / 2, 1.178, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_16"].geometry}
              material={materials.material_1}
              position={[-3.058, 21.774, 0]}
              rotation={[-Math.PI, 0, 2.749]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_17"].geometry}
              material={materials.material_1}
              position={[-1.834, 18.818, 12]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_18"].geometry}
              material={materials.material_1}
              position={[-1.834, 18.818, -12]}
              rotation={[-Math.PI, 0, 2.749]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_19"].geometry}
              material={materials.material_1}
              position={[10.478, 20.454, 0]}
              rotation={[-Math.PI / 2, 1.178, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_20"].geometry}
              material={materials.material_1}
              position={[-11.696, 11.269, 0]}
              rotation={[Math.PI / 2, -1.178, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["2-material_21"].geometry}
              material={materials.material_1}
              position={[-1.834, 18.818, 0]}
              rotation={[Math.PI / 2, -1.178, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_10"].geometry}
              material={materials.material}
              position={[6.782, 18.923, 0]}
              rotation={[0, 0, Math.PI / 8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["26-material_11"].geometry}
              material={materials.material}
              position={[-8, 12.8, 0]}
              rotation={[0, 0, Math.PI / 8]}
            />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/toy.glb");
