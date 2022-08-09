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
  <div>{{props.name}}</div>
  <div>{{props.number}}</div>
</template>

<style lang="stylus" scoped></style>
