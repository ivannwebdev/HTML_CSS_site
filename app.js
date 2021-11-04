//Определение устройства
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        )
    }
}
//Добавление класса устройства
if (isMobile.any()) { //Для телефона
    document.body.classList.add('_touch')
    const menuArrow = document.querySelector('.menu_arrow')
    menuArrow.addEventListener('click', element => {
        element.target.parentElement.classList.toggle('_active')
    })
} else { //Для компьютера
    document.body.classList.add('_pc')
}

//Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu_link[data-goto]')
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', ev)
    })
    function ev(e) {
        const menuLink = e.target
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const goToBlock = document.querySelector(menuLink.dataset.goto)
            const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active')
                menuBody.classList.remove('_active')
            }

            window.scrollTo({
                top: goToBlockValue,
                behavior: 'smooth'
            })
        }
    }
}
//Бургер-меню
const iconMenu = document.querySelector('.menu_icon')
const menuBody = document.querySelector('.menu_body')
if (iconMenu) {
    iconMenu.addEventListener('click', evn => {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}
