// slider

(function () {
    // Popup

    const popupLink = document.querySelector('.header__popup-link');
    const popupElem = document.querySelector('.popup');
    const popupCloseBtn = document.querySelector('.popup__close');
    const formBtn = document.querySelector('.form__btn--cancel');

    popupLink.addEventListener("click", function (e) {
        popupOpen(popupElem);
    });

    popupCloseBtn.addEventListener('click', function (e) {
        popupClose(popupCloseBtn.closest('.popup'));
    });

    formBtn.addEventListener('click', function (e) {
        popupClose(formBtn.closest('.popup'));
    });


    function popupOpen(popupElem) {
        popupElem.classList.add('open');
        popupElem.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }

    function popupClose() {
        popupElem.classList.remove('open');
        document.forms[0].reset();
    }


    const sliderWrapper = document.querySelector(".slider__wrapper")
    const sliderItems = document.querySelectorAll(".slider__item")
    const btn = document.querySelectorAll(".btn")
    const prevBtn = document.querySelector(".btn__prev")
    const nextBtn = document.querySelector(".btn__next")

    let itemsArray = []
    let currentItemPosition = 0
    let step = 100
    let transform = 0


    sliderItems.forEach((item, index) => {
        itemsArray.push({
            item: item,
            transform: 0
        })
    })

    let transformItem = transformDirection => {
        if (transformDirection === "right") {
            if (currentItemPosition >= itemsArray.length - 1) return;

            if (!prevBtn.classList.contains("btn--show"))
                prevBtn.classList.add("btn--show")

            currentItemPosition++
            transform -= step

            if (currentItemPosition === (itemsArray.length - 1))
                nextBtn.classList.remove("btn--show")
        }

        if (transformDirection === "left") {
            if (currentItemPosition <= 0) return;

            if (!nextBtn.classList.contains("btn--show"))
                nextBtn.classList.add("btn--show")

            currentItemPosition--
            transform += step

            if (currentItemPosition === 0)
                prevBtn.classList.remove("btn--show")
        }
        sliderWrapper.style.transform = `translateX( ${transform}%)`
    }

    let btnClick = e => {
        if (e.target.classList.contains("btn")) {
            let direction = e.target.classList.contains("btn__next") ? "right" : "left"
            transformItem(direction)
            console.log("direction " + direction)
        }

    }

    let setUpListeners = () => {
        btn.forEach(item => {
            item.addEventListener("click", btnClick)
        })
    }

    setUpListeners();

    return {
        right: function () {
            transformItem('right');
        },
        left: function () {
            transformItem('left');
        }
    }

}())