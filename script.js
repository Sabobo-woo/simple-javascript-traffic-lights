
let goahead = document.querySelectorAll(".not-visible");
let button = document.querySelector(".button");

document.querySelector(".visible").style.display = "none";
document.querySelector(".visible2").style.display = "none";

button.addEventListener("click", () => {
    setTimeout(() => {
        button.innerHTML = "wait for it ";
        document.querySelector(".visible").style.display = "none";
        document.querySelector(".visible2").style.display = "none";
        document.querySelector(".not-visible").style.display = "block";
        document.querySelector(".not-visible2").style.display = "block";
        setTimeout(() => {
            button.innerHTML = "go!";
            document.querySelector(".visible").style.display = "block";
            document.querySelector(".visible2").style.display = "block";
            document.querySelector(".not-visible").style.display = "none";
            document.querySelector(".not-visible2").style.display = "none";
        }, 2000);
    }, 1000);
})






// let time = 60


// let timer = setInterval(() => {
//     if (timer <= 0) {
//         clearInterval(timer);
//     }

// }, 1000);




