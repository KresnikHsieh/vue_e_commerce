<template>
  <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td class="align-middle">{{ item.product.title }}</td>
            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle text-right">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-right">總計</td>
            <td class="text-right">{{ order.total }}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-right" v-if="order.is_paid === false">
        <button class="btn btn-danger">確認付款去</button>
      </div>
      <button class="btn btn-danger">
        <router-link to="/" class="shopping-cart-RL">回到主畫面</router-link>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      order:{
        user:{},
      },
      orderId:'', 
    }
  },
  methods:{
    getOrder(){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.order = response.data.order; //將get到的資料存入order中
        console.log("取得訂單資訊",response);
        vm.isLoading = false;
      });
    },
    payOrder(){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(url).then((response) => { //使用post送出訂單資訊
        if(response.data.success){ //成功送出訂單資訊後
          vm.getOrder(); //重新取得訂單資料
        };
        console.log("送出訂單資訊",response);
        vm.isLoading = false;
      });
    },
  },
  created(){
    this.orderId = this.$route.params.orderId; //取得路由網址上的orderId
    this.getOrder();
    console.log(this.orderId);
    
  },
}
</script>