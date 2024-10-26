// @ts-nocheck
import React, { useMemo, useRef } from 'react';
import vertexShader from './vertexShader';
import fragmentShaderDark from './fragmentShaderDark';
import fragmentShaderLight from './fragmentShaderLight';
import { useFrame, invalidate } from '@react-three/fiber';
import { MathUtils } from 'three';
import { useMantineColorScheme } from '@mantine/core';



const Blob = () => {
  const { colorScheme } = useMantineColorScheme();
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
  });

  const fragmentShader = useMemo(() => {
    return colorScheme === 'dark' ? fragmentShaderDark : fragmentShaderLight;
  }, [colorScheme]);

  return (
    <mesh
      ref={mesh}
      scale={1.5}
      position={[0.2, 0.5, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2.2, 20]} />

      <shaderMaterial
        key={colorScheme} // This forces a rerender when colorScheme changes
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
