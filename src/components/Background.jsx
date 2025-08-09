import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export const Background = () => {
  const material = useRef();
  const color = useRef({
    color: "#40E0D0",
  });
  const data = useScroll();

  const tl = useRef();

  useFrame(() => {
    tl.current.progress(data.scroll.current);
    material.current.color = new THREE.Color(color.current.color);
  });

useEffect(() => {
  tl.current = gsap.timeline({ repeat: -1, yoyo: true });

  tl.current.to(color.current, {
    color: "#FF6B6B", // rouge corail
    duration: 1,
  });
  tl.current.to(color.current, {
    color: "#FFD93D", // jaune soleil
    duration: 1,
  });
  tl.current.to(color.current, {
    color: "#6BCB77", // vert tendre
    duration: 1,
  });
  tl.current.to(color.current, {
    color: "#ffffff", // bleu électrique
    duration: 1,
  });
}, []);







  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
