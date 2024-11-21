<script setup>
import card from '../assets/card.png';

import { onMounted } from 'vue';

onMounted(() => {
  const targetNode = document.querySelector('#AR');
  
  const config = { childList: true }; // Listen for child elements being added

  const callback = function(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const videoElement = document.querySelector('#AR > video');
        if (videoElement) {
          // Apply styles dynamically
          videoElement.style.display = 'flex';
          videoElement.style.position = 'relative';
          videoElement.style.top = '0';
          videoElement.style.left = '0';
          videoElement.style.width = '100%';
          videoElement.style.height = '100%';
          videoElement.style.zIndex = '-1'; // Keep it behind AR elements
        }
      }
    }
  }
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  document.getElementById('card').src = card;
})

</script>

<template>
  <div id="AR">
    <a-scene embedded mindar-image="imageTargetSrc: /src/assets/card.mind; uiError:no; uiLoading:no; uiScanning:no" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false" inspector>
      <a-assets>
	      <img id="card" src=""/>
      </a-assets>
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
      </a-entity>
    </a-scene>
  </div>
</template>

<style scoped>
#AR {
  position: relative;
}
</style>