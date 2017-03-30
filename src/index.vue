<template>
    <div id="app">
        <mHeader></mHeader>
        <router-view></router-view>
    </div>
</template>
<script>
import mHeader from '@/components/mHeader'
export default {
    name: 'index',
    components: {
        mHeader,
    }
}
</script>
<style>
</style>
