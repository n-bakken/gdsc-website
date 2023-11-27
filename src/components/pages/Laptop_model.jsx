import React, { useEffect } from 'react';
import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { gsap } from 'gsap';

import './css/Laptop_model.css';

function Model() {
  useEffect(() => {
    const scene = new THREE.Scene();

    // Set the initial width and height for the canvas
    const maxWidth = 550; // Maximum width for the canvas
    const initialWidth = Math.min(window.innerWidth, maxWidth);
    const initialHeight = initialWidth * 1; // Height is 1.25 times the width

    const camera = new THREE.PerspectiveCamera(75, initialWidth / initialHeight, 0.1, 1000);
    camera.position.set(10, 5, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // the second parameter 0 sets the alpha to transparent
    renderer.setClearColor("white");
    renderer.setSize(initialWidth, initialHeight);
    document.getElementById("three-container").appendChild(renderer.domElement);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2);
    directionalLight.position.set(-80, 40, 180);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    let laptopObj;

    // Rotate Object function
    const rotateObject = (e) => {
      if (laptopObj) {
        gsap.to(laptopObj.rotation, { y: laptopObj.rotation.y - (2 * Math.PI), duration: 2 });
      }
    };

    // Load model
    const mtlLoader = new MTLLoader();
    mtlLoader.load('./Laptop/laptop.mtl', (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('./Laptop/laptop.obj', (object) => {
        object.position.set(10, 5, -15);
        object.scale.set(0.08, 0.08, 0.08); // Adjust scale of the model
        scene.add(object);
        laptopObj = object;

        laptopObj.rotation.x = Math.PI / 10;   // Rotation around the X-axis
        laptopObj.rotation.y = -Math.PI / 8;  // Rotation around the Y-axis
        laptopObj.rotation.z = Math.PI / 28;  // Rotation around the Z-axis

        renderer.domElement.addEventListener("click", rotateObject);
      });
    });

    const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }

    render();

    // Handle window resize
    const onWindowResize = () => {
      const width = Math.min(window.innerWidth, maxWidth);
      const height = width * 1; // Maintain the height as 1.25 times the width

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onWindowResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.domElement.removeEventListener("click", rotateObject);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };

  }, []);

  return (
    <div className="three-container" id="three-container"></div>
  );
}

export default Model;
