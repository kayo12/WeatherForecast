<script lang="ts">
export default {
  name: "TeacherList",
};
</script>

<script lang="ts" setup>
import { reactive } from "vue";
import glassIcon from "../../assets/icons/glass.svg";

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
  <div id="desktop-search" :style="{ width: props.collapsed ? '35%' : '5%' }">
    <div
      id="search-area"
      :style="{
        justifyContent: props.collapsed ? 'space-between' : 'flex-end',
      }"
    >
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
      <div>
        <button @click="collapseColumn()">
          <img :src="glassIcon" alt="clock" />
        </button>
      </div>
    </div>
    <div v-if="props.collapsed" id="weather-details">
      Weather Details
      <div v-for="item in props.weatherDetails">
        {{ item.name }} {{ item.quantity }}
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
#desktop-search
    transition all 500ms
    padding  0 0 2rem
    background: rgba( 0, 0, 0, 0.4 )
    backdrop-filter: blur( 10.5px )
    -webkit-backdrop-filter: blur( 10.5px )
    min-width 4rem
    padding 0 0 0 3rem
    button
        background #829f9a
        border none
    #search-area
        display flex
    .input-area
      display: flex;
      align-items: self-end;
    .input-text
        background transparent
        border none
        border-bottom 1px solid gray
        outline none
</style>
