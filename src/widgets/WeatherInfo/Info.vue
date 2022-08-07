<script lang="ts">
export default {
    name: "Info",
};
</script>

<script setup lang="ts"></script>

<template>
    <div id="info-main">
        <div>WeatherApp</div>
        <div>08° London Rainy</div>
    </div>
</template>

<style lang="stylus" scoped>
    #info-main
        padding 5rem
        display flex
        flex-direction column
        justify-content space-between
        height: -webkit-fill-available;
        div
            color: #fff
</style>
