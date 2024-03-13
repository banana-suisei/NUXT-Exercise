<script setup lang="ts">
const imgs = [
  '/NUXT-Exercise/dist/width/225.jpg',
  '/NUXT-Exercise/dist/width/226.jpg',
  '/NUXT-Exercise/dist/width/227.jpg',
  '/NUXT-Exercise/dist/width/234.jpg',
  '/NUXT-Exercise/dist/width/235.jpg',
  '/NUXT-Exercise/dist/width/FuOabb-aEAANGhz.jpg'
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
    <UContainer style="width: 100%">
      <UCarousel ref="carouselRef" v-slot="{ item }" :items="imgs" :ui="{item:'basis-full'}">
        <img :src="item" width="100%" height="95%" draggable="false" style="border-radius: 2%">
      </UCarousel>
    </UContainer>
  <!--  <div style="display: flex;">-->
  <UContainer style="display: flex;margin-top: 20px;width: 95%">
    <UContainer>
      <NuxtImg @click="$router.push('/daily')" style="border-radius: 5%" src="/百人展8.png"></NuxtImg>
    </UContainer>
    <UContainer>
      <NuxtImg @click="$router.push('/daily')" style="border-radius: 5%" src="/195.png"></NuxtImg>
      <ULink style="display: block;text-align: center" to="https://t.me/+7GFRpBpU_9IzZjk1">点击加tg</ULink>
    </UContainer>
    <UContainer>
      <NuxtImg @click="$router.push('/daily')" style="border-radius: 5%" src="/194.png"></NuxtImg>
      <UButton style="display: block;text-align: center;margin-top: 10px" to="https://github.com/suisei-pettan/NUXT-Exercise">此页面由 suisei-pettan<br>使用NUXT开发</UButton>
    </UContainer>
  </UContainer>
  <!--  </div>-->
  <!--  <div style="display: flex;margin-top: 5vh;justify-content: space-between;">-->
  <!--    <NuxtImg style="width: 30%" src="/百人展8.png"></NuxtImg>-->
  <!--    <div style="">-->
  <!--      <NuxtImg style="width: 33%" src="/195.png"></NuxtImg>-->
  <!--      <ULink to="https://t.me/bocchi_chan_suki">点击加tg</ULink>-->
  <!--    </div>-->
  <!--    <div>-->
  <!--      <h1 style="text-align:center">图3</h1>-->
  <!--      <UButton to="https://twitter.com/shirakamifubuki">点击进入下一页</UButton>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<style scoped>
</style>