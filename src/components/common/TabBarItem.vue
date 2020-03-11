<template>
  <div @click="itemcli">
    <slot name="itemicon"></slot>
    <slot name="itemtext"></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar-item",
    props:{
      path:{
        type:String
      }
    },
    methods:{
      // 点击事件跳转
      itemcli(){
        console.log("itemclick");
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>

</style>