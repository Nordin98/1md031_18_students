var orderButton = document.getElementById("orderButton")
orderButton.addEventListener("click", buttonMessage);

function buttonMessage() {
  console.log("Button clicked!");
  console.log(getContactInfo());
  console.log(getOrderInfo());

  confirmation.textContent = "Contact info: " + getContactInfo();
  yourOrder.textContent = "Your order is: " + getOrderInfo();

}

function getContactInfo() {

  var contactArray = [];

  var fullname = document.getElementById("fullname");
  var email = document.getElementById("email");
//  var street = document.getElementById("street");
//  var house = document.getElementById("house");
  var payment = document.getElementById("payment");
  var gender = document.getElementsByName('Gender');

  contactArray.push(" " + fullname.value);
  contactArray.push(" " + email.value);
// contactArray.push(street.value);
// contactArray.push(house.value);
  contactArray.push(" " + payment.value);

  for (var i = 0, length = gender.length; i < length; i++) {
    if (gender[i].checked) {

      var selector = 'label[for=' + gender[i].id + ']';
      var label = document.querySelector(selector);
      var text = label.innerHTML;
      contactArray.push(" "+ text); // this adds the label of gender[i] to the empty array
    }
  }
  return contactArray;
}

function getOrderInfo(){
  var burgerBox = document.getElementsByName('burgerBox');
  var burgerArray = [];
  for(var i = 0, length = food.length; i < length; i++){
    if(burgerBox[i].checked){
      burgerArray.push(burgerBox[i].value)
    }
  }
  return burgerArray;
}
