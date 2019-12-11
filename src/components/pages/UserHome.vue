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
									<img src="https://colorlib.com/preview/theme/electro/img/logo.png" alt="">
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
								<div>
									<a href="#">
										<i class="fa fa-heart-o"></i>
										<span>Your Wishlist</span>
										<div class="qty">2</div>
									</a>
								</div>
								<!-- /Wishlist -->

								<!-- Cart -->
								<div class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
										<i class="fa fa-shopping-cart"></i>
										<span>Your Cart</span>
										<div class="qty">3</div>
									</a>
									<div class="cart-dropdown">
										<div class="cart-list">
											<div class="product-widget">
												<div class="product-img">
													<img src="https://colorlib.com/preview/theme/electro/img/product01.png" alt="">
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

    <!-- SECTION -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<!-- shop -->
					<div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
                <!-- https://colorlib.com/preview/theme/electro/img/logo.png -->
								<img src="https://colorlib.com/preview/theme/electro/img/shop01.png" alt="">
							</div>
							<div class="shop-body">
								<h3>Laptop<br>Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					<!-- /shop -->
          <!-- shop -->
					<div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
                <!-- https://colorlib.com/preview/theme/electro/img/logo.png -->
								<img src="https://colorlib.com/preview/theme/electro/img/shop01.png" alt="">
							</div>
							<div class="shop-body">
								<h3>Laptop<br>Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					<!-- /shop -->
          <!-- shop -->
					<div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
                <!-- https://colorlib.com/preview/theme/electro/img/logo.png -->
								<img src="https://colorlib.com/preview/theme/electro/img/shop01.png" alt="">
							</div>
							<div class="shop-body">
								<h3>Laptop<br>Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					<!-- /shop -->


				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /SECTION -->

		<!-- SECTION -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">

					<!-- section title -->
					<div class="col-md-12">
						<div class="section-title">
							<h3 class="title">Top selling</h3>
							<div class="section-nav">
								<ul class="section-tab-nav tab-nav">
									<li class="active"><a data-toggle="tab" href="#tab2">Laptops</a></li>
									<li><a data-toggle="tab" href="#tab2">Smartphones</a></li>
									<li><a data-toggle="tab" href="#tab2">Cameras</a></li>
									<li><a data-toggle="tab" href="#tab2">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /section title -->

					<!-- Products 產品顯示 -->
					<div class="col-md-4" v-for="item in products" :key="item.id">
						<!-- <div class="row"> -->
							<div class="products-tabs">
								<!-- tab -->
								<div id="tab2" class="tab-pane fade in active">
									<div class="products-slick" data-nav="#slick-nav-2">
										<!-- product -->
										<div class="product">
											<div class="product-img">
												<img :src="item.imageUrl" alt="">
												<!-- <div class="product-label">
													<span class="sale">-30%</span>
													<span class="new">NEW</span>
												</div> -->
											</div>
											<div class="product-body">
												<p class="product-category">{{ item.category }}</p>
												<h3 class="product-name"><a href="#">{{ item.title }}</a></h3>
												<h4 class="product-price" v-if="item.price">現在 {{ item.price }} 元 <del class="product-old-price" v-if="item.price">原價 {{ item.origin_price }} 元</del></h4>
											</div>
											<div class="add-to-cart">
												<button type="button" class="add-to-cart-btn"
												@click="getProduct(item.id)">
												<i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i> 
												<!-- 當讀取的id＝商品id時呈現讀取效果 -->
													查看更多
												</button>
												<button class="add-to-cart-btn" @click="addtoCart(item.id)">
													<i class="fa fa-shopping-cart" v-if="product.id === status.loadingItem"></i>加入購物車
												</button>

													<!-- <button type="button" @click="addtoCart(item.id)" class="btn btn-primary" >
													<i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
													加到購物車</button> -->

											</div>
										</div>
										<!-- /product -->
									</div>
								</div>
							</div>
						<!-- </div> -->
					</div>
					<!-- /Products  產品顯示-->

				</div>
				<!-- /row -->

				<!-- 產品Modal -->
				<div class="modal fade" id="productModal" tabindex="-1" role="dialog"
					aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<img :src="product.imageUrl" class="img-fluid" alt="">
								<blockquote class="blockquote mt-3">
									<p class="mb-0">{{ product.content }}</p>
									<footer class="blockquote-footer text-right">{{ product.description }}</footer>
								</blockquote>
								<div class="d-flex justify-content-between align-items-baseline">
									<div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
									<del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
									<div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
								</div>
								<select name="" class="form-control mt-3" v-model="product.num">
									<!-- 將選購的數量存在product.num -->
									<option :value="num" v-for="num in 10" :key="num">
										選購 {{num}} {{product.unit}}
									</option>
								</select>
							</div>
							<div class="modal-footer">
								<div class="text-muted text-nowrap mr-3">
									小計 <strong>{{ product.num * product.price }}</strong> 元
								</div>
								<button type="button" class="btn btn-primary"
									@click="addtoCart(product.id, product.num)">
									<i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
									加到購物車
								</button>
							</div>
						</div>
					</div>
				</div>
				<!-- /產品Modal -->

			</div>
			<!-- /container -->
		</div>
		<!-- /SECTION -->

		<div class="my-5 row justify-content-center">
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
    getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.products = response.data.products;
        console.log("getProducts取得全部產品資訊",response);
        vm.isLoading = false;
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




