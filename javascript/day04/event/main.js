const sayHello = () => {
    alert("Xin chao cac ban 1");
}

const btn2 = document.getElementById("btn-2");
// btn2.onclick = () => {
//     alert("Xin chao cac ban 2");
// }

const sayHello2 = () => {
    alert("Xin chao cac ban 2");
}
btn2.onclick = sayHello2;

const btn3 = document.getElementById("btn-3");
btn3.addEventListener("click", (event) => {
    console.log(event);
})

// const sayHello3 = () => {
//     alert("Xin chao cac ban 3");
// }
// btn3.addEventListener("click", sayHello3)


// Lắng nghe sự kiện keydown
document.addEventListener("keydown", function (event) {
    console.log(event);
});

// Lắng nghe sự kiện scroll
const btnTop = document.getElementById("top");
window.addEventListener("scroll", function (event) {
    if (document.documentElement.scrollTop > 200) {
        btnTop.classList.remove("hide");
    } else {
        btnTop.classList.add("hide");
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})