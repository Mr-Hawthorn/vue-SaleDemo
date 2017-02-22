<template>
<div class="class">
	<header1 title="分类"></header1>
	<div>
		<ul class="class_nav" id="classNav">
			<li v-html="text" @click="bol=!bol">生活食品</li>
			<li>价格从高到低</li>
			<li>销量优先</li>
		</ul>
		<transition name="fade" mode="out-in">
			<div v-if="bol" class="detail">
				<div v-for="(kind,index) in kinds" @click="shuffle(kind,index)" v-bind:class="{ active : isActive(index)}">{{kind}}</div>
			</div>
		</transition>
	</div>
	<div class="class_con">
		<div id="flip-list-demo" class="demo">
      <transition-group name="flip-list" tag="ul">
        <li v-show="item.index === num" v-for="item in dd" v-bind:key="item" @click="transmit(item)">
					<router-link to="/detail_pages">
				    <img v-bind:src="item.imgsrc" alt="">
            <div>{{item.kind}}</div>
					  <span>￥{{item.price}}</span>
					  <span>销量:{{item.hot}}</span>
				  </router-link>
        </li>
      </transition-group>
    </div>
	</div>
</div>
</template>
<style type="text/css" lang="less">
body{
	width: 100%;
	height: 100%;
}
.class_nav{
	display: flex;
	font-size: 17px;
	li{
		flex:1;
		text-align: center;
		line-height: 20px;
		height: 20px;
		position: relative;
		padding: 5px;
		color: #999999;
	}
}

.detail{
	box-shadow: 0 1px 1px 1px gray;
	width: 98%;
	display: flex;
	flex-wrap:wrap;
	justify-content: space-between;
	padding: 1%;
	div{
		font-size: 15px;
		text-align: center;
		width: 21%;
		background: #f2f2f2;
		border-radius: 5px;
		margin-bottom: 1%;
		padding: 2px;
	}
	.active{
		color:white;
		background: orange;
	}
}

/*显示*/
.fade-enter{opacity: 0;}
.fade-enter-active{
	transition:opacity 0.5s;
}
/*隐藏*/
.fade-leave{opacity: 1;}
.fade-leave-active{
	opacity: 0;
	transition:0.5s;
}

.flip-list-move {
  transition: transform 0.5s;
}
#flip-list-demo{
	ul{
		background: #f2f2f2;
		width: 96%;
		display: flex;
		flex-wrap:wrap;
		justify-content: space-between;
		padding: 2%;
	}
	li{
   width: 48%;
	 height: 250px;
   font-size: 10px;
	 text-align: center;
	 background: #ffffff;
	 margin-bottom: 5px;
	 img{
	 	width: 100%;
		height: 75%;
	 }
	 div{
	 	font-size: 25px;
	 }
	 span{
	 	font-size: 15px;
	 	color: red;
	 }
	}
}

</style>
<script type="text/javascript">
import Header1 from '../../component/header/header.vue';
export default {
	components:{
		Header1
	},
	data(){
		return {
			bol:true,
			num:0,
			text:"生活食品",
			kinds:["生活食品","生活用品","生活家居","百货","家电","汽车配件","箱包","珠宝"],
			dd:[
				{kind:"生活食品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/food1.jpg",price:11,hot:22,index:0},
				{kind:"生活食品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/food2.jpg",price:11,hot:22,index:0},
				{kind:"生活食品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/food3.jpg",price:11,hot:22,index:0},
				{kind:"生活食品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/food3.jpg",price:11,hot:22,index:0},
				{kind:"生活食品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/food2.jpg",price:11,hot:22,index:0},
				{kind:"生活食品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/food3.jpg",price:11,hot:22,index:0},
				{kind:"生活食品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/food1.jpg",price:11,hot:22,index:0},
				{kind:"生活食品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/food2.jpg",price:11,hot:22,index:0},

				{kind:"生活用品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/goods1.jpg",price:11,hot:22,index:1},
				{kind:"生活用品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/goods2.jpg",price:11,hot:22,index:1},
				{kind:"生活用品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/goods2.jpg",price:11,hot:22,index:1},
				{kind:"生活用品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/goods2.jpg",price:11,hot:22,index:1},
				{kind:"生活用品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/goods2.jpg",price:11,hot:22,index:1},
				{kind:"生活用品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/goods2.jpg",price:11,hot:22,index:1},
				{kind:"生活用品",imgsrc:"http://oikhed8vv.bkt.clouddn.com/goods2.jpg",price:11,hot:22,index:1},



				{kind:"生活家居",imgsrc:"http://oikhed8vv.bkt.clouddn.com/jiaju.jpg",price:11,hot:22,index:2},
				{kind:"生活家居",imgsrc:"http://oikhed8vv.bkt.clouddn.com/jiaju1.jpg",price:11,hot:22,index:2},
				{kind:"生活家居",imgsrc:"http://oikhed8vv.bkt.clouddn.com/jiaju2.jpg",price:11,hot:22,index:2},
				{kind:"生活家居",imgsrc:"http://oikhed8vv.bkt.clouddn.com/jiaju3.jpg",price:11,hot:22,index:2},
				{kind:"生活家居",imgsrc:"http://oikhed8vv.bkt.clouddn.com/jiaju3.jpg",price:11,hot:22,index:2},
				{kind:"生活家居",imgsrc:"http://oikhed8vv.bkt.clouddn.com/jiaju3.jpg",price:11,hot:22,index:2},
				{kind:"生活家居",imgsrc:"http://oikhed8vv.bkt.clouddn.com/jiaju3.jpg",price:11,hot:22,index:2},


				{kind:"百货",imgsrc:"http://oikhed8vv.bkt.clouddn.com/life1.jpg",price:11,hot:22,index:3},
				{kind:"百货",imgsrc:"http://oikhed8vv.bkt.clouddn.com/life2.jpg",price:11,hot:22,index:3},
				{kind:"百货",imgsrc:"http://oikhed8vv.bkt.clouddn.com/life2.jpg",price:11,hot:22,index:3},
				{kind:"百货",imgsrc:"http://oikhed8vv.bkt.clouddn.com/life2.jpg",price:11,hot:22,index:3},
				{kind:"百货",imgsrc:"http://oikhed8vv.bkt.clouddn.com/life2.jpg",price:11,hot:22,index:3},


				{kind:"家电",imgsrc:"http://oikhed8vv.bkt.clouddn.com/appliance1.jpg",price:11,hot:22,index:4},
				{kind:"家电",imgsrc:"http://oikhed8vv.bkt.clouddn.com/appliance2.jpg",price:11,hot:22,index:4},
				{kind:"家电",imgsrc:"http://oikhed8vv.bkt.clouddn.com/appliance3.jpg",price:11,hot:22,index:4},
				{kind:"家电",imgsrc:"http://oikhed8vv.bkt.clouddn.com/appliance3.jpg",price:11,hot:22,index:4},
				{kind:"家电",imgsrc:"http://oikhed8vv.bkt.clouddn.com/appliance3.jpg",price:11,hot:22,index:4},
				{kind:"家电",imgsrc:"http://oikhed8vv.bkt.clouddn.com/appliance3.jpg",price:11,hot:22,index:4},


				{kind:"汽车配件",imgsrc:"http://oikhed8vv.bkt.clouddn.com/accessories1.jpg",price:11,hot:22,index:5},
				{kind:"汽车配件",imgsrc:"http://oikhed8vv.bkt.clouddn.com/accessories2.jpg",price:11,hot:22,index:5},
				{kind:"汽车配件",imgsrc:"http://oikhed8vv.bkt.clouddn.com/accessories3.jpg",price:11,hot:22,index:5},
				{kind:"汽车配件",imgsrc:"http://oikhed8vv.bkt.clouddn.com/accessories2.jpg",price:11,hot:22,index:5},
				{kind:"汽车配件",imgsrc:"http://oikhed8vv.bkt.clouddn.com/accessories2.jpg",price:11,hot:22,index:5},
				{kind:"汽车配件",imgsrc:"http://oikhed8vv.bkt.clouddn.com/accessories2.jpg",price:11,hot:22,index:5},
				{kind:"汽车配件",imgsrc:"http://oikhed8vv.bkt.clouddn.com/accessories2.jpg",price:11,hot:22,index:5},


				{kind:"箱包",imgsrc:"http://oikhed8vv.bkt.clouddn.com/package1.jpg",price:11,hot:22,index:6},
				{kind:"箱包",imgsrc:"http://oikhed8vv.bkt.clouddn.com/package2.jpg",price:11,hot:22,index:6},
				{kind:"箱包",imgsrc:"http://oikhed8vv.bkt.clouddn.com/package3.jpg",price:11,hot:22,index:6},
				{kind:"箱包",imgsrc:"http://oikhed8vv.bkt.clouddn.com/package3.jpg",price:11,hot:22,index:6},
				{kind:"箱包",imgsrc:"http://oikhed8vv.bkt.clouddn.com/package3.jpg",price:11,hot:22,index:6},
				{kind:"箱包",imgsrc:"http://oikhed8vv.bkt.clouddn.com/package3.jpg",price:11,hot:22,index:6},
				{kind:"箱包",imgsrc:"http://oikhed8vv.bkt.clouddn.com/package3.jpg",price:11,hot:22,index:6},



				{kind:"珠宝",imgsrc:"http://oikhed8vv.bkt.clouddn.com/Jewelry1.jpg",price:11,hot:22,index:7},
				{kind:"珠宝",imgsrc:"http://oikhed8vv.bkt.clouddn.com/Jewelry2.png",price:11,hot:22,index:7},
				{kind:"珠宝",imgsrc:"http://oikhed8vv.bkt.clouddn.com/Jewelry3.jpg",price:11,hot:22,index:7},
				{kind:"珠宝",imgsrc:"http://oikhed8vv.bkt.clouddn.com/Jewelry1.jpg",price:11,hot:22,index:7},
				{kind:"珠宝",imgsrc:"http://oikhed8vv.bkt.clouddn.com/Jewelry2.png",price:11,hot:22,index:7},
				{kind:"珠宝",imgsrc:"http://oikhed8vv.bkt.clouddn.com/Jewelry3.jpg",price:11,hot:22,index:7},
				{kind:"珠宝",imgsrc:"http://oikhed8vv.bkt.clouddn.com/Jewelry2.png",price:11,hot:22,index:7},

			  ],
		}
	},
	methods:{
		choose:function(){
			console.log(this.bol)
		},
		shuffle: function (kind,index) {
      this.dd = _.shuffle(this.dd);
			this.num = index;
			this.text = kind;
			this.bol=!this.bol;
    },
		isActive: function (index) {
			if(index===this.num){
				return true;
			}
			else {
				return false;
			}
		},
		transmit:function (item) {
			console.log(item);
        this.$router.push({
					name:"detail",
					query:item
				})
		}
		}
	}


</script>
