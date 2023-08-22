// @ts-nocheck
import React, { useEffect, useMemo, useRef, useContext } from 'react';
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
import { useFrame, invalidate } from '@react-three/fiber';
import { MathUtils } from 'three';
import { ModeContext } from '../App';

const Blob = () => {
  const { changed, setChanged } = useContext(ModeContext);
  const hover = useRef(false);
  const mesh = useRef();
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);


  useFrame((state) => {
    const { clock } = state;

    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }

    invalidate();


    // if (changed === true) {
    //   invalidate();
    //   setChanged(false);
    // }
  });

  return (
    <mesh
      ref={mesh}
      scale={1.5}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2.2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
