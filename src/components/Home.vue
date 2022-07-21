<script setup lang="ts">
const isMobile: boolean = true;
</script>

<template>
  <div id="main" class="home">
    <div class="info-home">
      <div class="div2"></div>
      <div class="div3"></div>
    </div>
    <div class="form">Formulario</div>
    <Clock />
  </div>
</template>

<style scoped lang="stylus">
  #main{
    background: red;
    .info-home
      background: blue;
      .div2
        background: black
      .div3
        background: purple
      if(isMobile)
        background: green
  }

  .info-home
    color red
      .info-home2{
        color blue
      }

  .info-home{
    padding: 2rem;
  }
</style>
