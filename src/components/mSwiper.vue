<template>
    <div class="swiper-container have_header">
        <swiper :options="swiperOption">
            <swiper-slide v-for="swiper in swipers" :key="swiper.id">
                <a :href="swiper.link" style="height: 200px;"><img :src="swiper.image" class="banner-item" alt="" height="20%" width="100%"></a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            swipers: [],
            swiperOption: {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            }
        }
    },
    methods: {
        getBanner:function(){
        	this.$http.jsonp('http://1.meow4u.applinzi.com/api_fgo/banner.php',{
        		params:{
        			 // callback:'JSON_CALLBACK',
        			'jsoncallback':'getindexdata'
        		}
        	}).then(function(data){
        		console.log('success:',data)
        		 this.swipers = data.data.data
        		 console.log(data.data.data)
        	},function(err){
        		console.log('err:',err);
        	})
        }
        // getBanner: function() {
        //     $.ajax({
        //         url: 'http://api.umowang.com/guides/banners/fgo',
        //         type: "GET",
        //         dataType: 'jsonp',
        //         jsonp: 'jsoncallback',
        //         jsonpCallback: 'getindexdata',
        //         cache: true,
        //         success:function(data){
        //         	console.log('success:',data)
        // 		 this.swipers = data.data
        //  		 console.log(this.swipers)
        //         }
        //     })
        // }
    },
    mounted: function() {
            this.getBanner()
        }
        //meth
        //
}
</script>
<style>
.have_header {
    padding-top: 10px;
}
</style>
