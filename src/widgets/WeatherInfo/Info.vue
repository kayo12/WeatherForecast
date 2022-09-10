<script lang="ts">
export default {
  name: "Info",
};
</script>

<script setup lang="ts"></script>

<template>
  <div id="weather-main">
    <div id="weather-name">WeatherApp</div>

    <div id="weather-info">
      <span>08</span>
      <div id="weather-location">
        <span>Location</span>
        <small>TimeStamp info</small>
      </div>
      <span class="weather-icon">Icon</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  *
    text-shadow: 2px 2px 2px rgba(0,0,0,0.4);
#weather-main
    padding 5rem
    display flex
    flex-direction column
    justify-content space-between
    height: -webkit-fill-available;
    color: #fff

    #weather-info
      display flex
      gap 1rem
      font-size 4rem
  
#weather-location
  display flex
  flex-direction column
  span
    font-size 2rem
  small
    font-size 1rem

</style>
