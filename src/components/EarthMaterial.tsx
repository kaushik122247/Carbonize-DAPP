"use client";
import * as THREE from "three";
import React from "react";
import { useLoader } from "@react-three/fiber";

const defaultSunDirection = new THREE.Vector3(-2, 0.5, 1.5).normalize();

function getEarthMat(sunDirection = defaultSunDirection) {
  // Using placeholder colors for now since we don't have texture files
  // You can add texture files later to public/textures/ folder
  const map = useLoader(
    THREE.TextureLoader, 
    "https://raw.githubusercontent.com/bobbyroe/earth-with-react-three-fiber/main/public/textures/earth-daymap-4k.jpg"
  );
  const nightMap = useLoader(
    THREE.TextureLoader,
    "https://raw.githubusercontent.com/bobbyroe/earth-with-react-three-fiber/main/public/textures/earth-nightmap-4k.jpg"
  );
  const cloudsMap = useLoader(
    THREE.TextureLoader,
    "https://raw.githubusercontent.com/bobbyroe/earth-with-react-three-fiber/main/public/textures/earth-clouds-4k.jpg"
  );

  const uniforms = {
    dayTexture: { value: map },
    nightTexture: { value: nightMap },
    cloudsTexture: { value: cloudsMap },
    sunDirection: { value: sunDirection },
  };

  const vs = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      // Position
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * viewMatrix * modelPosition;

      // Model normal
      vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

      // Varyings
      vUv = uv;
      vNormal = modelNormal;
      vPosition = modelPosition.xyz;
    }
  `;

  const fs = `
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;
    uniform sampler2D cloudsTexture;
    uniform vec3 sunDirection;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vec3 viewDirection = normalize(vPosition - cameraPosition);
      vec3 normal = normalize(vNormal);
      vec3 color = vec3(0.0);

      // Use only daylight texture for entire Earth
      vec3 dayColor = texture(dayTexture, vUv).rgb;
      color = dayColor;

      // Specular cloud color
      vec2 specularCloudsColor = texture(cloudsTexture, vUv).rg;

      // Clouds - always visible
      float cloudsMix = smoothstep(0.0, 1.0, specularCloudsColor.g);
      color = mix(color, vec3(1.0), cloudsMix);

      // Removed annoying specular reflection
      
      // Final color
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vs,
    fragmentShader: fs,
  });
  return material;
}

interface EarthMaterialProps {
  sunDirection?: THREE.Vector3;
}

function EarthMaterial({ sunDirection }: EarthMaterialProps) {
  const material = React.useMemo(() => getEarthMat(sunDirection), [sunDirection]);
  return <primitive object={material} />;
}

export default EarthMaterial;