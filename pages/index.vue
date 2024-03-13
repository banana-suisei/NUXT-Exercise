<script setup lang="ts">

import router from "#app/plugins/router";
useHead({
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
  ]
})
</script>

<template>
  <div>
    <NuxtImg
        src="/head.png"
        alt="Nuxt"
        style="border-radius: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
        margin-top: 10vh;"
    />
  </div>
  <div style="display: flex;flex-direction: row;justify-content: center; align-items: center;margin-top: 5vh">
    <h4 style="text-align: center; color: white;">这是一个为月下修司定制<br>的一个一个一个</h4>
    <UButton style="height: 100%;margin-left: 1vh" to="/2">点击进入下一页</UButton>
  </div>
</template>

<style scoped>

</style>