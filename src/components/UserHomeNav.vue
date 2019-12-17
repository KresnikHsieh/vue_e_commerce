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
							<router-link to="/admin">管理者控制台</router-link>
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
								<a href="#/" class="logo">
									<!-- <img src="https://colorlib.com/preview/theme/electro/img/logo.png" alt=""> -->
									<img src="../assets/aperture_logo.png">
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
										<div class="qty">10</div>
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
						<li class="active"><a href="#">首頁</a></li>
						<li><a href="#">最新折扣</a></li>
						<li><a href="/#/">專業數位單眼相機</a></li>
						<li><a href="/#/">專業數位光學鏡頭</a></li>
						<li><a href="/#/">專業閃光燈與配件</a></li>
						<li><a href="/#/about">關於我們</a></li>
						<li><a href="/#/">聯絡我們</a></li>
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