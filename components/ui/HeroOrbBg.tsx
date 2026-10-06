"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeroOrbBgProps {
  className?: string;
}

export default function HeroOrbBg({ className = "" }: HeroOrbBgProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Dynamic layout position calculation based on viewport width
    const isDesktop = () => window.innerWidth >= 1024;
    const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1024;

    const getSphereTargetPos = () => {
      if (isDesktop()) return { x: 1.85, y: -0.15, z: 0 };
      if (isTablet()) return { x: 1.1, y: 0.05, z: 0 };
      return { x: 0, y: 0.35, z: 0 };
    };

    // --- Object Group ---
    const mainGroup = new THREE.Group();
    const targetPos = getSphereTargetPos();
    mainGroup.position.set(targetPos.x, targetPos.y, targetPos.z);
    scene.add(mainGroup);

    // --- Core Tech Sphere ---
    const sphereRadius = 1.35;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 96, 96);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#050114"),
      roughness: 0.18,
      metalness: 0.88,
      emissive: new THREE.Color("#18003a"),
      emissiveIntensity: 0.45,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    mainGroup.add(sphere);

    // --- Icosahedron Wireframe Shell ---
    const wireGeo = new THREE.IcosahedronGeometry(sphereRadius * 1.02, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireframe = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireframe);

    // --- Inner Glowing Core (Plasma Heart) ---
    const coreGeo = new THREE.SphereGeometry(sphereRadius * 0.72, 48, 48);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1e004a"),
      emissive: new THREE.Color("#4c1d95"),
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.95,
      transparent: true,
      opacity: 0.85,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(core);

    // --- Gyroscope Ring 1 (Violet Primary) ---
    const ring1Geo = new THREE.TorusGeometry(1.92, 0.009, 16, 260);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.75,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.3;
    ring1.rotation.y = Math.PI / 10;
    mainGroup.add(ring1);

    // --- Gyroscope Ring 2 (Neon Cyan Secondary) ---
    const ring2Geo = new THREE.TorusGeometry(2.22, 0.006, 16, 260);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3.4;
    ring2.rotation.y = -Math.PI / 5;
    mainGroup.add(ring2);

    // --- Gyroscope Ring 3 (Emerald Accent) ---
    const ring3Geo = new THREE.TorusGeometry(2.55, 0.004, 16, 260);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.35,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = -Math.PI / 4.5;
    ring3.rotation.z = Math.PI / 6;
    mainGroup.add(ring3);

    // --- Orbiting Swarm Particles ---
    const swarmCount = 380;
    const swarmPositions = new Float32Array(swarmCount * 3);
    const swarmSpeeds = new Float32Array(swarmCount);
    const swarmRadii = new Float32Array(swarmCount);
    const swarmPhis = new Float32Array(swarmCount);

    for (let i = 0; i < swarmCount; i++) {
      const r = 1.6 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.7; // concentrated around equator
      swarmRadii[i] = r;
      swarmPhis[i] = phi;
      swarmSpeeds[i] =
        (0.2 + Math.random() * 0.4) * (Math.random() > 0.5 ? 1 : -1);

      swarmPositions[i * 3] = r * Math.cos(phi) * Math.cos(theta);
      swarmPositions[i * 3 + 1] = r * Math.sin(phi);
      swarmPositions[i * 3 + 2] = r * Math.cos(phi) * Math.sin(theta);
    }

    const swarmGeo = new THREE.BufferGeometry();
    swarmGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(swarmPositions, 3),
    );
    const swarmMat = new THREE.PointsMaterial({
      color: 0xc4b5fd,
      size: 0.024,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    });
    const swarm = new THREE.Points(swarmGeo, swarmMat);
    mainGroup.add(swarm);

    // --- Ambient Cosmic Starfield (Fullscreen Depth) ---
    const starCount = 600;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 36;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      starPositions[i * 3 + 2] = -3 - Math.random() * 12;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3),
    );
    const starMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.016,
      transparent: true,
      opacity: 0.45,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // --- Cinematic Lights ---
    const ambientLight = new THREE.AmbientLight(0x0e0728, 2.5);
    scene.add(ambientLight);

    // Key violet rim light
    const keyLight = new THREE.PointLight(0x8b5cf6, 18, 14);
    keyLight.position.set(targetPos.x - 2.5, targetPos.y + 2.2, 2.2);
    scene.add(keyLight);

    // Cyan fill light
    const fillLight = new THREE.PointLight(0x06b6d4, 10, 12);
    fillLight.position.set(targetPos.x + 3.2, targetPos.y - 1.8, 1.8);
    scene.add(fillLight);

    // Emerald accent rim light
    const accentLight = new THREE.PointLight(0x10b981, 7, 10);
    accentLight.position.set(targetPos.x + 0.5, targetPos.y - 3, 0.8);
    scene.add(accentLight);

    // --- Interactive Mouse & Drag Physics ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const dragVelocity = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.targetX = normX * 0.4;
      mouse.targetY = normY * 0.3;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        dragVelocity.x = deltaX * 0.005;
        dragVelocity.y = deltaY * 0.005;
        mainGroup.rotation.y += dragVelocity.x;
        mainGroup.rotation.x += dragVelocity.y;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      // Allow drag interaction directly on the canvas container
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const normX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normY = -(touch.clientY / window.innerHeight) * 2 + 1;
        mouse.targetX = normX * 0.3;
        mouse.targetY = normY * 0.2;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // --- Animation Loop ---
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Apply drag momentum dampening
      if (!isDragging) {
        dragVelocity.x *= 0.94;
        dragVelocity.y *= 0.94;
        mainGroup.rotation.y += dragVelocity.x;
        mainGroup.rotation.x += dragVelocity.y;

        // Base continuous ambient spin
        mainGroup.rotation.y += delta * 0.07;
        mainGroup.rotation.x = Math.sin(elapsed * 0.4) * 0.08 + mouse.y * 0.3;
      }

      // Parallax camera tilt
      camera.position.x = mouse.x * 0.6;
      camera.position.y = mouse.y * 0.4;
      camera.lookAt(mainGroup.position);

      // Differential ring rotations
      ring1.rotation.z += delta * 0.16;
      ring2.rotation.z -= delta * 0.12;
      ring2.rotation.y += delta * 0.08;
      ring3.rotation.x += delta * 0.18;
      ring3.rotation.z += delta * 0.09;

      // Inner wireframe counter-rotation
      wireframe.rotation.y -= delta * 0.09;
      wireframe.rotation.z += delta * 0.05;

      // Core plasma pulse
      core.rotation.y += delta * 0.14;
      const pulse = 0.8 + Math.sin(elapsed * 2.2) * 0.25;
      coreMat.emissiveIntensity = pulse;

      // Lights pulsating intensity
      keyLight.intensity = 18 + Math.sin(elapsed * 1.6) * 3;
      fillLight.intensity = 10 + Math.cos(elapsed * 1.3) * 2;

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      const newPos = getSphereTargetPos();
      mainGroup.position.set(newPos.x, newPos.y, newPos.z);
      keyLight.position.set(newPos.x - 2.5, newPos.y + 2.2, 2.2);
      fillLight.position.set(newPos.x + 3.2, newPos.y - 1.8, 1.8);
      accentLight.position.set(newPos.x + 0.5, newPos.y - 3, 0.8);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", handleResize);

      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      swarmGeo.dispose();
      swarmMat.dispose();
      starGeo.dispose();
      starMat.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 cursor-grab active:cursor-grabbing ${className}`}
      style={{
        pointerEvents: "auto",
        touchAction: "none",
      }}
    />
  );
}
