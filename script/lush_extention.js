let buy = document.getElementById('buy');
let buyText = document.getElementById('buyText');
const label = document.getElementById('label');
const email = document.getElementById('email');
let translateValue = 0;

buy.addEventListener("mouseenter", () => {
    buyText.textContent = "Shop Our Product";
})

buy.addEventListener("mouseleave", () => {
    buyText.textContent = "I want to Buy!";
})

label.addEventListener("click", ( ) => {
    label.style.transform = `translateY(${translateValue}%)`;
})