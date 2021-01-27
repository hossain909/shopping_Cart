// ===================== Add Button Phone ==================== // 
const addButton = document.getElementById("btn-add");
addButton.addEventListener("click",function(){
  getInputValue("input-value");
  document.getElementById("phone-price").innerText =  increaseProductPrice("input-value");
  subTotal()
  totalAmount()
});

// ===================== Minus Button Phone ==================== // 
const minusButton = document.getElementById("btn-minus");
minusButton.addEventListener("click",function(){
  getInputValue2("input-value")
  document.getElementById("phone-price").innerText =  increaseProductPrice("input-value", -1)
  subTotal()
  totalAmount()
});

// ============  Get Input Value All ================ //
function getInputValue(id){
  const value = parseFloat(document.getElementById(id).value++);
  return value;
};
function getInputValue2(id){
  const value = parseFloat(document.getElementById(id).value--);
  return value;
};

// ================== Add Button Casing =================== //
const addButtonCasing = document.getElementById("btn-add-casing");
addButtonCasing.addEventListener("click",function(){
  getInputValue("input-value-casing");
  document.getElementById("casing-price").innerText =  increaseProductPrice2("input-value-casing");
  subTotal()
  totalAmount()
});

// ================== Minus Button Casing =================== //
const minusButtonCasing  = document.getElementById("btn-minus-casing");
minusButtonCasing.addEventListener("click",function(){
  // const value = parseFloat(document.getElementById("input-value-casing").value--);
  getInputValue2("input-value-casing");
  document.getElementById("casing-price").innerText = increaseProductPrice2("input-value-casing", -1);
  subTotal()
  totalAmount()
});

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