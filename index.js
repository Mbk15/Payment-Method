let paymentMethods = document.querySelectorAll(".payment-method-container");

let paymentArr = Array.from(paymentMethods);

paymentArr.map((item, key) => {
  item.addEventListener("click", () => {
    console.log(key);
    const check = document.querySelector(`#check-${key}`);
    console.log(check);
    check.classList.add("show");
  });
});
