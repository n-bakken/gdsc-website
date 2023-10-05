import React, { useEffect } from 'react';
import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { gsap, Power1, Expo } from 'gsap';

import './css/Laptop_model.css';

function Model() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, 550 / 550, 0.1, 1000);
    camera.position.set(10, 5, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor("white");
    renderer.setSize(550, 550);
    document.getElementById("three-container").appendChild(renderer.domElement);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2);
    directionalLight.position.set(-80, 40, 180);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    let laptopObj;
    let tl; 


    // Rotate Object function
    const rotateObject = (e) => {
      if (laptopObj) {
        gsap.to(laptopObj.rotation, { y: laptopObj.rotation.y - (2 * Math.PI), duration: 2 });
      }
    };

    const mtlLoader = new MTLLoader();
    mtlLoader.load('./Laptop/laptop.mtl', (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('./Laptop/laptop.obj', (object) => {
        object.position.set(10, 17, -14);
        object.scale.set(0.08, 0.08, 0.08);
        scene.add(object);
        laptopObj = object;

        laptopObj.rotation.x = Math.PI / 10;   // Rotation around the X-axis
        laptopObj.rotation.y = -Math.PI / 8;  // Rotation around the Y-axis
        laptopObj.rotation.z = Math.PI / 28;  // Rotation around the Z-axis

        tl = gsap.timeline();
        tl.from(laptopObj.position, 2, { y: 0.02, z: -0.5, ease: Expo.easeOut });
        gsap.to(laptopObj.position, 6, { y: 0.01, yoyo: true, repeat: -1, ease: Power1.easeInOut });

        renderer.domElement.addEventListener("click", rotateObject);
      });
    });

    const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }

    render();

    return () => {
      renderer.domElement.removeEventListener("click", rotateObject);
    };

  }, []);

  return (
    <div className="three-container" id="three-container"></div>
  );
}

export default Model;
