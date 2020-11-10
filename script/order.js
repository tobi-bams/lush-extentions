const labels = document.querySelectorAll(".labelInput");
const inputs = document.querySelectorAll("input");
// let happy = document.getElementById("happy");


labels.forEach((eachLabel) => {
    
    eachLabel.addEventListener("click", (evt) => {
        evt.target.style.transform = "translateY(0)";
    })
})

inputs.forEach((input) => {
    input.addEventListener("focus", (evt) => {
        evt.target.previousElementSibling.style.transform = "translateY(0)";

        })

    input.addEventListener("blur", (evt) => {
        if(evt.target.value === ""){
            evt.target.previousElementSibling.style.transform = "translateY(90%)";   
        }
    })
})