const container = document.querySelector(".container");
const percent = document.querySelector("#percent");

let perVal = 0;
let increment = setInterval(() => {
    perVal++;
    percent.textContent = `${perVal}%`;
    if (perVal === 100) {
        clearInterval(increment);
        container.classList.remove("active");
    }
    console.log(perVal);
}, 100);
