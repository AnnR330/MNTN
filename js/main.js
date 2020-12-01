// Popup

const popupLink = document.querySelector('.header__popup-link');
const popupElem = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close');
const formBtn = document.querySelector('.form__btn--cancel');

const timeout = 800;

popupLink.addEventListener("click", function(e){
    popupOpen(popupElem);
});

popupCloseBtn.addEventListener('click', function(e){
    popupClose(popupCloseBtn.closest('.popup'));
});

formBtn.addEventListener('click', function(e){
    popupClose(formBtn.closest('.popup'));
});


function popupOpen(popupElem){
    popupElem.classList.add('open');
    popupElem.addEventListener("click", function(e){
        if(!e.target.closest('.popup__content')){
            popupClose(e.target.closest('.popup'));
        }
    });
}

function popupClose(){
    popupElem.classList.remove('open');
    document.forms[0].reset();
}