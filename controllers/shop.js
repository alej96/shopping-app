const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products',
      });
    });
  };
  

  exports.getIndex = (req, res, next)=> {
    Product.fetchAll(products => {
        res.render('shop/index', {
          prods: products,
          pageTitle: 'Shop',
          path: '/',
          hasProducts: products.length > 0,
          activeShop: true,
          productCSS: true
        });
      });
  };

  exports.getCart = (req, res, next) =>{
    res.render('shop/cart',{
        path: '/cart',
        pageTitle: 'Your Cart'
    });
  };
  
  
  exports.getOrders = (req, res, next) =>{
    res.render('shop/orders',{
        path: '/orders',
        pageTitle: 'Your Orders'
    });
  };
  exports.getCheckout = (req, res, next) => {
      res.render('shop/checkout',{
          path: '/checkout',
          pageTitle: 'Checkout'
      });
  };