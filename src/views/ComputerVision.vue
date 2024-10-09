<template>
    <div>
        <img src="/src/assets/image.png" id="image" width="20%" height="20%"></img>
        <canvas id="outputCanvas"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
    onMounted(() => {
    let imgElement = document.getElementById('image');
    imgElement.onload = () => {
        console.log('Image loaded');
        let mat = cv.imread(imgElement);
        console.log(mat);
        cv.imshow('outputCanvas', mat);
        mat.delete();
        };
    });
</script>