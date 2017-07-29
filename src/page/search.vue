<template>
	<div class="search">
		<backfront></backfront>
		<h3>商品搜索</h3>
		<div class="search_content">
			<div>
				<input type="text" placeholder="搜索站内商品" v-model="valuedata" />
				<a :href="'https://ai.m.taobao.com/search.html?q=' + valuedata + '&pid=mm_29459485_2465165_19786033&commend=all&unid=2a0&taoke_type=1&u=0'"><button class="but" @click="adv(valuedata)"></button></a>
				<div></div>
			</div>
			<div></div>
		</div>
		<h4>看看大家在搜什么!</h4>
		<div class="search_hot">
			<ul>
				<li>小西装 男</li>
				<li>假面骑士drive</li>
				<li>男腰包</li>
				<li>英雄联盟皮肤</li>
				<li>豆豆鞋</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Backfront from '@/components/backfront'
	export default {
		data() {
			return {
				valuedata: ""
			}
		},
		components: {
			Backfront
		},
		methods: {
			adv(data) {
				var that = this
				this.$http.get('/apa/sug?code=utf-8&q=' + data + '&area=wireless').then(function(data) {
					console.log(data)
				});
			},

		}
	}
</script>

<style>
	.search {
		width: 100%;
		height: 100%;
		background: #EEEEEE;
	}
	
	.search>h3 {
		width: 70%;
		height: 4rem;
		font-size: 1.85rem;
		color: white;
		position: absolute;
		top: 0;
		left: 15%;
		text-align: center;
		line-height: 4rem;
	}
	
	.search_content {
		width: 100%;
		height: 14rem;
		padding-top: 1.2rem;
		background: url(http://www.daogoutong.cn/m/template/w_chaofan/inc/images/search_bg.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.search_content>div:nth-child(1) {
		width: 90%;
		height: 3.2rem;
		margin-left: 5%;
		background: url(http://www.daogoutong.cn/m/template/w_chaofan/inc/images/input_bg.png) no-repeat;
		background-size: 100% 100%;
		z-index: 10;
	}
	
	.search_content>div:nth-child(1)>input {
		width: 75%;
		height: 100%;
		float: left;
		background: #F5F5F5;
		font-size: 1.3rem;
		outline: none;
		padding: 1rem;
		border: none;
		border-top-left-radius: 0.4rem;
		border-bottom-right-radius: 0.4rem;
	}
	
	.but {
		width: 25%;
		height: 100%;
		float: left;
		opacity: 0;
	}
	
	.search_content>div:nth-child(2) {
		width: 90%;
		height: 6.1rem;
		margin-left: 5%;
		margin-top: 1.6rem;
		background: url(http://www.daogoutong.cn/m/template/w_chaofan/inc/images/process.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.search>h4 {
		width: 100%;
		height: 3.5rem;
		font-size: 1.6rem;
		padding-left: 2.5rem;
		line-height: 3.5rem;
		background: white;
		border-bottom: 0.1rem solid gainsboro;
		font-weight: bold;
	}
	
	.search_hot {
		width: 100%;
		background: white;
	}
	
	.search_hot>ul {
		display: flex;
		flex-wrap: wrap;
	}
	
	.search_hot>ul>li {
		border: 0.1rem solid #dedede;
		border-radius: 2rem;
		padding: 0.5rem 1rem;
		margin: 1rem 2rem;
	}
</style>