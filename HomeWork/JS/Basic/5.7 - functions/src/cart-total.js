function discountCalc(totalAmount, numberOfPproducts, promoCode = null) {
  let newtotalAmount = totalAmount;
  let DiscountForTenProducts = 5;
  let DiscountAt50000 = 20;

  if (promoCode === "ДАРИМ300") {
    if (totalAmount > 300) {
      newtotalAmount -= 300;
    } else {
      newtotalAmount = 0;
    }
  }

  if (numberOfPproducts >= 10) {
    newtotalAmount *= 1 - DiscountForTenProducts / 100;
  }

  if (totalAmount > 50000) {
    newtotalAmount -= (totalAmount - 50000) * (DiscountAt50000 / 100);
  }

  if (promoCode === "СКИДКА15" && totalAmount >= 20000) {
    newtotalAmount *= 0.85;
  }

  return newtotalAmount;
}

export default discountCalc
