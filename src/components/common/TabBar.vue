<template>
  <div>
    <div id="tabbar">
      <tabbar-item class="tabbaritem" :path="'/home'">
        <img slot="itemicon" src="../../assets/logo.png">
        <div slot="itemtext">home</div>
      </tabbar-item>
      <tabbar-item class="tabbaritem" :path="'/food'">
        <img slot="itemicon" src="../../assets/logo.png">
        <div slot="itemtext">food</div>
      </tabbar-item>
      <tabbar-item class="tabbaritem" :path="'/book'">
        <img slot="itemicon" src="../../assets/logo.png">
        <div slot="itemtext">book</div>
      </tabbar-item>
      <tabbar-item class="tabbaritem" :path="'/goods'">
        <img slot="itemicon" src="../../assets/logo.png">
        <div slot="itemtext">goods</div>
      </tabbar-item>
    </div>

  </div>
</template>

<script>
  import TabbarItem from './TabBarItem'

  export default {
    name: "tabbar",
    components: {TabbarItem},
    methods: {
      itemcli() {
        console.log("itemclick")
      }
    }
  }
</script>

<style scoped>
  img {
    width: 44px;
    height: 44px;
  }

  #tabbar {
    display: flex;
    background-color: #efefef;

    box-shadow: 0 5px 2px rgba(0, 0, 0, 0.1);

  }

  .tabbaritem {
    flex: 1;

    text-align: center;
  }
</style>