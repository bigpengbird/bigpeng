<template>
	<div id="app">
		<router-view></router-view>
		<backtop v-if="topshow" v-on:srly="htop"></backtop>
		<nav v-if="mshuw">
			<router-link tag="div" key="index" v-for="(item,index) in tabBar" v-bind:to="{path:item.path}">
				<span>&nbsp;</span> {{item.name}}
			</router-link>
		</nav>
	</div>
</template>

<script>
	import Backtop from '@/components/backtop'
	export default {
		name: 'app',
		mounted() {
			window.onscroll = function() {
				myFunction()
			};
			var _this = this
			function myFunction() {
				var sTop = window.scrollY;
				var sTop = parseInt(sTop);
				
				if(sTop >= 400) {
					_this.mshuw = false
				} else {
					_this.mshuw = true
				}
				if(sTop < 50){
					_this.topshow = false
				}else{
					_this.topshow = true
				}
			}

		},
		data() {
			return {
				mshuw: true,
				topshow:false,
				tabBar: [{
						path: '/',
						name: '首页'
					},
					{
						path: '/search',
						name: '搜索'
					},
					{
						path: '/ultrahigh/10000',
						name: '超高'
					},
					{
						path: '/store',
						name: '商城'
					},
					{
						path: '/me',
						name: '我的'
					}
				]
			}
		},
		
		components: {
			Backtop
		},
		methods:{
			htop(num){
				console.log(num)
			}
		}
		
	}
</script>

<style scoped>
	html {
		font-size: 10px;
	}
	
	#app {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 4.5rem;
	}
	
	nav {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 4.5rem;
		background-color: #F8F8F8;
		z-index: 999;
		color: #666666;
		border-top: 0.1rem solid #CCCCCC;
	}
	
	nav>div {
		float: left;
		width: 20%;
		height: 3.5rem;
		margin: 0.5rem 0;
		text-align: center;
		font-size: 1.4rem;
	}
	
	nav>div>span {
		display: block;
		width: 100%;
		height: 2rem;
		-webkit-background-size: auto 2rem;
		background-size: auto 2rem;
		background-position: center 0;
		background-repeat: no-repeat;
	}
	
	nav>div:nth-child(1)>span {
		background-image: url(assets/sy.png);
	}
	
	nav>div:nth-child(2)>span {
		background-image: url(assets/ss.png);
	}
	
	nav>div:nth-child(3)>span {
		background-image: url(assets/cgf.png);
	}
	
	nav>div:nth-child(4)>span {
		background-image: url(assets/sc.png);
	}
	
	nav>div:nth-child(5)>span {
		background-image: url(assets/wd.png);
	}
	
	nav>div:nth-child(1).router-link-exact-active {
		animation: navs 1s;
	}
	
	nav>div:nth-child(2).router-link-exact-active {
		animation: navs 1s;
	}
	
	nav>div:nth-child(3).router-link-exact-active {
		animation: navs 1s;
	}
	
	nav>div:nth-child(4).router-link-exact-active {
		animation: navs 1s;
	}
	
	nav>div:nth-child(5).router-link-exact-active {
		animation: navs 1s;
	}
	
	@keyframes navs {
		50% {
			background-color: #AFD9EE;
			border-radius: 0.6rem;
		}
	}
</style>