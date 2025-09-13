"use client";

import { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Plane, Program, Mesh, Vec2 } from 'ogl';

interface AuroraProps {
  colorStops?: [string, string, string];
  speed?: number;
  blend?: number;
  amplitude?: number;
  className?: string;
}

const Aurora: React.FC<AuroraProps> = ({
  colorStops = ["#3A29FF", "#FF94B4", "#FF3232"],
  speed = 1.0,
  blend = 0.5,
  amplitude = 1.0,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize OGL renderer
    const renderer = new Renderer({ canvas: canvasRef.current, alpha: true });
    rendererRef.current = renderer;
    const gl = renderer.gl;

    // Set up camera
    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, 5);

    // Create scene
    const scene = new Transform();

    // Vertex shader
    const vertex = `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
      }
    `;

    // Fragment shader for aurora effect
    const fragment = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform float uSpeed;
      uniform float uBlend;
      uniform float uAmplitude;
      varying vec2 vUv;

      // Noise function
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 6; i++) {
          value += amplitude * smoothNoise(p);
          p *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = vUv;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= uResolution.x / uResolution.y;

        float time = uTime * uSpeed;
        
        // Create flowing aurora patterns
        float n1 = fbm(p * 2.0 + vec2(time * 0.1, time * 0.05));
        float n2 = fbm(p * 3.0 + vec2(time * 0.15, -time * 0.1));
        float n3 = fbm(p * 1.5 + vec2(-time * 0.08, time * 0.12));
        
        // Create aurora waves
        float wave1 = sin(p.y * 3.0 + time + n1 * uAmplitude) * 0.5 + 0.5;
        float wave2 = sin(p.y * 2.0 + time * 1.3 + n2 * uAmplitude) * 0.5 + 0.5;
        float wave3 = sin(p.y * 4.0 + time * 0.8 + n3 * uAmplitude) * 0.5 + 0.5;
        
        // Blend colors based on waves
        vec3 color1 = uColor1 * wave1;
        vec3 color2 = uColor2 * wave2;
        vec3 color3 = uColor3 * wave3;
        
        vec3 finalColor = mix(mix(color1, color2, uBlend), color3, uBlend * 0.5);
        
        // Add some transparency based on intensity
        float intensity = (wave1 + wave2 + wave3) / 3.0;
        float alpha = intensity * 0.8;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    // Convert hex colors to RGB
    const hexToRgb = (hex: string): [number, number, number] => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255
      ] : [0, 0, 0];
    };

    // Create geometry
    const geometry = new Plane(gl, { width: 2, height: 2 });

    // Create program with uniforms
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2(gl.canvas.width, gl.canvas.height) },
        uColor1: { value: hexToRgb(colorStops[0]) },
        uColor2: { value: hexToRgb(colorStops[1]) },
        uColor3: { value: hexToRgb(colorStops[2]) },
        uSpeed: { value: speed },
        uBlend: { value: blend },
        uAmplitude: { value: amplitude }
      },
      transparent: true
    });

    // Create mesh
    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    // Animation loop
    const animate = (time: number) => {
      program.uniforms.uTime.value = time * 0.001;
      
      renderer.render({ scene, camera });
      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
      program.uniforms.uResolution.value.set(gl.canvas.width, gl.canvas.height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      renderer.gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [colorStops, speed, blend, amplitude]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default Aurora;