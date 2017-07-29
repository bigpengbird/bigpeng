<template>
	<div class="backfront">
		<div @click="back()"></div>
		<a href="/"><div></div></a>
	</div>
</template>

<script>
	export default {
	methods: {
			back(){
			  window.history.back()
//			  console.log(window.history)
			}
		}
	}
	
	
</script>

<style>
	.backfront{
		width: 100%;
		height: 4rem;
		background: #EC1A5B;
		border: 0.1rem solid #EC1A5B;
		box-sizing: border-box;
	}
	.backfront>div:nth-child(1){
		float: left;
		width: 15%;
		height: 100%;
		background: url(../assets/back.png) no-repeat;
		background-size: 42%;
		background-position: center;
	}
	.backfront>a>div{
		float: right;
		width: 15%;
		height: 100%;
		background: url(../assets/home.png) no-repeat;
		background-size: 50%;
		background-position: center;
	}
</style>