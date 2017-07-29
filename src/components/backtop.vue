<template>
	<div class="backtop" @click="backtop()">
		<img src="http://www.daogoutong.cn/m/template/w_chaofan/inc/images/gotop.png" alt="" />
	</div>
</template>

<script>
	export default {
	methods: {
			backtop(){
			   this.$emit("srly",0)
			}
		}
	}
</script>

<style>
	.backtop {
		position: fixed;
		bottom: 5.2rem;
		right: 0.8rem;
		width: 3.75rem;
		height: 3.75rem;
	}
	
	.backtop>img {
		width: 100%;
		height: 100%;
	}
</style>