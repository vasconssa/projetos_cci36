//import * as THREE from './js/three.js'
//import * as PARSER from './lsystem_parser.js'

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
var controls = new THREE.OrbitControls(camera, renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color:0x00ff00});

var cube = new THREE.Mesh(geometry, material);
var axis = new THREE.AxesHelper(20);

var geometry = new THREE.CylinderGeometry( 0.2/2.0, 0.5/2.0, 0.5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cylinder = new THREE.Mesh( geometry, material );
//scene.add(cube);
scene.add(axis);
//scene.add(cylinder);

camera.position.z = 5;
generate_tree(scene);

var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update();

    renderer.render(scene, camera);
};

animate();
