<template>
  <div>
		<!-- loading頁面效果 -->
    <loading :active.sync="isLoading"></loading>
  
    <!-- 購物車格線container -->
    <div class="container cart-grid">
      <!-- 購物車格線row -->
      <div class="row">
        <!-- 購買人資料 -->
        <div class="col-md-7 row justify-content-center">
          <form class="col-md-6" @submit.prevent="createOrder()">
            <div class="form-group">
              <label for="useremail">Email</label>
              <!-- <input type="email" class="form-control" name="email" id="useremail"
                v-model="form.user.email" placeholder="請輸入 Email" required>
              <span class="text-danger"></span> -->
              <input type="email" class="form-control" name="email" id="useremail"
                v-validate="'required|email'"
                :class="{'is-invalid': errors.has('email')}"
                v-model="form.user.email" placeholder="請輸入 Email">
              <span class="text-danger" v-if="errors.has('email')">
                {{ errors.first('email') }}
              </span>
            </div>
          
            <div class="form-group">
              <label for="username">收件人姓名</label>
              <input type="text" class="form-control" name="name" id="username"
                v-validate="'required'" 
                :class="{'is-invalid':errors.has('name')}"
                v-model="form.user.name" placeholder="輸入姓名">
              <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
            </div>
          
            <div class="form-group">
              <label for="usertel">收件人電話</label>
              <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
            </div>
          
            <div class="form-group">
              <label for="useraddress">收件人地址</label>
              <input type="text" class="form-control" name="address" id="useraddress" 
                v-validate="'required'" 
                :class="{'is-invalid':errors.has('address')}"
                v-model="form.user.address"
                placeholder="請輸入地址">
              <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
            </div>
          
            <div class="form-group">
              <label for="comment">留言</label>
              <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
            </div>
            <div class="text-right">
              <button class="primary-btn order-submit">送出訂單</button>
            </div>
          </form>
        </div>
        <!-- /購買人資料 -->
        <!-- 購物車清單 -->
        <div class="col-md-5 justify-content-center">
          <div class="my-5 row justify-content-center">
            <table class="table">
              <thead>
                <th></th>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
              </thead>
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
                  <td class="align-middle">
                    <button type="button" @click.prevent="removeCartItem(item.id)" class="btn btn-outline-danger btn-sm">
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                  <td class="align-middle">
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-right">總計</td>
                  <td class="text-right">{{ cart.total }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <td colspan="3" class="text-right text-success">折扣價</td>
                  <td class="text-right text-success">{{ cart.final_total }}</td>
                </tr>
              </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" @click="addCouponCode()" type="button">套用優惠碼</button>
              </div>
            </div>
          </div>
        </div>
        <!-- /購物車清單 -->
      </div>
      <!-- /購物車格線row -->
    </div>
    <!-- /購物車格線container -->

    
		
  </div>
</template>

<style lang="scss">
@import "../.././assets/all.scss"; //.scss可省略

.tab-pane{
  padding-bottom: 100px;
}

.product-name{
  font-size: 20px;
}

.modal.fade {
    opacity: 0;
		&.show{
			opacity:1;
		}
	}
#page-nav-userhome{
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #D10024;
    border-color:#D10024;
}

.shop:before,.shop:after{
	z-index: 1;
	opacity: 0.8;
}
.shop:before{
	width:33%;
}

.shop .shop-img{
	z-index: 0;
}
.shop .shop-body h3{
	text-align: left;
}
.shop .shop-body .cta-btn{
	text-align: left;
}

.fa-shopping-cart,
.header-ctn>div>a>span,
.dropdown-toggle::after{
	color:#FFFF;
}

</style>


<style>
  .navbar-nav{
    display: block;
    -webkit-box-orient: horizontal;
    font-size: 14px;
    }
  a {
    color: #2B2D42;
    font-weight: 500;
    }
</style>

<script>
import $ from 'jquery'; //載入jQuery
import { ValidationProvider } from 'vee-validate';
export default {
  data() {
    return {
      products: [],
			product: {},
			pagination:[], //新增分頁
      status: {
        loadingItem: '', //判定畫面中何者元素正在讀取中
      },
      form:{
        user:{
           name:'',
          email:'',
          tel:'',
          address:'',
        },
        message:'',
      },
			cart:{},
      isLoading: false,
      coupon_code:'',
    };
  },
  methods: {
    // getProducts() {
    //   const vm = this;
    //   const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    //   vm.isLoading = true;
    //   this.$http.get(url).then((response) => {
    //     vm.products = response.data.products;
    //     console.log("getProducts取得全部產品資訊",response);
    //     vm.isLoading = false;
    //   });
		// },
		getProducts(page = 1){ //ES6: page的預設值為1
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`; //建立api的變數
        const vm = this;
        vm.isLoading = true; //啟動getProducts時啟用isLoading效果
        this.$http.get(api).then((response) => {
          console.log("getProducts:"+response.data);
          // if(response.data.success){
            vm.isLoading = false; //關閉getProducts時關閉isLoading效果
            vm.products = response.data.products;
            vm.pagination = response.data.pagination;
          // }
        });
      },
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        $('#productModal').modal('show'); //打開modal
        console.log("getProduct取得單一產品資訊",response);
        vm.status.loadingItem = '';//讀取完成後，將loadingItem的id設為空值
      });
    },
    addtoCart(id,qty = 1){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id : id,
        qty,
      };
      this.$http.post(url, {data: cart} ).then((response) => {
        $('#productModal').modal('hide'); //關閉modal
				console.log("成功加入購物車",response);
        vm.getCart();
				vm.status.loadingItem = '';//讀取完成後，將loadingItem的id設為空值
      });
    },
    getCart(){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
				vm.cart = response.data.data;
        console.log("取得購物車資訊",response);
        vm.isLoading = false;
      });
		},
    removeCartItem(id){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then((response) => { //使用delete行為
        vm.getCart();
        console.log("已刪除購物車中的內容",response);
        vm.isLoading = false;
      });
    },
    addCouponCode(){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = { //建立coupon變數對應couponCode的資料結構
        code : vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(url, {data:coupon}).then((response) => { //使用post行為送出data
        vm.getCart();
        console.log("已新增優惠券",response);
        vm.isLoading = false;
      });
    },
    createOrder(){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      vm.isLoading = true;
       this.$validator.validate().then((result) => {
        if (result) {
          this.$http.post(url, { data: order }).then((response) => {
            console.log('訂單已建立', response);
            if(response.data.success){ //當訂單資料成功傳送時
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);//跳轉至customer_checkout頁面
            };
            vm.isLoading = false;
          });
        } else {
          console.log('欄位不完整');
        }
      });
      // this.$http.post(url, {data:order}).then((response) => { //使用post行為送出data
      //   // vm.getCart();
      //   console.log("訂單已成立",response);
      //   vm.isLoading = false;
      // });
    },
  },
  created() {
    this.getProducts();
		this.getCart();
  },
};
</script>




