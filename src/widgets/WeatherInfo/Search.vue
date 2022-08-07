<script lang="ts">
export default {
    name: 'TeacherList',
};
</script>

<script lang="ts" setup>
import { reactive } from 'vue';
import glassIcon  from '../../assets/icons/glass.svg'

interface Props {
    collapsed: boolean;
}

const props = reactive<Props>({
    collapsed: false,
});

const collapseColumn = () => {
    props.collapsed = !props.collapsed;
};
</script>

<template>
    <div id="desktop-search" :style="{ width: props.collapsed ? '35%' : '5%' }">
        <button @click="collapseColumn()">

            <img :src="glassIcon" alt="clock" />
        </button>
    </div>
</template>

<style lang="stylus" scoped>
    #desktop-search
        transition all 500ms
        padding  0 0 2rem
        background: rgba( 0, 0, 0, 0.4 );
        backdrop-filter: blur( 10.5px );
        -webkit-backdrop-filter: blur( 10.5px );
        button
            background #829f9a
            border none  
</style>