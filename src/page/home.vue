<template>
	<div class="home">
		<div class="header">
			<a href="/search">
				<div></div>
				<p>搜索</p>
			</a>
		</div>
		<div class="lbt">
			<div>
				<div></div>
				<div></div>
			</div>
		</div>
		<section>
			<ul>
				<li v-for="(item,index) in list">
					<router-link :to="{path:'/ultrahigh/'+item.id}">
						<div>
							<div></div>
						</div>
						<p>{{item.name}}</p>
					</router-link>
				</li>
			</ul>
		</section>
		<div class="hot">
			<div class="hot_s">
				<div>
					<a href="/ultrahigh"><img src="http://www.daogoutong.cn/m/template/w_chaofan/inc/images/jd_lm_cf.png" alt="" /></a>
				</div>
				<div>
					<a href="/ultrahigh"><img src="http://www.daogoutong.cn/m/template/w_chaofan/inc/images/20fd.png" alt="" /></a>
					<a href="/ultrahigh"><img src="http://www.daogoutong.cn/m/template/w_chaofan/inc/images/30fl.png" alt="" /></a>
				</div>
			</div>
			<div class="hot_x">
				<a href="/ultrahigh"><img src="http://www.daogoutong.cn/m/template/w_chaofan/inc/images/phb_01.png" alt="" /></a>
				<a href="/ultrahigh"><img src="http://www.daogoutong.cn/m/template/w_chaofan/inc/images/ppt_01.png" alt="" /></a>
			</div>
		</div>
		<div class="ordination">
			<ul>
				<li v-for="(item,index) in listsort" @click="change(index)" :class="{active:activeindex==index}">{{item.name}}</li>
			</ul>
		</div>
		<div class="content">
			<ul>
				<li v-for="(item,index) in defaultsort">
					<a :href="item.url">
						<div>
							<img :src="item.img" v-lazy="item.img"/>
						</div>
						<div>
							<div>
								<p>{{item.title}}</p>
								<img src="http://www.daogoutong.cn/m/template/w_chaofan/inc/images/1.png" alt="" />
							</div>
							<div>￥{{item.discount_price}}</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				"list": [{
						name: '全部',
						id: '10000'
					},
					{
						name: '服饰',
						id: '10001'
					},
					{
						name: '鞋包',
						id:'10002'
					},
					{
						name: '美妆',
						id:'10003'
					},
					{
						name: '母婴',
						id:'10005'
					},
					{
						name: '家居',
						id:'10006'
					},
					{
						name: '美食',
						id:'10004'
					},
					{
						name: '数码',
						id:'10007'
					},
					{
						name: '其他',
						id:'10008'
					},
					{
						name: '预告',
						id: '10000'
					}
				],
				"listsort": [{
						name: '默认排序',

					}, {
						name: '最实惠',

					},
					{
						name: '返利最高',

					},
					{
						name: '人气最高',

					},
					{
						name: '9.9包邮',

					}
				],
				activeindex: 0,
				//默认排序
				defaultsort: []
			}
		},
		created() {
			var that = this
			this.$http.get('/api/m/?page=1&order_by=id&ajax=1&_=1500706716318').then(function(data) {
				that.defaultsort = data.data.r
			})
		},
		methods: {
			change(index) {
				this.activeindex = index
				switch(index) {
					case 0:
						var that = this
						this.$http.get('/api/m/?page=1&order_by=id&ajax=1&_=1500706716318').then(function(data) {
							that.defaultsort = data.data.r
						});
						break;
					case 1:
						var that = this
						this.$http.get('/api/m/?page=1&order_by=discount_price&ajax=1&_=1500706694224').then(function(data) {
							that.defaultsort = data.data.r
						});
						break;
					case 2:
						var that = this
						this.$http.get('/api/m/?page=1&order_by=fanli_bl&ajax=1&_=1500710501218').then(function(data) {
							that.defaultsort = data.data.r
						});
						break;
					case 3:
						var that = this
						this.$http.get('/api/m/?page=1&order_by=sell&ajax=1&_=1500710481364').then(function(data) {
							that.defaultsort = data.data.r
						});
						break;
					case 4:
						var that = this
						this.$http.get('/api/m/?page=1&order_by=jiu&ajax=1&_=1500710434621').then(function(data) {
							that.defaultsort = data.data.r
						});
						break;
				}
			}
		}
	}
</script>
<style scoped>
	html {
		font-size: 10px;
	}
	
	.home {
		width: 100%;
		height: 100%;
		background: #EEEEEE;
		text-decoration: none;
	}
	
	.header {
		width: 100%;
		height: 4rem;
		background: #EC1A5B;
		background-image: url("http://www.daogoutong.cn/upload/cflogo.png");
		background-repeat: no-repeat;
		background-size: 35%;
		background-position: center;
		border: 0.1rem solid #EC1A5B;
		box-sizing: border-box;
	}
	
	.header>a {
		display: block;
		width: 6rem;
		height: 3.9rem;
	}
	
	.header>a>div {
		float: left;
		width: 50%;
		height: 100%;
		background: url(../assets/ss1.png) no-repeat;
		background-size: 2.2rem;
		background-position: center;
	}
	
	.header>a>p {
		float: left;
		font-size: 1.4rem;
		color: white;
		margin-top: 1.3rem;
	}
	
	.lbt {
		width: 100%;
		height: 11rem;
		overflow: hidden;
	}
	
	.lbt>div {
		width: 200%;
		height: 100%;
		position: relative;
		animation: lbta 3s infinite;
	}
	
	.lbt>div>div {
		background: url(http://www.daogoutong.cn/upload/2016/1125/11105724837.jpg) no-repeat;
		width: 50%;
		height: 100%;
		background-size: 100%;
	}
	
	.lbt>div>div:nth-child(1) {
		float: left;
		position: absolute;
		left: 0;
	}
	
	.lbt>div>div:nth-child(2) {
		float: right;
	}
	
	@keyframes lbta {
		50% {
			left: 0%;
		}
		100% {
			left: -100%;
		}
	}
	
	section {
		width: 100%;
		height: 15.4rem;
		padding: 1rem 0 2rem 0;
	}
	
	section>ul {
		width: 100%;
		height: 12.8rem;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	section>ul>li {
		width: 20%;
		height: 6.4rem;
	}
	
	section>ul>li>a {
		display: inline-block;
		width: 100%;
		height: 6.4rem;
	}
	
	section>ul>li>a>div {
		width: 3.75rem;
		height: 3.75rem;
		border-radius: 50%;
		margin: 0.85rem 0.95rem;
		display: flex;
	}
	
	section>ul>li>a>div>div {
		width: 1.8rem;
		height: 1.8rem;
		margin: auto;
	}
	
	section>ul>li:nth-child(1)>a>div {
		background: #FF6600;
	}
	
	section>ul>li:nth-child(1)>a>div>div {
		background: url(../assets/qb.png);
		background-size: 1.8rem;
	}
	
	section>ul>li:nth-child(2)>a>div {
		background: #F28E74;
	}
	
	section>ul>li:nth-child(2)>a>div>div {
		background: url(../assets/fs.png);
		background-size: 1.8rem;
	}
	
	section>ul>li:nth-child(3)>a>div {
		background: #8AA6FF;
	}
	
	section>ul>li:nth-child(3)>a>div>div {
		background: url(../assets/xb.png);
		background-size: 1.8rem;
	}
	
	section>ul>li:nth-child(4)>a>div {
		background: #F87DB1;
	}
	
	section>ul>li:nth-child(4)>a>div>div {
		background: url(../assets/mz.png);
		background-size: 1.8rem;
	}
	
	section>ul>li:nth-child(5)>a>div {
		background: #33CCCC;
	}
	
	section>ul>li:nth-child(5)>a>div>div {
		background: url(../assets/my.png);
		background-size: 1.8rem;
	}
	
	section>ul>li:nth-child(6)>a>div {
		background: #6699FF;
	}
	
	section>ul>li:nth-child(6)>a>div>div {
		background: url(../assets/jj.png);
		background-size: 1.8rem;
	}
	
	section>ul>li:nth-child(7)>a>div {
		background: #FFB30F;
	}
	
	section>ul>li:nth-child(7)>a>div>div {
		background: url(../assets/ms.png);
		background-size: 1.8rem;
	}
	
	section>ul>li:nth-child(8)>a>div {
		background: #F76A44;
	}
	
	section>ul>li:nth-child(8)>a>div>div {
		background: url(../assets/sm.png);
		background-size: 1.8rem;
	}
	
	section>ul>li:nth-child(9)>a>div {
		background: #C88FD8;
	}
	
	section>ul>li:nth-child(9)>a>div>div {
		background: url(../assets/qt.png);
		background-size: 1.8rem;
	}
	
	section>ul>li:nth-child(10)>a>div {
		background: #A7E15B;
	}
	
	section>ul>li:nth-child(10)>a>div>div {
		background: url(../assets/yg.png);
		background-size: 1.8rem;
	}
	
	section>ul>li>a>p {
		text-align: center;
		color: #7F7F7F;
		font-size: 1.3rem;
		margin-right: 0.3rem;
	}
	
	.hot {
		width: 100%;
		height: 21rem;
	}
	
	.hot_s {
		width: 100%;
		height: 14.3rem;
	}
	
	.hot_s>div:nth-child(1) {
		width: 45%;
		height: 100%;
		float: left;
		border-bottom: 0.1rem solid gainsboro;
		border-right: 0.1rem solid gainsboro;
		box-sizing: border-box;
	}
	
	.hot_s>div:nth-child(1)>a>img {
		width: 100%;
		height: 100%;
	}
	
	.hot_s>div:nth-child(2) {
		width: 55%;
		height: 100%;
		float: left;
	}
	
	.hot_s>div:nth-child(2)>a {
		display: block;
		width: 100%;
		height: 50%;
		border-bottom: 0.1rem solid gainsboro;
		box-sizing: border-box;
	}
	.hot_s>div:nth-child(2)>a>img{
		
		width: 100%;
		height: 100%;
		
	}
	
	.hot_x {
		width: 100%;
		height: 6.7rem;
	}
	
	.hot_x>a:nth-child(1) {
		display: inline-block;
		width: 45%;
		height: 6.7rem;
		border-right: 0.1rem solid gainsboro;
		box-sizing: border-box;
		float: left;
	}
	
	.hot_x>a:nth-child(2) {
		display: inline-block;
		width: 55%;
		height: 6.7rem;
		float: left;
	}
	
	.hot_x>a>img {
		width: 100%;
		height: 100%;
	}
	
	.ordination {
		width: 100%;
		height: 3.5rem;
		background: #EEEEEE;
	}
	
	.ordination>ul>li {
		width: 20%;
		height: 3.5rem;
		float: left;
		line-height: 3.5rem;
		text-align: center;
		font-size: 1.3rem;
		border-bottom: 0.1rem solid gainsboro;
		border-right: 0.1rem solid #E9E9E9;
	}
	
	.ordination>ul>li.active {
		border-bottom: 0.25rem solid #EC1A5B;
		color: #EC1A5B;
	}
	
	.content {
		width: 100%;
		padding-top: 1rem;
	}
	
	.content>ul {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	.content>ul>li {
		width: 45%;
		height: 20.25rem;
		background: white;
		border: 1px solid #e5e5e5;
		margin-bottom: 1rem;
		
	}
	.content>ul>li>a{
		text-decoration: none;
	}
	.content>ul>li>a>div:nth-child(1)>img {
		width: 100%;
		height: 14.25rem;
	}
	.content>ul>li>a>div:nth-child(1)>img[lazy=loading] {
		width: 100%;
		height: 14.25rem;
		background-image: url(http://www.daogoutong.cn/m/template/w_chaofan/inc/images/lazy.gif);
		background-size: 100% 100%;
	}
	
	.content>ul>li>a>div:nth-child(2) {
		width: 100%;
		height: 4.5rem;
		padding: 0.43rem 0.5rem;
	}
	
	.content>ul>li>a>div:nth-child(2)>div:nth-child(1) {
		width: 100%;
		height: 2rem;
		margin-top: 0.2rem;
	}
	
	.content>ul>li>a>div:nth-child(2)>div:nth-child(2) {
		width: 100%;
		height: 2.5rem;
		font-size: 1.8rem;
		padding-top: 0.3rem;
		text-align: left;
		color: #EC1A5B;
	}
	
	.content>ul>li>a>div:nth-child(2)>div:nth-child(1)>p {
		width: 70%;
		float: left;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 1.5rem;
		color: black;
	}
	
	.content>ul>li>a>div:nth-child(2)>div:nth-child(1)>img {
		width: 30%;
		float: left;
	}
</style>