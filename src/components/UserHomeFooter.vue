<template>
  <div>
    <!-- FOOTER -->
		<footer id="footer">
			<!-- top footer -->
			<div class="section">
				<!-- container -->
				<div class="container">
					<!-- row -->
					<div class="row">
						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">Aperture Camera Gears</h3>
								<!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p> -->
								<ul class="footer-links text-left">
									<li><a href="#"><i class="fa fa-map-marker"></i>台北市佳能區無敵寺路24號70巷2樓8號</a></li>
									<li><a href="#"><i class="fa fa-phone"></i>+886-912-077-622</a></li>
									<li><a href="#"><i class="fa fa-envelope-o"></i>x19921111@gmail.com</a></li>
								</ul>
							</div>
						</div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">產品與折扣</h3>
								<ul class="footer-links">
									<li><a href=""><router-link to="/newcoupon">最新折扣</router-link></a></li>
									<li><a href="">專業數位單眼相機</a></li>
									<li><a href="">專業數位光學鏡頭</a></li>
									<li><a href="">專業閃光燈與配件</a></li>
									<!-- <li><a href="#">Accessories</a></li> -->
								</ul>
							</div>
						</div>

						<div class="clearfix visible-xs"></div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">相關資訊</h3>
								<ul class="footer-links">
									<li><a href=""><router-link to="/about">關於我們</router-link></a></li>
									<li><a href=""><router-link to="/contact">聯絡我們</router-link></a></li>
									<!-- <li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Orders and Returns</a></li>
									<li><a href="#">Terms & Conditions</a></li> -->
								</ul>
							</div>
						</div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">商家系統</h3>
								<ul class="footer-links">
									<li><a href=""><router-link to="/admin">管理者控制台</router-link></a></li>
									<!-- <li><a href="#">View Cart</a></li>
									<li><a href="#">Wishlist</a></li>
									<li><a href="#">Track My Order</a></li>
									<li><a href="#">Help</a></li> -->
								</ul>
							</div>
						</div>
					</div>
					<!-- /row -->
				</div>
				<!-- /container -->
			</div>
			<!-- /top footer -->

			<!-- bottom footer -->
			<div id="bottom-footer" class="section">
				<div class="container">
					<!-- row -->
					<div class="row">
						<div class="col-md-12 text-center">
							<ul class="footer-payments">
								<li><a href=""><i class="fa fa-cc-visa"></i></a></li>
								<li><a href=""><i class="fa fa-credit-card"></i></a></li>
								<li><a href=""><i class="fa fa-cc-paypal"></i></a></li>
								<li><a href=""><i class="fa fa-cc-mastercard"></i></a></li>
								<li><a href=""><i class="fa fa-cc-discover"></i></a></li>
								<li><a href=""><i class="fa fa-cc-amex"></i></a></li>
							</ul>
							<span class="copyright">
								<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
								Copyright &copy;2019 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
							<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
							</span>


						</div>
					</div>
						<!-- /row -->
				</div>
				<!-- /container -->
			</div>
			<!-- /bottom footer -->
		</footer>
		<!-- /FOOTER -->
  </div>
</template>

<script>
export default {
	name: 'UserHomeFooter',
}
</script>