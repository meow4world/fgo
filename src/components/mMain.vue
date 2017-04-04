<template>
    <div>
        <mSwiper></mSwiper>
        <mTable></mTable> 
        <mChangYan></mChangYan>	
    </div>
</template>
<script>
import mSwiper from './mSwiper'
// import mHeader from './mHeader'
import mChangYan from './mChangYan'
import mTable from './mTable'
export default {
	name:'mMain',
    components: {
        // mHeader,
        mSwiper,
        mTable,
        mChangYan
    }
}
</script>
