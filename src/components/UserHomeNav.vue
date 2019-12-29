<template>
  <div>
    <!-- HEADER -->
		<header>
			<!-- TOP HEADER -->
			<div id="top-header">
				<div class="container">
					<ul class="header-links pull-left">
						<li><a href="#"><i class="fa fa-phone"></i> +886-912-077-622</a></li>
						<li><a href="#"><i class="fa fa-envelope-o"></i> x19921111@gmail.com</a></li>
						<li><a href="#"><i class="fa fa-map-marker"></i> 台北市佳能區無敵寺路24號70巷2樓8號</a></li>
					</ul>
					<ul class="header-links pull-right">
						<!-- <li><a href="#"><i class="fa fa-dollar"></i> USD</a></li> -->
						<li><a href="#"><i class="fa fa-user-o"></i> 
							<router-link to="/admin/products">管理者控制台</router-link>
						</a></li>
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
								<a href="" class="logo">
									<router-link to="/"><img src="../assets/aperture_logo.png"></router-link>
									<!-- <img src="https://colorlib.com/preview/theme/electro/img/logo.png" alt=""> -->
									
								</a>
							</div>
						</div>
						<!-- /LOGO -->

						<!-- SEARCH BAR -->
						<div class="col-md-6">
							<div class="header-search">
								<form>
									<select class="input-select">
										<option value="0">全部分類商品</option>
										<option value="1">專業數位單眼相機</option>
										<option value="1">專業數位光學鏡頭</option>
										<option value="1">專業閃光燈與配件</option>
									</select>
									<input class="input" placeholder="Search here">
									<button class="search-btn">搜尋</button>
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
										 <router-link to="/cart" class="shopping-cart-RL">
											<span>購物車</span>
										 </router-link>
										<div class="qty">{{cart.carts.length}}</div>
									</a>
									<div class="cart-dropdown">
										<div class="cart-list">
											<div class="product-widget">
												<div class="product-img">
													<img src="../assets/img/lens.jpg" alt="">
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
						<li class="active"><a href="#"><router-link to="/">首頁</router-link></a></li>
						<li><a href=""><router-link to="/newcoupon">最新折扣</router-link></a></li>
						<!-- <li><a href="/#/">專業數位單眼相機</a></li>
						<li><a href="/#/">專業數位光學鏡頭</a></li>
						<li><a href="/#/">專業閃光燈與配件</a></li> -->
						<li><a href=""><router-link to="/about">關於我們</router-link></a></li>
						<li><a href=""><router-link to="/contact">聯絡我們</router-link></a></li>
						<!-- <li><a href="#">Accessories</a></li> -->
					</ul>
					<!-- /NAV -->
				</div>
				<!-- /responsive-nav -->
			</div>
			<!-- /container -->
		</nav>
		<!-- /NAVIGATION -->
  </div>
</template>

<script>
export default {
	name: 'UserHomeNav',
}
</script>
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
			carts:[],
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