<script lang="ts">
export default {
  name: "TeacherList",
};
</script>

<script lang="ts" setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import glassIcon from "../../assets/icons/animated/glass.webp";
import WeatherGrid from "./WeatherGrid.vue";

interface Props {
  collapsed: boolean;
  weatherDetails: { name: string; quantity: number }[];
}

const props = reactive<Props>({
  collapsed: false,
  weatherDetails: [
    {
      name: "cloudy",
      quantity: 86,
    },
    {
      name: "humidity",
      quantity: 62,
    },
    {
      name: "wind",
      quantity: 8,
    },
    {
      name: "rain",
      quantity: 8,
    },
  ],
});

const collapseColumn = () => {
  props.collapsed = !props.collapsed;
};

const i18n = useI18n();
</script>

<template>
  <div id="desktop-search" :style="{ width: props.collapsed ? '40%' : '0%' }">
    <div id="search-area">
      <div v-if="props.collapsed" class="input-area">
        <form>
          <label for="input-text">
            <input
              id="input-text"
              class="input-text"
              type="text"
              :placeholder="i18n.t('homepage.search_city')"
              required
            />
          </label>
        </form>
      </div>
      <div v-if="props.collapsed" id="weather-details" class="active">
        Weather Details
        <WeatherGrid
          v-for="info in props.weatherDetails"
          :name="info.name"
          :number="info.quantity"
        />
      </div>
    </div>
    <div class="search-button">
      <button @click="collapseColumn()">
        <img :src="glassIcon" alt="clock" />
      </button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
#desktop-search
    transition all 500ms
    display flex
    background: rgba( 0, 0, 0, 0.4 )
    backdrop-filter: blur( 10.5px )
    -webkit-backdrop-filter: blur( 10.5px )
    min-width 5rem
    button
        background #829f9a
        border none
        height 100%
        width 100%
        img
          width 1.85rem
    #search-area
        width 100%
        transition all 500ms
        display flex
        flex-direction column
        justify-content space-between
        padding 0 2.5rem 2.5rem 2.5rem
    .search-button
      position absolute
      right 0
      height 6.25rem
      width 5rem
      height 5rem
    .input-area
      display: flex;
      align-items: self-end;
      height 5rem
    .input-text
        background transparent
        border none
        border-bottom 2px solid #828887
        padding-bottom 0.5rem
        outline none
        font-size 1rem
</style>
