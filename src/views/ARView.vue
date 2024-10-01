<template>
  <a-scene embedded arjs>
    <a-marker preset="hiro">
      <!-- we use cors proxy to avoid cross-origin problems ATTENTION! you need to set up your server -->
      <a-entity
        position="0 0 0"
        scale="0.5 0.5 0.5"
        gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
      ></a-entity>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
</template>
