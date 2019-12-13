<template>
  <div>
		<!-- loading頁面效果 -->
    <loading :active.sync="isLoading"></loading>
    
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
								<img src="../../assets/img/lens.jpg" alt="">
							</div>
							<div class="shop-body">
								<h3>專業光學鏡頭<br>EF/RF接環</h3>
								<!-- <a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a> -->
							</div>
						</div>
					</div>
					<!-- /shop -->
          <!-- shop -->
					<div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
                <!-- https://colorlib.com/preview/theme/electro/img/logo.png -->
								<img src="../../assets/img/camera.jpg" alt="">
							</div>
							<div class="shop-body">
								<h3>專業數位單眼相機<br>EOS/EOS R系列</h3>
								<!-- <a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a> -->
							</div>
						</div>
					</div>
					<!-- /shop -->
          <!-- shop -->
					<div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
                <!-- https://colorlib.com/preview/theme/electro/img/logo.png -->
								<img src="../../assets/img/SPL.jpg" alt="">
							</div>
							<div class="shop-body">
								<h3>專業閃光燈<br>Speedlite系列</h3>
								<!-- <a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a> -->
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
							<h3 class="title">熱銷商品</h3>
							<div class="section-nav">
								<ul class="section-tab-nav tab-nav">
									<li class="active"><a data-toggle="tab" href="#tab2">全部商品</a></li>
									<li><a data-toggle="tab" href="#tab2">專業光學鏡頭</a></li>
									<li><a data-toggle="tab" href="#tab2">專業數位單眼相機</a></li>
									<li><a data-toggle="tab" href="#tab2">專業閃光燈</a></li>
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

				<!-- 頁碼nav -->
				<nav aria-label="Page navigation example .page-nav-userhome" id="page-nav-userhome">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous" :class="{'disabled': !pagination.has_pre}" @click.prevent="getProducts(pagination.current_page - 1)"> 
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item" v-for="page in pagination.total_pages" :key="page"
            :class="{'active':pagination.current_page === page}">
              <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next" :class="{'disabled': !pagination.has_next}" @click.prevent="getProducts(pagination.current_page + 1)">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
				<!-- /頁碼nav -->

			</div>
			<!-- /container -->
		</div>
		<!-- /SECTION -->

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
.header-ctn>div>a> .shopping-cart-RL span,
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




