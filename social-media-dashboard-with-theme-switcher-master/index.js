
const switchInput = document.getElementById("switch-input")

switchInput.addEventListener("click",()=>{
    let value = switchInput.value
    document.documentElement.classList.toggle('dark')
})