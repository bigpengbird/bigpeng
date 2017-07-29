<template>
	<div class="me">
		<div class="enter_warp" v-show="changebol">
		<div class="enter_head">
			<div @click="backadd()"></div>
			<h3>导购通触屏版-登录</h3>
			<p @click="register()">注册</p>
		</div>
		<section class="enter">
			<ul>
				<li>
					<span>用户名</span>
					<input type="text" placeholder="请输入用户名或Email" />
				</li>
				<li>
					<span>密码</span>
					<input type="text" placeholder="请输入密码" />
				</li>
				<li>
					<span></span>
					<div>
						<mt-button size="small" class=btn>登入</mt-button>
					</div>
				</li>
			</ul>
		</section>
		</div>
		<div class="register" v-show="!changebol">
			<backfront></backfront>
		</div>
		<p>其他方式登录</p>
		<ul>
			<li>
				<div></div>
				<p>QQ账号登录</p>
			</li>
			<li>
				<div></div>
				<p>新浪微博账号登录</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import Backfront from '@/components/backfront'
	export default {
		data() {
			return {
				changebol:true
			}
		},
		methods: {
			register(){
				this.changebol=!this.changebol
			},
			backadd(){
				window.history.back()
			}
		},
		components: {
			Backfront
		}
	}
</script>

<style>
	.me {
		width: 100%;
		height: 100%;
		background: #EEEEEE;
	}
	
	.enter_head {
		width: 100%;
		height: 4rem;
		background: #EC1A5B;
		border: 0.1rem solid #EC1A5B;
		box-sizing: border-box;
	}
	
	.enter_head>div {
		float: left;
		width: 15%;
		height: 100%;
		background: url(../assets/back.png) no-repeat;
		background-size: 42%;
		background-position: center;
	}
	
	.enter_head>h3 {
		width: 70%;
		height: 4rem;
		font-size: 1.8rem;
		color: white;
		position: absolute;
		top: 0;
		left: 15%;
		text-align: center;
		line-height: 4rem;
	}
	
	.enter_head>p {
		float: right;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		width: 15%;
		height: 4rem;
		font-size: 1.85rem;
		color: white;
		text-align: left;
		line-height: 4rem;
	}
	
	.enter {
		width: 100%;
		height: 14.5rem;
		margin-top: 2rem;
	}
	
	.enter>ul>li {
		width: 90%;
		height: 4rem;
		padding: 0.1rem;
		margin-left: 5%;
		display: flex;
	}
	
	.enter>ul>li>span {
		width: 20%;
		height: 4rem;
		display: block;
		float: left;
		font-size: 1.4rem;
		line-height: 4rem;
	}
	
	.enter>ul>li>input {
		width: 70%;
		height: 2.5rem;
		float: left;
		margin: auto;
		background: #FAFAFA;
		border: none;
		outline: none;
		border: 0.1rem solid gainsboro;
		box-sizing: border-box;
		padding-left: 1rem;
		border-radius: 0.5rem;
		font-size: 1.2rem;
	}
	
	.enter>ul>li>input:hover {
		border: 0.1rem solid #9CBEF5;
		box-sizing: border-box;
	}
	
	.enter>ul>li>div {
		width: 70%;
		height: 2rem;
		margin: auto;
	}
	
	.enter>ul>li>div>.btn {
		width: 50%;
		height: 3rem;
		background: #EE2E5B;
		text-align: center;
		line-height: 3rem;
		color: white;
		font-size: 1.7rem;
	}
	
	.me>p {
		padding: 0 5%;
		font-size: 1.4rem;
		font-weight: bold;
	}
	
	.me>ul {
		width: 65%;
		margin-left: 5%;
		margin-top: 1rem;
	}
	
	.me>ul>li {
		width: 100%;
		height: 2.8rem;
		border-radius: 0.3rem;
	}
	
	.me>ul>li:nth-child(1) {
		background: #00A2FF;
		margin: 1rem 0;
	}
	
	.me>ul>li:nth-child(1)>div {
		width: 2.8rem;
		height: 2.8rem;
		background: url(../assets/QQ.png) no-repeat;
		background-size: 100% 100%;
		background-position: left;
		float: left;
	}
	
	.me>ul>li:nth-child(1)>p {
		padding-left: 1rem;
		float: left;
		font-size: 1.5rem;
		line-height: 2.8rem;
		color: white;
	}
	
	.me>ul>li:nth-child(2) {
		background: #FF0000;
	}
	
	.me>ul>li:nth-child(2)>div {
		width: 2.8rem;
		height: 2.8rem;
		background: url(../assets/wb2.png) no-repeat;
		background-size: 100% 100%;
		background-position: left;
		float: left;
	}
	
	.me>ul>li:nth-child(2)>p {
		padding-left: 1rem;
		float: left;
		font-size: 1.5rem;
		line-height: 2.8rem;
		color: white;
	}
</style>