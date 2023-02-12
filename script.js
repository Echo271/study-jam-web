//darkmode
const darkButton = document.querySelector('.darkmode-button')

darkButton.addEventListener('click', ()=>{
    document.body.classList.toggle('darkmode')
    if(darkButton.innerText === 'Darkmode'){
        darkButton.innerText = 'Lightmode'
    }else{
        darkButton.innerText = 'Darkmode'
    }
})

//to top 
const toTop = document.querySelector('.to-top')
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 50){
        toTop.classList.add('active')
    }else{
        toTop.classList.remove('active')
    }
})  

//ham
const ham = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

ham.addEventListener('click', ()=>{
    navMenu.classList.toggle('active')
})

const items = document.querySelectorAll('.nav-item')

items.forEach(item => {
    item.addEventListener('click', ()=>{
        navMenu.classList.remove('active')
    })
})