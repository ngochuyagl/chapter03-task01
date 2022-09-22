const animations = document.querySelector('.animations');
const leaf1 = document.querySelector('.c-leaf1');
const leaf2 = document.querySelector('.c-leaf2');

const leaf1mb = document.querySelector('.c-leaf1-mb');
const leaf2mb = document.querySelector('.c-leaf2-mb');

const btnMore = document.querySelector(".l-product__item--more");
const textProduct = document.querySelector('.l-product__itemtext')

const iconMenu1 = document.querySelector('.c-menu--icon1')
const iconMenu2 = document.querySelector('.c-menu--icon2')
const menu = document.querySelector('.c-header__menu');
const btnArrow = document.querySelectorAll('.l-qa__arrowmb');

const btnPoint = document.querySelectorAll('.l-product__itemmore')
window.addEventListener('scroll', (e) => {
    if(window.scrollY > 0) {
       animations.classList.remove('animationFadeIn')
       animations.classList.add('animationFadeOut')
       
       leaf1.classList.add('leaf1AnimationBottom')
       leaf1.classList.remove('leaf1AnimationTop')
       leaf2.classList.add('leaf2AnimationRight')
       leaf2.classList.remove('leaf2AnimationLeft')
        
       leaf1mb.classList.add('leaf1AnimationBottom')
       leaf1mb.classList.remove('leaf1AnimationTop')
       leaf2mb.classList.add('leaf2AnimationRight')
       leaf2mb.classList.remove('leaf2AnimationLeft')
        
    }
    else if (window.scrollY == 0){
        
        animations.classList.remove('animationFadeOut')
        animations.classList.add('animationFadeIn')
       
        leaf1.classList.remove('leaf1AnimationBottom')
       leaf1.classList.add('leaf1AnimationTop')

       leaf2.classList.remove('leaf2AnimationRight')
       leaf2.classList.add('leaf2AnimationLeft')
    
       leaf1mb.classList.remove('leaf1AnimationBottom')
       leaf1mb.classList.add('leaf1AnimationTop')
       leaf2mb.classList.remove('leaf2AnimationRight')
       leaf2mb.classList.add('leaf2AnimationLeft')
    }
})
iconMenu1.addEventListener('click', (e) => {
    menu.classList.add('menu--active')
})
iconMenu2.addEventListener('click', (e) => {
    menu.classList.remove('menu--active')
})

btnArrow.forEach(item => {
    item.addEventListener('click', (e) => {
       
    const btn = item.parentElement;
    const parentBtn = btn.parentElement;
    const textDesc = parentBtn.parentElement;
    textDesc.classList.toggle('active')
    console.log(parentBtn)
    


    if(textDesc.classList.contains('active')){
        item.setAttribute('src', './_public/assets/img/arr-down.png')
    }else {
        item.setAttribute('src', './_public/assets/img/arr-up.png')
    }
    
})
})


btnPoint.forEach(item => {
    item.addEventListener('click', (e) => {
        const boxed = document.querySelectorAll('.l-product__itemtext')
       boxed.forEach(text => text.classList.remove('show'))
        const pointText = item.previousElementSibling;
        pointText.classList.add('show')
        console.log(pointText)
      
    })})
