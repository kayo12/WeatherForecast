<script lang="ts">
export default {
  name: "TeacherList",
};
</script>

<script lang="ts" setup>
import { reactive } from "vue";
import glassIcon from "../../assets/icons/glass.svg";
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
              placeholder="Search a City"
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
    min-width 4.5rem
    justify-content: space-between
    button
        background #829f9a
        border none
        padding 1.5rem
        img
          width 1.5rem
    #search-area
        transition all 500ms
    .search-button 
      position absolute
      right 0
    .input-area
      display: flex;
      align-items: self-end;
    .input-text
        background transparent
        border none
        border-bottom 1px solid gray
        outline none
</style>
