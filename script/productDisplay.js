const label = document.getElementById('label');
const threeBundle = document.getElementById("threeBundle");
const moreBundles = document.getElementById("moreBundles")
let translateValue = 0;

label.addEventListener("click", ( ) => {
    label.style.transform = `translateY(${translateValue}%)`;
})

moreBundles.addEventListener("click", (evt)=> {
    evt.target.children[0].textContent = "_ _";
    evt.target.style.backgroundColor = "#CBA08D";
    evt.target.style.width = "4em";
    threeBundle.style.backgroundColor = "white"
});

threeBundle.addEventListener("click", (evt) => {
    evt.target.style.background = "#CBA08D";
    moreBundles.children[0].textContent = "3+";
    moreBundles.style.width= "5em";
    moreBundles.style.backgroundColor = "white";
})
