const toggle_btn = document.querySelector(".toggle-btn")
const main = document.querySelector("main")

toggle_btn.addEventListener("click", () => {
    if(main.classList.contains('day')){
        main.classList.remove('day')
        main.classList.add("night")
    }
    else{
        main.classList.remove('night')
        main.classList.add('day')
    }
})