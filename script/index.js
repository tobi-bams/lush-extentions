const label = document.getElementById('label');
const email = document.getElementById('email');
let extention = document.getElementById("extention");
let textWord = "Lush Extention";
let translateValue = 0;

label.addEventListener("click", ( ) => {
    email.style.display = "flex";
})

function textChanger(){
    extention.textContent = textWord;
    if(textWord == "Lush Extention"){
        textWord = "Our Lush Extention";
    }
    else{
        textWord = "Lush Extention";
    }

}

label.addEventListener("click", ( ) => {
    label.style.transform = `translateY(${translateValue}%)`;
})

var timing = setInterval(textChanger, 4000);