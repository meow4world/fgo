<template>
    <div id="app">
        <router-view></router-view>
        <mSwiper></mSwiper>
    </div>
</template>
<script>
import mSwiper from '@/components/mSwiper'
export default {
    name: 'index',
    components: {
      mSwiper,
    }
}
</script>
<style>
</style>
