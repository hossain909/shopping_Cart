// ===================== Add Button Phone ==================== // 
const phoneAddButton = document.getElementById("btn-add");
phoneAddButton.addEventListener("click",function(){
  getInputValue("input-value");
  getIncreasePhonePrice("phone-price");
  subTotal()
  totalAmount()
});

// ===================== Minus Button Phone ==================== // 
const phoneMinusButton= document.getElementById("btn-minus");
phoneMinusButton.addEventListener("click",function(){
  getInputValueMinus("input-value")
  getDecreasePhonePrice("phone-price")
  subTotal()
  totalAmount()
});

// ================== Add Button Casing =================== //
const addButtonCasing = document.getElementById("btn-add-casing");
addButtonCasing.addEventListener("click",function(){
  getInputValue("input-value-casing");
  getIncreaseCasingPrice("casing-price")
  subTotal()
  totalAmount()
});

// ================== Minus Button Casing =================== //
const minusButtonCasing  = document.getElementById("btn-minus-casing");
minusButtonCasing.addEventListener("click",function(){
  getInputValueMinus("input-value-casing");
  getDecreaseCasingPrice("casing-price")
  subTotal()
  totalAmount()
});

// ============  Get Input Value All ================ //
function getInputValue(id){
  const value = parseFloat(document.getElementById(id).value++);
  return value;
};
function getInputValueMinus(id){
  const value = parseFloat(document.getElementById(id).value--);
  return value;
};
// ============  Get Price Value All ================ //
function getIncreasePhonePrice(id){
  document.getElementById(id).innerText =  increaseProductPrice("input-value");
}
function getDecreasePhonePrice(id){
  document.getElementById(id).innerText =  increaseProductPrice("input-value",-1);
}
function getIncreaseCasingPrice(id){
  document.getElementById(id).innerText =  increaseProductPrice2("input-value-casing");
}
function getDecreaseCasingPrice(id){
  document.getElementById(id).innerText =  increaseProductPrice2("input-value-casing",-1);
}

// =============== Increase product price ================== // 
const currentPrice = document.getElementById("phone-price").innerText;
const currentPriceCasing = document.getElementById("casing-price").innerText;

function increaseProductPrice(id){
  let currentInput = document.getElementById(id).value;
  let updatePrice = currentInput * currentPrice;
  return updatePrice;
};

// =============== Increase product price2 ================== // 
function increaseProductPrice2(id){
  let currentInput = document.getElementById(id).value;
  let updatePrice = currentInput * currentPriceCasing;
  return updatePrice;
};

// =================== Subtotal Function ================== //
function subTotal(){
  let subTotalPrice = 0;
  const phonePrice = parseFloat(document.getElementById("phone-price").innerText);
  const casingPrice = parseFloat(document.getElementById("casing-price").innerText);
  subTotalPrice = phonePrice + casingPrice;
  const subTotal = document.getElementById("subtotal").innerText = subTotalPrice;
  return subTotal;
}

function totalAmount(){
  const subAmount = parseFloat(document.getElementById("subtotal").innerText);
  const tax = parseFloat(document.getElementById("tax").innerText);
  const totalAmount = subAmount + tax;
  document.getElementById("totalAmount").innerText = totalAmount
  return totalAmount;
}