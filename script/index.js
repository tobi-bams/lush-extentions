const label = document.getElementById('label');
const email = document.getElementById('email');
let extention = document.getElementById("extention");
let textWord = "SHOP OUR PRODUCTS";
let translateValue = 0;

label.addEventListener("click", ( ) => {
    email.style.display = "flex";
})

function textChanger(){
    extention.textContent = textWord;
    if(textWord == "SHOP OUR PRODUCTS"){
        textWord = "SHOP OUR LUSH EXTENSIONS";
    }
    else{
        textWord = "SHOP OUR PRODUCTS";
    }

}

label.addEventListener("click", ( ) => {
    label.style.transform = `translateY(${translateValue}%)`;
})

var timing = setInterval(textChanger, 4000);