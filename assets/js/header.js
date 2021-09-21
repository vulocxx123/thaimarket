const header_EN = document.querySelector('.header__EN')
const header_vn = document.querySelector('.header__vn')
header_EN.onclick = function() {
    header_EN.classList.add('active')
    header_vn.classList.remove('active')
}
header_vn.onclick = function() {
    header_EN.classList.remove('active')
    header_vn.classList.add('active')
}
const header_search = document.querySelector('.header__search-icon')
const header_box2 = document.querySelector('.header__search-box2')
const header_input = document.querySelector('.header__search-input')
isSearchInput = false
header_search.onclick = function(e) {
    isSearchInput = !isSearchInput
    header_box2.classList.toggle('animation',isSearchInput)
},
header_input.onclick = function(e) {
    e.stopPropagation();
}

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 120) {
            $('.header').addClass('sticky')
            $('.go-top').addClass('go-top-scroll')

        }else {
            $('.header').removeClass('sticky')
            $('.go-top').removeClass('go-top-scroll')

        }
        
    })
})

