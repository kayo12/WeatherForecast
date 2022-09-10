<script lang="ts">
export default {
  name: "WeatherGrid",
};
</script>

<script lang="ts" setup>
interface Props {
  name: string;
  number: number;
}

const props = defineProps<Props>();
</script>

<template>
  <div id="weather-details">
    <div>{{props.name}}</div>
    <div>{{props.number}}</div>
  </div>
</template>

<style lang="stylus" scoped>
  #weather-details
    display: flex
    justify-content: space-between
</style>
