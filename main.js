// importing 3js
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// declaring main objects:
const canvas = document.getElementById('canvas_elfahl');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
const renderer  = new THREE.WebGLRenderer({antialias: true, canvas});
const light = new THREE.DirectionalLight(0xFFFFFF, 3);
const controls = new OrbitControls(camera, canvas);

camera.position.z = 2;
light.position.set(-1, 2, 4);

const geometry = new THREE.BoxGeometry(1,1,1);
const material =  new THREE.MeshBasicMaterial();
const cube = new THREE.Mesh(geometry, material);

scene.add(cube, light)