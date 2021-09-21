// Click menu
const menu_btn = document.querySelector('.menu__session')
const menu_food = document.querySelector('.menu__food')
menu_btn.addEventListener('click',function(e) {
    if(e.target.classList.contains('menu-btn')) {
    menu_btn.querySelector('.active').classList.remove('active')
    
    e.target.classList.add('active')
    const Target = e.target.getAttribute("data-title")
    menu_food.querySelector('.block').classList.remove('block')
    menu_food.querySelector(Target).classList.add('block')
    }
})

//Scroll
const messenger = document.querySelector('.messenger')
const khung_chat = document.querySelector('.khung-chat')
const close = document.querySelector('.khung-chat-icon2')
isChat = false 
messenger.onclick = function(e) {
    console.log(e.target);
    isChat = !isChat
    khung_chat.classList.toggle('chat-block')
}
