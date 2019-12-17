<template>
  <div>
    <!-- SECTION -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
          <div class="col-md-12">
            <h1 class="intro-page-title">最新折扣</h1>
          </div>
          <div class="col-md-5">
            <img class="img100" src="../../assets/sale.jpg" alt="">
          </div>
          <div class="col-md-7">
						<div class="row coupon-outer-box">
							<div class="col-md-3">
								<div class="coupon-discount-box">
									<h1 class="coupon-discount-num">10%</h1><span> off</span>
								</div>
							</div>
							<div class="col-md-9">
								<h4>立即輸入優惠折扣碼</h4>
								<h3 class="coupon-code">super10off</h3>
								<h4>結帳即享超激折扣價！</h4>
							</div>
						</div>
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /SECTION -->
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  props: {
    config: Object,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: '',
      },
      due_date: new Date(),
      isNew: false,
    };
  },
  watch: {
    due_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
  methods: {
    openCouponModal(isNew, item) {
      const vm = this;
      $('#couponModal').modal('show');
      vm.isNew = isNew;
      if (vm.isNew) {
        vm.tempCoupon = {};
      } else {
        vm.tempCoupon = Object.assign({}, item);
        const dateAndTime = new Date(vm.tempCoupon.due_date * 1000).toISOString().split('T');
        vm.due_date = dateAndTime[0];
      }
    },
    getCoupons() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons`;
      this.$http.get(url, vm.tempProduct).then((response) => {
        vm.coupons = response.data.coupons;
        console.log(response);
      });
    },
    updateCoupon() {
      const vm = this;
      if (vm.isNew) {
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
        this.$http.post(url, { data: vm.tempCoupon }).then((response) => {
          console.log(response, vm.tempCoupon);
          $('#couponModal').modal('hide');
          this.getCoupons();
        });
      } else {
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        vm.due_date = new Date(vm.tempCoupon.due_date * 1000);
        this.$http.put(url, { data: vm.tempCoupon }).then((response) => {
          console.log(response);
          $('#couponModal').modal('hide');
          this.getCoupons();
        });
      }
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>