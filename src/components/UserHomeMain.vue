<template>
    <div>
      <Usernav></Usernav>
      <div class="container-fluid">
        <router-view></router-view> 
        <!-- 加入UserHome/Cart/CustomerCheckout.vue的router-view -->
      </div>
    </div>
</template>

<script>
import Usernav from "./UserHomeNav"; //掛載UserHomeNav元件

export default {
    components:{
        Usernav, //Usernav元件
    },
  //   data() {
  //   return {
  //     isLoading: false,
  //   };
  // },
}
</script>
