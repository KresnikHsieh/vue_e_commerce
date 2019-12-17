<template>
    <div>
      <Usernav></Usernav>
      <div class="container-fluid">
        <router-view></router-view> 
        <!-- 加入UserHome/Cart/CustomerCheckout.vue的router-view -->
      </div>
      <Userfooter></Userfooter>
    </div>
</template>

<script>
import Usernav from './UserHomeNav'; //掛載UserHomeNav元件
import Userfooter from './UserHomeFooter'; //掛載UserHomeFooter元件

export default {
    components:{
        Usernav, //Usernav元件
        Userfooter
    },
  //   data() {
  //   return {
  //     isLoading: false,
  //   };
  // },
}
</script>
