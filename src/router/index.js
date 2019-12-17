import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/Orders';
import Coupons from '@/components/pages/Coupons';
import CustomerOrder from '@/components/pages/CustomerOrders';

import UserHomeMain from '@/components/UserHomeMain';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import UserHome from '@/components/pages/UserHome';
import Cart from '@/components/pages/Cart';
import About from '@/components/pages/About';

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path:'*', //當路由不是指定的路徑時
      redirect:'login', //將路徑redirect到login page
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: { requiresAuth: true },
    // },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [ 
        { //建立巢狀的router-view
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },

      ],
    },
    { //建立登入頁面
      path: '/login',
      name: 'Login',
      component: Login,
    },

    // {
    //   path: '/',
    //   name: 'UserHome',
    //   component: UserHome,
    // },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [ 
        { //建立巢狀的router-view
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
       
      ],
    },

    // { //建立購物車頁面
    //   path: '/cart',
    //   name: 'Cart',
    //   component: Cart,
    // },

    // { //建立消費者結帳頁面
    //   path: '/customer_checkout/:orderId',
    //   name: 'CustomerCheckout',
    //   component: CustomerCheckout,
    //   meta: { requiresAuth: false },
    // },


    //建立分離巢狀式的UserHomeMain頁面
    {
      path: '/',
      name: 'UserHomeMain',
      component: UserHomeMain,
      children: [ 
        { //建立巢狀的router-view: 消費者主頁
          path: '',
          name: 'UserHome',
          component: UserHome,
        },
        { //建立巢狀的router-view: 購物車頁面
          path: 'cart',
          name: 'Cart',
          component: Cart,
        },
        { //建立巢狀的router-view: 購物車結帳頁面
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
          meta: { requiresAuth: false },  
        },
        { //建立巢狀的router-view: 關於我們
          path: 'about',
          name: 'About',
          component: About,
        },

      ],
    },
  ]
})
