"use strict";

const sendModal = () => {
    // Модальное окно 2 — Заказать со скидкой
    const discountBtn = document.querySelectorAll(".discount-btn"),
        popupDiscount = document.querySelector(".popup-discount");
    discountBtn.forEach((elem) => {
        elem.addEventListener('click', (event) => {
          event.preventDefault();
        });
        elem.addEventListener('click', () => {
          popupDiscount.style.display = 'block';
          
        });
      });
      popupDiscount.addEventListener('click', (event) => {
        let target = event.target;
    
        if (target.classList.contains('popup-close')) {
          popupDiscount.style.display = 'none';
        } else {
          target = target.closest('.popup-content');
    
          if (!target) {
            popupDiscount.style.display = 'none';
          }
        }
      });
};
export default sendModal;
