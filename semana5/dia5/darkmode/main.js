const toggleBtn = document.querySelector(".btn");


toggleBtn.addEventListener('mouseover',()=>{
    document.documentElement.classList.toggle('dark-theme')
})