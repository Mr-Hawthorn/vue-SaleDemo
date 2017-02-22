<template>
<div class="detail_pages">
  <div class="title">
    <i class="icon iconfont icon-fanhui" @click="back"></i>
    <i class="icon iconfont icon-zhuanfa"></i>
    <i class="icon iconfont icon-collect"></i>
  </div>
  <div class="con">
     <img v-bind:src=$route.query.imgsrc alt="">
     <div class="cons_titles">
       <h3>标题:{{$route.query.kind}}</h3>
       <span>￥{{$route.query.price}}</span>
       <span>销量{{$route.query.hot}}</span>
     </div>
     <div class="con_detail">
        <div>商品详情</div>
        <div>用户详情</div>
     </div>
  </div>
</div>
</template>

<style text="text/css" lang="less">
  @import url("./iconfont.css");
.detail_pages{
    background: #f2f2f2;
  .title {
    width: 100%;
    position:fixed;
    left: 0;
    top: 0;
      i {
      font-size: 25px !important;
      color: gray !important;
      line-height: 25px !important;
      float: right;
      padding: 15px;
      }
      i:nth-child(1){
        float: left;
      }
  }
  .con {
    width: 100%;
    img {
      width: 100%;
    }
    .cons_titles {
      width: 100%;
      height: 300px;
      background: orange !important;
      margin-bottom: 5px;
    }
    .con_detail {
      width: 100%;
      height: 500px;
      background: orange;
      display: flex;
      div {
        flex:1;
        text-align: center;
      }
    }

  }
}
</style>

<script type="text/javascript">

export default {
	data(){
    return {

    }
  },
  methods:{
    back:function() {
      this.$router.go(-2);
    }
  }

}

</script>
