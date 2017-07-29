<template>
	<div class="store">
		<backfront></backfront>
		<h3>商城-导购通触屏版</h3>
		<ul>
			<li v-for="(item,index) in blogrolls">
				<a :href="item.url">
					<span>
						<img :src="item.imgurl" alt="" />
					</span>
					<span>{{item.name}}</span>
					<span>{{item.Collagen}}</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import Backfront from '@/components/backfront'
	export default {
		data() {
			return {
				blogrolls: [{
						url: 'http://www.daogoutong.cn/m/index.php?mod=jump&act=index&a=mall&url=http%3A%2F%2Fm.jd.com',
						name: '京东 | 最高返 ',
						imgurl: 'http://img4.duoduo123.com/upload/2016/1230/10315626185.png',
						Collagen: '68%'
					},
					{
						url: 'http://www.daogoutong.cn/m/index.php?mod=jump&act=index&a=mall&url=http%3A%2F%2Fm.dangdang.com',
						name: '当当 | 最高返 ',
						imgurl: 'http://img4.duoduo123.com/upload/2016/1230/10564132406.png',
						Collagen: '4.2%'
					},
					{
						url: 'http://www.daogoutong.cn/m/index.php?mod=jump&act=index&a=mall&url=http%3A%2F%2Fm.yhd.com',
						name: '1号店 | 最高返 ',
						imgurl: 'http://img4.duoduo123.com/upload/2016/1230/10434083259.png',
						Collagen: '4.2%'
					},
					{
						url: 'http://www.daogoutong.cn/m/index.php?mod=jump&act=index&a=mall&url=http%3A%2F%2Fm.suning.com',
						name: '苏宁易购 | 最高返  ',
						imgurl: 'http://img4.duoduo123.com/upload/2016/1230/10300943964.png',
						Collagen: '2.8%'
					},
					{
						url: 'http://www.daogoutong.cn/m/index.php?mod=jump&act=index&a=mall&url=http%3A%2F%2Fm.gome.com.cn',
						name: '国美在线 | 最高返  ',
						imgurl: 'http://img4.duoduo123.com/upload/2016/1230/10594968128.png',
						Collagen: '2.8%'
					},
					{
						url: 'http://www.daogoutong.cn/m/index.php?mod=jump&act=index&a=mall&url=http%3A%2F%2Fm.vip.com',
						name: '唯品会 | 最高返 ',
						imgurl: 'http://img4.duoduo123.com/upload/2016/1230/10500062025.png',
						Collagen: '5%'
					},
					{
						url: 'http://www.daogoutong.cn/m/index.php?mod=jump&act=index&a=mall&url=http%3A%2F%2Fm.mogujie.com%2Fx6',
						name: '蘑菇街 | 最高返 ',
						imgurl: 'http://img4.duoduo123.com/upload/2016/1230/14470240042.png',
						Collagen: '50%'
					},
					{
						url: 'http://www.daogoutong.cn/m/index.php?mod=jump&act=index&a=mall&url=http%3A%2F%2Fm.meilishuo.com',
						name: '美丽说 | 最高返 ',
						imgurl: 'http://img4.duoduo123.com/upload/2017/0626/08540838303.png',
						Collagen: '4.9%'
					},
					{
						url: 'http://www.daogoutong.cn/m/index.php?mod=jump&act=index&a=mall&url=http%3A%2F%2Fm.mi.com%2Fv2.html',
						name: '小米手机 | 最高返 ',
						imgurl: 'http://img4.duoduo123.com/upload/2017/0104/10083614839.png',
						Collagen: '16%'
					}
				]
			}
		},
		components: {
			Backfront
		}
	}
</script>

<style>
	.store{
		width: 100%;
		height: auto;
		background: #EEEEEE;
	}
	.store>h3 {
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
	.store>ul{
		padding-bottom: 1rem;
	}
	.store>ul>li{
		width: 95%;
		height: 9.5rem;
		margin:1rem 2.5%;
		padding: 1rem;
		border: 0.1rem solid #cdc2b0;
		box-sizing: border-box;
		background: #fffdf7;
		border-radius: 0.5rem;
		display: flex;
	}
	.store>ul>li>a{
		display: block;
		width: 95%;
		height: 95%;
		margin: auto;
		display: flex;
		font-size: 1.4rem;
		text-decoration: none;
	}
	.store>ul>li>a>span{
		margin: auto;
	}
	.store>ul>li>a>span:nth-child(2){
		padding-left: 1rem;
		color: black;
	}
	.store>ul>li>a>span:nth-child(3){
		font-size: 1.5rem;
		color: red;
	}
</style>