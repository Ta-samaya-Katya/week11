let firstPrice = Number(document.querySelector("#firstPrice").textContent);
let secondPrice = Number(document.querySelector("#secondPrice").textContent);
let thirdPrice = Number(document.querySelector("#thirdPrice").textContent);
let fourthPrice = Number(document.querySelector("#fourthPrice").textContent);

let totalPrice = document.querySelector("#totalPrice");

totalPrice.textContent = firstPrice + secondPrice + thirdPrice + fourthPrice;

let sum = totalPrice.textContent;

let discountPrice = sum * 0.8;

const useDiscount = () => {
  totalPrice.textContent = Math.round(discountPrice);
};
