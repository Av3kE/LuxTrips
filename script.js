const toggleMenu = document.querySelector('.menu-toggle');
const menuHeader = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');

if (toggleMenu) {
    toggleMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        toggleMenu.classList.toggle("_active");
        menuHeader.classList.toggle("_active");
    });
}

// Функция для выполнения при изменении размера экрана
function checkScreenSize() {
    // Получаем ширину экрана
    let screenWidth = window.innerWidth;
    // Проверяем, больше ли ширина экрана 1024 пикселей
    if (screenWidth > 1024) {
        // Ваш код, который нужно выполнить
        menuHeader.classList.remove("_active");
        document.body.classList.remove('_lock');
        changeContactHeaderText("Call me back");
        toggleMenu.classList.add("_no-display");
        menuList.classList.remove("_burger");
    } else {
        changeContactHeaderText("Call  me");
        toggleMenu.classList.remove("_no-display")
        menuList.classList.add("_burger");
    }

    function changeContactHeaderText(text) {
        const contactHeader = document.querySelector('.header__contact');
        contactHeader.innerText = text;
    }
}
// Добавляем слушателя события изменения размера экрана
window.addEventListener('resize', function() {
    // Вызываем функцию при изменении размера экрана
    checkScreenSize();
});

// Вызываем функцию при загрузке страницы для проверки размера экрана
checkScreenSize();
// function ss() {
//     if (window.innerWidth > 1024) {
//         toggleMenu.classList.remove("_active");
//     }
// }

// if (window.innerWidth > 1024) {
//     ss();
// }
// function myFunction() {
//     const contactHeader = document.querySelector('.header__contact');
//     contactHeader.innerText = "Call  me";
// }
// toggleMenu.onclick = myFunction;