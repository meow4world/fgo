<template>
<div class="infinite-container" :style="{height:listHeight-offsetTop+'px'}">
	<div class="container">
		<mu-auto-complete  icon="search" class="appbar-search-field" hintText="请随便输入搜索英灵" labelFloat label="英灵查询"  @input="handleInput" :dataSource="dataSource" @change="handlechange" fullWidth v-model='aaa'/>
	</div>
		  <mu-grid-list class="gridlist-demo" :cols='4' :cellHeight='100'>
    		<mu-grid-tile v-for="it, index in list" :key="index" :data-id='it.id'>
     		<img :src="it.image|imgUrl"/>
      		<span slot="title">{{it.name}}</span>
      		<span slot="subTitle"><b>{{it.name_jp}}</b></span>
      		<mu-icon-button icon="star_border" slot="action"/>
    	    </mu-grid-tile>
 		</mu-grid-list>
		<mu-infinite-scroll :scroller="scroller" :loading="loading"    @load="loadMore" />
	
</div>
</template>
<script>
	export default {
		data () {
			return {
				dataSource: [],
				name:'',
				list:[],
				loading: false,
				scroller: null,
				listHeight:'',
				offsetTop:'',
				i:1,
				aaa:'',
			}
		},
		methods: {
			handlechange (val) {
				this.i=1;
				let _params = JSON.stringify({keyword:val});
				this.$http.jsonp("http://api.umowang.com/guides/data/fgo",{
					dataType:'jsonp',
					jsonp:'jsoncallback',
					jsoncallback:'getguidedata',
					params:{
						'jsoncallback':'getguidedata',
						'command':'pets_list_search',
						'page':this.i,
						'params':_params,
					}
				}).then(function(response){
					//console.log(response.data.data)
					this.list=response.data.data
					
				},function(err){
					console.log('未知错误'+err)
				})
			},
			handleInput (val) {
				//console.log(val)
				let _params = JSON.stringify({keyword:val});
				let _command = 'pets_list_all';
				if(val == ''||val==undefined){
					_command = 'pets_list_all'
				}else{
					_command = 'pets_list_search'
				}
				this.$http.jsonp("http://api.umowang.com/guides/data/fgo",{
					dataType:'jsonp',
					jsonp:'jsoncallback',
					jsoncallback:'getguidedata',
					params:{
						'jsoncallback':'getguidedata',
						'command':_command,
						'page':this.i,
						'params':_params,
					}
				}).then(function(response){
					//console.log(response.data.data)
					this.list=response.data.data
					
				},function(err){
					console.log('未知错误'+err)
				})
				this.dataSource = [
					val
				]
			},
			loadMore () {
				//console.log("到底了")
				this.loading = true
				let _params = JSON.stringify({keyword:this.aaa});
				let _command = 'pets_list_all';
				if(this.aaa == ''||this.aaa==undefined){
					_command = 'pets_list_all'
				}else{
					_command = 'pets_list_search'
				}
				this.i++
				this.$http.jsonp("http://api.umowang.com/guides/data/fgo",{
					dataType:'jsonp',
					jsonp:'jsoncallback',
					jsoncallback:'getguidedata',
					params:{
						'jsoncallback':'getguidedata',
						'command':_command,
						'page':this.i,
						'params':_params,
					}
				}).then(function(response){
					//console.log(response)
					if(response.data.count==0){
						this.i--

					}else{
						this.list=this.list.concat(response.data.data)
					}
					this.loading = false
				},function(err){
					console.log('未知错误'+err)
				})
			},
			getClientHeight(){
				var self =this;
				//console.log(window.screen);
				this.listHeight = window.screen.height;
				this.offsetTop = document.getElementsByClassName('infinite-container')[0].offsetTop;
				window.addEventListener("resize",function(){
					//console.log(window.screen);
					self.listHeight = window.screen.height;
					self.offsetTop = document.getElementsByClassName('infinite-container')[0].offsetTop;
				})
			}
		},
		mounted(){
			this.scroller = this.$el
			this.handleInput();
			this.getClientHeight();
		},
		components:{
		},
		filters:{
			imgUrl:function(img){
				return img.replace('fgowiki','fgowiki.591mogu').replace('umowang','fgowiki.591mogu').replace('png','jpg');
			}
		}
		
	}
</script>
<style lang="css" scoped> 
.container{
	width: 90%;
	margin: 0 10% 0 0;
}
.appbar-search-field{
}
.list{
	overflow: hidden;
	margin: 0;
	padding: 0 1%;
}
.infinite-container{
	width: 100%;
	/*height: 300px;*/
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	/*border: 1px solid #d9d9d9;*/
}
</style>