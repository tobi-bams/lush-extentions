const label = document.getElementById('label');
let translateValue = 0;

label.addEventListener("click", ( ) => {
    label.style.transform = `translateY(${translateValue}%)`;
})