<template>
	<div id="app">
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="bgcimg"
    >
    </vue-particles>
    <div  class="tabbar_app">
      <tabbar></tabbar>
      <router-view/>
    </div>
	</div>
</template>

<script>
	import tabbar from "./components/common/TabBar";
  export default{
    name: 'App',
    components:{
    	tabbar
    }
  }
</script>

<style>
  #app{
    /*background-color: rgba(0,0,0,0.05);*/
  }
  .bgcimg{
    position:fixed;
    z-index: -1;
    top:0;
    width:100%;
  }
.tabbar_app{
  /*margin: 5% 0 0 0;*/
  width: 70%;
  /*margin: 0 10%;*/
  padding: 0 15%;
}

</style>
