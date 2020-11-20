//function MenuItem(hamburger, kcal, glut, lac, ingred, url){
//  this.name=hamburger;
//  this.calories=kcal;
//  this.gluten=glut;
//  this.lactose=lac;
//  this.ingredienser=ingred;
//  this.bild=url;
//  this.info=function(){
  //  return this.name + ': ' + this.calories + ' calories';
//  };
//}

//var burg1 = new MenuItem('The vanila', '600', false, false, 'allt gott', " https://www.burgerdudes.se/wp-content/uploads/2019/11/groundburger_timeout-620x380.jpg" )
//var burg2 = new MenuItem('The cheese deluxe', '2000', true, true, 'allt ost','https://www.burgerdudes.se/wp-content/uploads/2019/11/garage_bar_fr_fb_veckans_24okt_med-620x380.jpg')
//var burg3 = new MenuItem('The paranormal', '1000', true, false, 'allt äckligt', 'https://www.burgerdudes.se/wp-content/uploads/2019/11/bleecker_foodism-620x380.jpg')

//var allBurgers =[burg1, burg2 ,burg3];

/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */

'use strict';
var socket = io();
var orderId = 0;

var vm = new Vue({
  el: '#map',
  data: {
    burgers: food,
    orderItems: {},
    wordLocation: {details:{x:0, y:0}}
  },

  methods: {
    displayInfo: function () {
      confirmation.textContent = "Your contact information: " + getContactInfo();
      yourOrder.textContent = "You order: " + getOrderInfo();
    },

    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};

      this.wordLocation={ details: {x:event.clientX - 10 - offset.x,
                                    y:event.clientY - 10 - offset.y}};


    },
    addOrder: function () {
      orderId = orderId+1;
      socket.emit("addOrder", { orderId:orderId + getContactInfo(),
                                details: this.wordLocation.details,
                                orderItems: getOrderInfo()
                              });
     yourOrder.textContent = "Your order is: " + getOrderInfo();
     confirmation.textContent = "Your contact info: " + getContactInfo();
    }
  }
});
