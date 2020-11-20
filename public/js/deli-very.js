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
