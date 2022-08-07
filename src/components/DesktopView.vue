<script lang="ts">
export default {
    name: "DesktopView",
};
</script>

<script setup lang="ts">
import Info from "../widgets/WeatherInfo/Info.vue";
interface Props {
    weatherNow: string[];
}

const props = withDefaults(defineProps<Props>(), {
    weatherNow: () => ['mist', 'snow', 'rain', 'clear', 'clouds', 'wind'],
})

const random = Math.floor(Math.random() * props.weatherNow.length);


</script>

<template>
    <main :class="props.weatherNow[random]">
        <Info />
    </main>
</template>

<style scoped lang="stylus">

main
    height var(--doc-height) //for mobile devices that have a navgation bar and/or a menu bar.
.mist
    background url('../assets/images/mist_desktop.webp') center / cover no-repeat
.snow
    background url('../assets/images/snow_desktop.webp') center / cover no-repeat
.rain
    background url('../assets/images/rainy.webp') center / cover no-repeat
.clear
    background url('../assets/images/clear_desktop.webp') center / cover no-repeat
.clouds
    background url('../assets/images/clouds.webp') center / cover no-repeat
.wind
    background url('../assets/images/mist_desktop.webp') center / cover no-repeat
</style>
