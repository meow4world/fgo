<template>
    <div>
        <mSwiper></mSwiper>
        <mChangYan></mChangYan>	
    </div>
</template>
<script>
import mSwiper from './mSwiper'
// import mHeader from './mHeader'
import mChangYan from './mChangYan'
export default {
	name:'mMain',
    components: {
        // mHeader,
        mSwiper,
        mChangYan
    }
}
</script>
