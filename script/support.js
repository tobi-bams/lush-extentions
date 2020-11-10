const labels = document.querySelectorAll(".labelInput");
const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

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

textArea.addEventListener("focus", (evt) => {
    evt.target.previousElementSibling.style.transform = "translateY(0)";
})

textArea.addEventListener("blur", (evt) => {
    if(evt.target.value === ""){
        evt.target.previousElementSibling.style.transform = "translateY(310%)";   
    }
})