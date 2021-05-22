
const switchInput = document.getElementsByClassName("switch-input")[0]

switchInput.addEventListener("click",()=>{
    let value = switchInput.value
    document.documentElement.classList.toggle('dark')
})