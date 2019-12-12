<template>
  <div>
		<!-- loading頁面效果 -->
    <loading :active.sync="isLoading"></loading>
    <!-- HEADER -->
		<header>
			<!-- TOP HEADER -->
			<div id="top-header">
				<div class="container">
					<ul class="header-links pull-left">
						<li><a href="#"><i class="fa fa-phone"></i> +021-95-51-84</a></li>
						<li><a href="#"><i class="fa fa-envelope-o"></i> email@email.com</a></li>
						<li><a href="#"><i class="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
					</ul>
					<ul class="header-links pull-right">
						<li><a href="#"><i class="fa fa-dollar"></i> USD</a></li>
						<li><a href="#"><i class="fa fa-user-o"></i> My Account</a></li>
					</ul>
				</div>
			</div>
			<!-- /TOP HEADER -->

			<!-- MAIN HEADER -->
			<div id="header">
				<!-- container -->
				<div class="container">
					<!-- row -->
					<div class="row">
						<!-- LOGO -->
						<div class="col-md-3">
							<div class="header-logo">
								<a href="#" class="logo">
									<!-- <img src="https://colorlib.com/preview/theme/electro/img/logo.png" alt=""> -->
									<img src="../../assets/aperture_logo.png">
								</a>
							</div>
						</div>
						<!-- /LOGO -->

						<!-- SEARCH BAR -->
						<div class="col-md-6">
							<div class="header-search">
								<form>
									<select class="input-select">
										<option value="0">All Categories</option>
										<option value="1">Category 01</option>
										<option value="1">Category 02</option>
									</select>
									<input class="input" placeholder="Search here">
									<button class="search-btn">Search</button>
								</form>
							</div>
						</div>
						<!-- /SEARCH BAR -->

						<!-- ACCOUNT -->
						<div class="col-md-3 clearfix">
							<div class="header-ctn">
								<!-- Wishlist -->
								<!-- <div>
									<a href="#">
										<i class="fa fa-heart-o"></i>
										<span>Your Wishlist</span>
										<div class="qty">2</div>
									</a>
								</div> -->
								<!-- /Wishlist -->

								<!-- Cart -->
								<div class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
										<i class="fa fa-shopping-cart"></i>
										<span>購物車</span>
										<div class="qty">{{ cart.total }}</div>
									</a>
									
									<div class="cart-dropdown">
										<div class="cart-list">
											<div class="product-widget">
												<div class="product-img">
													<img src="../../assets/img/lens.jpg" alt="">
												</div>
												<div class="product-body">
													<h3 class="product-name"><a href="#">product name goes here</a></h3>
													<h4 class="product-price"><span class="qty">1x</span>$980.00</h4>
												</div>
												<button class="delete"><i class="fa fa-close"></i></button>
											</div>

											<div class="product-widget">
												<div class="product-img">
													<img src="https://colorlib.com/preview/theme/electro/img/product02.png" alt="">
												</div>
												<div class="product-body">
													<h3 class="product-name"><a href="#">product name goes here</a></h3>
													<h4 class="product-price"><span class="qty">3x</span>$980.00</h4>
												</div>
												<button class="delete"><i class="fa fa-close"></i></button>
											</div>
										</div>
										<div class="cart-summary">
											<small>3 Item(s) selected</small>
											<h5>SUBTOTAL: $2940.00</h5>
										</div>
										<div class="cart-btns">
											<a href="#">View Cart</a>
											<a href="#">Checkout  <i class="fa fa-arrow-circle-right"></i></a>
										</div>
									</div>
								</div>
								<!-- /Cart -->

								<!-- Menu Toogle -->
								<div class="menu-toggle">
									<a href="#">
										<i class="fa fa-bars"></i>
										<span>Menu</span>
									</a>
								</div>
								<!-- /Menu Toogle -->
							</div>
						</div>
						<!-- /ACCOUNT -->
					</div>
					<!-- row -->
				</div>
				<!-- container -->
			</div>
			<!-- /MAIN HEADER -->
		</header>
		<!-- /HEADER -->

    <!-- NAVIGATION -->
		<nav id="navigation">
			<!-- container -->
			<div class="container">
				<!-- responsive-nav -->
				<div id="responsive-nav">
					<!-- NAV -->
					<ul class="main-nav nav navbar-nav" style="-webkit-box-orient: horizontal;">
						<li class="active"><a href="#">Home</a></li>
						<li><a href="#">Hot Deals</a></li>
						<li><a href="#">Categories</a></li>
						<li><a href="#">Laptops</a></li>
						<li><a href="#">Smartphones</a></li>
						<li><a href="#">Cameras</a></li>
						<li><a href="#">Accessories</a></li>
					</ul>
					<!-- /NAV -->
				</div>
				<!-- /responsive-nav -->
			</div>
			<!-- /container -->
		</nav>
		<!-- /NAVIGATION -->


    <!-- 購物車格線container -->
    <div class="container">
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
              <button class="btn btn-danger">送出訂單</button>
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




