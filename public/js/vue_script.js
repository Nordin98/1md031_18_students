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

var vm = new Vue({
  el: '#burgerList',
  data: {
    burgers:food
  }
})
