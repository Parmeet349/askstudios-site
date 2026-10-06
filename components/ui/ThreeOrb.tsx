"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeOrb() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Core sphere
    const geometry = new THREE.SphereGeometry(1, 128, 128);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x0a0020),
      roughness: 0.15,
      metalness: 0.8,
      wireframe: false,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Wireframe overlay
    const wireGeo = new THREE.SphereGeometry(1.01, 32, 32);
    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x7c3aed),
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireframe = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireframe);

    // Outer glow ring
    const ringGeo = new THREE.TorusGeometry(1.35, 0.006, 16, 200);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x7c3aed),
      transparent: true,
      opacity: 0.6,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 4;
    scene.add(ring);

    // Second ring (cyan)
    const ringGeo2 = new THREE.TorusGeometry(1.5, 0.004, 16, 200);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x06b6d4),
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 2.5;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring2);

    // Floating particles
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.6 + Math.random() * 0.8;
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xc4b5fd,
      size: 0.018,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1a0050, 2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x7c3aed, 8, 10);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 5, 10);
    pointLight2.position.set(-2, -1, 1);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x10b981, 3, 8);
    pointLight3.position.set(0, -3, 1);
    scene.add(pointLight3);

    // Mouse tracking
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      sphere.rotation.y = t * 0.12;
      sphere.rotation.x = Math.sin(t * 0.08) * 0.1;

      wireframe.rotation.y = t * 0.08 + Math.PI / 4;
      wireframe.rotation.x = Math.sin(t * 0.06) * 0.15;

      ring.rotation.z = t * 0.2;
      ring2.rotation.z = -t * 0.15;

      particles.rotation.y = t * 0.04;
      particles.rotation.x = Math.sin(t * 0.05) * 0.05;

      // Magnetic mouse effect
      scene.rotation.y += (mouse.x * 0.4 - scene.rotation.y) * 0.05;
      scene.rotation.x += (-mouse.y * 0.25 - scene.rotation.x) * 0.05;

      // Pulse light
      pointLight1.intensity = 8 + Math.sin(t * 2) * 2;
      pointLight2.intensity = 5 + Math.cos(t * 1.5) * 1.5;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ minHeight: "480px" }}
    />
  );
}
