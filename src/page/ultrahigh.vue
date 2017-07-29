<template>
	<div class="ultrahigh">
		<backfront></backfront>
		<h3>{{titletop}}</h3>
		<div class="ultrahigh_nav">
			<ul>
				<li :class="{active:updown}" @click="changefx()">商品分类</li>
				<li @click="productlist(1)" :class="{active:changecolor==1}">最实惠</li>
				<li @click="productlist(2)" :class="{active:changecolor==2}">返最多</li>
				<li @click="productlist(3)" :class="{active:changecolor==3}">最热卖</li>
				<li @click="productlist(4)" :class="{active:changecolor==4}">9.9包邮</li>
			</ul>
			<ul v-show="updown">
				<li v-for="(item,index) in list" @click="classify(item.id,item.name)">
					<router-link :to="{path:'/ultrahigh/'+item.id}">
						{{item.name}}
					</router-link>
				</li>
			</ul>
		</div>
		<div class="ultrahigh_content">
			<ul>
				<li v-for="(item,index) in catalogue">
					<a :href="item.url">
						<div>
							<img :src="item.img" v-lazy="item.img" />
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
	import Backfront from '@/components/backfront'
	export default {
		data() {
			return {
				updown: false,
				list: [{
						name: '服饰',
						id: '10001'
					},
					{
						name: '鞋包',
						id: '10002'
					},
					{
						name: '美妆',
						id: '10003'
					},
					{
						name: '母婴',
						id: '10005'
					},
					{
						name: '家居',
						id: '10006'
					},
					{
						name: '美食',
						id: '10004'
					},
					{
						name: '数码',
						id: '10007'
					},
					{
						name: '其他',
						id: '10008'
					}
				],
				catalogue: [],
				changecolor: false,
				titletop: "商品列表",
				//初始化分类
				classifyid: "",
				//初始化的数据
				classifydata: "热销中",
				num: [

					{
						classurl: 1500885389743,
						id: 10001
					},
					{
						classurl: 1500895686940,
						id: 10001
					},
					{
						classurl: 1500895709317,
						id: 10001
					},
					{
						classurl: 1500895721789,
						id: 10001
					},
					{
						classurl: 1500895050107,
						id: 10002
					},
					{
						classurl: 1500895167832,
						id: 10002
					},
					{
						classurl: 1500895191832,
						id: 10002
					},
					{
						classurl: 1500895232584,
						id: 10002
					},
					{
						classurl: 1500896853480,
						id: 10003
					},
					{
						classurl: 1500896869597,
						id: 10003
					},
					{
						classurl: 1500896881572,
						id: 10003
					},
					{
						classurl: 1500896893972,
						id: 10003
					},
					{
						classurl: 1500894669751,
						id: 10004
					},
					{
						classurl: 1500894682175,
						id: 10004
					},
					{
						classurl: 1500894693843,
						id: 10004
					},
					{
						classurl: 1500894726884,
						id: 10004
					},
					{
						classurl: 1500894669751,
						id: 10005
					},
					{
						classurl: 1500894682175,
						id: 10005
					},
					{
						classurl: 1500894693843,
						id: 10005
					},
					{
						classurl: 1500894726884,
						id: 10005
					},
					{
						classurl: 1500894669751,
						id: 10006
					},
					{
						classurl: 1500894682175,
						id: 10006
					},
					{
						classurl: 1500894693843,
						id: 10006
					},
					{
						classurl: 1500894726884,
						id: 10006
					},
					{
						classurl: 1500894669751,
						id: 10007
					},
					{
						classurl: 1500894682175,
						id: 10007
					},
					{
						classurl: 1500894693843,
						id: 10007
					},
					{
						classurl: 1500894726884,
						id: 10007
					},
					{
						classurl: 1500894669751,
						id: 10008
					},
					{
						classurl: 1500894682175,
						id: 10008
					},
					{
						classurl: 1500894693843,
						id: 10008
					},
					{
						classurl: 1500894726884,
						id: 10008
					},

				]
			}
		},
		components: {
			Backfront
		},
		created() {
			var id = this.$route.params.id
			for(var i = 0; i < this.list.length; i++) {
				if(this.list[i].id === id) {
					this.titletop = this.list[i].name
					var that = this
					this.$http.get('/api/m/index.php?mod=goods&act=index&cid=' + id + '&page=1&order_by=&ajax=1&_=1500882428670').then(function(data) {
						that.catalogue = data.data.r
					})
				} else if(id === "10000") {
					var that = this
					this.$http.get('/api/m/?page=1&order_by=id&ajax=1&_=1500706716318').then(function(data) {
						that.catalogue = data.data.r
					})

				}
			}
		},
		methods: {
			changefx() {
				this.updown = !this.updown
				this.changecolor = false
			},
			productlist(index) {
				var id = this.$route.params.id
				switch(index) {
					case 1:
						for(var i = 0; i < this.num.length; i++) {
							if(this.classifyid == this.num[i].id||this.num[i].id==id) {
								var that = this ////http://www.daogoutong.cn/m/index.php?mod=goods&act=index&cid=10001&page=1&order_by=discount_price&ajax=1&_=1500885389743	
								this.$http.get('/api/m/index.php?mod=goods&act=index&cid=' + this.num[i].id + '&page=1&order_by=discount_price&ajax=1&_=' + this.num[i].classurl + "'").then(function(data) {
									that.catalogue = data.data.r
								})
							} else if(this.titletop == "商品列表") {
								var that = this
								//http://www.daogoutong.cn/m/index.php?mod=goods&act=index&sort=1&page=1&order_by=discount_price&ajax=1&_=1500897846473
								this.$http.get('/api/m/index.php?mod=goods&act=index&sort=1&page=1&order_by=discount_price&ajax=1&_=1500901806717').then(function(data) {
									that.catalogue = data.data.r
								});
							}
						}
						this.changecolor = index
						this.updown = false
						break;
					case 2:
						for(var i = 0; i < this.num.length; i++) {
							if(this.classifyid == this.num[i].id||this.num[i].id==id) {
								var that = this
								////http://www.daogoutong.cn/m/index.php?mod=goods&act=index&cid=10001&page=1&order_by=fanli_bl&ajax=1&_=1500893859330
								this.$http.get('/api/m/index.php?mod=goods&act=index&cid=' + this.num[i].id + '&order_by=fanli_bl&ajax=1&_=' + this.num[i].classurl + "'").then(function(data) {
									that.catalogue = data.data.r
								})
							} else if(this.titletop == "商品列表") {
								var that = this
								this.$http.get('/api/m/index.php?mod=goods&act=index&sort=1&page=1&order_by=fanli_bl&ajax=1&_=1500901865178').then(function(data) {
									that.catalogue = data.data.r
								});
							}
						}
						this.changecolor = index
						this.updown = false
						break;
					case 3:
						for(var i = 0; i < this.num.length; i++) {
							if(this.classifyid == this.num[i].id||this.num[i].id==id) {
								var that = this
								//http://www.daogoutong.cn/m/index.php?mod=goods&act=index&cid=10001&page=1&order_by=sell&ajax=1&_=1500894002944
								this.$http.get('/api/m/index.php?mod=goods&act=index&cid=' + this.num[i].id + '&page=1&order_by=sell&ajax=1&_=' + this.num[i].classurl + "'").then(function(data) {
									that.catalogue = data.data.r
								})
							} else if(this.titletop == "商品列表") {
								var that = this
								this.$http.get('/api/m/index.php?mod=goods&act=index&sort=1&page=1&order_by=sell&ajax=1&_=150090191167').then(function(data) {
									that.catalogue = data.data.r
								});
							}
						}
						this.changecolor = index
						this.updown = false
						break;
					case 4:
						for(var i = 0; i < this.num.length; i++) {
							if(this.classifyid == this.num[i].id||this.num[i].id==id) {
								var that = this
								//http://www.daogoutong.cn/m/index.php?mod=goods&act=index&cid=10001http://www.daogoutong.cn/m/index.php?mod=goods&act=index&cid=10001&page=1&order_by=jiu&ajax=1&_=15008940470871500894047087
								this.$http.get('/api/m/index.php?mod=goods&act=index&cid=' + this.num[i].id + '&page=1&order_by=jiu&ajax=1&_=' + this.num[i].classurl + "'").then(function(data) {
									that.catalogue = data.data.r
								})
							} else if(this.titletop == "商品列表") {
								var that = this
								this.$http.get('/api/m/index.php?mod=goods&act=index&sort=1&page=1&order_by=jiu&ajax=1&_=1500901929610').then(function(data) {
									that.catalogue = data.data.r
								});
							}
						}
						this.changecolor = index
						this.updown = false
						break;
				}
			},
			classify(id, name) {
				var that = this
				this.$http.get('/api/m/index.php?mod=goods&act=index&cid=' + id + '&page=1&order_by=&ajax=1&_=1500882428670').then(function(data) {
					that.catalogue = data.data.r
					that.titletop = name
					that.updown = false
					that.classifyid = id
				})
			}
		}
	}
</script>

<style>
	.ultrahigh {
		width: 100%;
		height: 100%;
		background: #EEEEEE;
		text-decoration: none;
	}
	
	.ultrahigh>h3 {
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
	
	.ultrahigh_nav {
		width: 100%;
		height: auto;
	}
	
	.ultrahigh_nav>ul:nth-child(1) {
		width: 100%;
		height: 3.2rem;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		background: white;
	}
	
	.ultrahigh_nav>ul:nth-child(1)>li {
		padding: 0.8rem 0.5rem;
		border-right: 0.1rem solid #e9e9e9;
		font-size: 1.3rem;
	}
	
	.ultrahigh_nav>ul:nth-child(1)>li.active {
		color: red;
	}
	
	.ultrahigh_nav>ul:nth-child(1)>li:nth-child(5) {
		border: none;
	}
	
	.ultrahigh_nav>ul:nth-child(1)>li:nth-child(1) {
		background: url(../assets/down.png) no-repeat;
		background-size: 30%;
		padding-right: 2rem;
		background-position: right;
	}
	
	.ultrahigh_nav>ul:nth-child(1)>li:nth-child(1).active {
		background: url(../assets/up.png) no-repeat;
		background-size: 30%;
		padding-right: 2rem;
		background-position: right;
	}
	
	.ultrahigh_nav>ul:nth-child(2) {
		width: 100%;
		background: white;
		position: absolute;
		left: 0;
		top: 7.2rem;
		border-top: 0.1rem solid #e9e9e9;
	}
	
	.ultrahigh_nav>ul:nth-child(2)>li {
		width: 25%;
		background: white;
		float: left;
		text-align: center;
		padding: 1rem 0;
		border-bottom: 0.1rem solid gainsboro;
		font-size: 1.3rem;
	}
	.ultrahigh_nav>ul:nth-child(2)>li>a{
		color: black;
		text-decoration: none;
	}
	
	.ultrahigh_content {
		width: 100%;
		background: #EEEEEE;
		padding-top: 1rem;
	}
	
	.ultrahigh_content>ul {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	.ultrahigh_content>ul>li {
		width: 45%;
		height: 20.25rem;
		background: white;
		border: 1px solid #e5e5e5;
		margin-bottom: 1rem;
	}
	
	.ultrahigh_content>ul>li>a {
		text-decoration: none;
	}
	
	.ultrahigh_content>ul>li>a>div:nth-child(1)>img {
		width: 100%;
		height: 14.25rem;
	}
	
	.ultrahigh_content>ul>li>a>div:nth-child(1)>img[lazy=loading] {
		width: 100%;
		height: 14.25rem;
		background-image: url(http://www.daogoutong.cn/m/template/w_chaofan/inc/images/lazy.gif);
		background-size: 100%;
	}
	
	.ultrahigh_content>ul>li>a>div:nth-child(2) {
		width: 100%;
		height: 4.5rem;
		padding: 0.43rem 0.5rem;
	}
	
	.ultrahigh_content>ul>li>a>div:nth-child(2)>div:nth-child(1) {
		width: 100%;
		height: 2rem;
		margin-top: 0.2rem;
	}
	
	.ultrahigh_content>ul>li>a>div:nth-child(2)>div:nth-child(2) {
		width: 100%;
		height: 2.5rem;
		padding-top: 0.3rem;
		text-align: left;
		font-size: 1.8rem;
		color: #EC1A5B;
	}
	
	.ultrahigh_content>ul>li>a>div:nth-child(2)>div:nth-child(1)>p {
		width: 70%;
		float: left;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 1.5rem;
		color: black;
	}
	
	.ultrahigh_content>ul>li>a>div:nth-child(2)>div:nth-child(1)>img {
		width: 30%;
		float: left;
	}
</style>