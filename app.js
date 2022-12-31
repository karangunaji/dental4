var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});






let modal = document.getElementsByClassName('modal')
let btnPrimary = document.getElementById('save')


btnPrimary.addEventListener('click', () => {

    alert("thank Your")
    modal.style.display = 'none'
})















