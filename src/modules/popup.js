"use strict";

const popup = () => {
    const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call'),
        popupContent = document.querySelector('.popup-content'),
        checkBtn = document.querySelectorAll('.check-btn'),
        popupCheck = document.querySelector('.popup-check');
 // открытие модального окна 1
    callBtn.forEach((elem) => {
       elem.addEventListener('click', (event) => {
          event.preventDefault();
       });
       elem.addEventListener('click', () => {
          popupCall.style.display = 'block';
          animate();
       });
    });
    popupCall.addEventListener('click', (event) => {
       let target = event.target;

       if(target.classList.contains('popup-close')){
          popupCall.style.display = 'none';
       } else {
          target = target.closest('.popup-content');

          if(!target){
             popupCall.style.display = 'none';
          }
       }
    });
// Скидка (получить чек-лист за скидку)
      checkBtn.forEach((elem) => {
         elem.addEventListener('click', function(event){
            event.preventDefault();
         });

         elem.addEventListener('click', () => {
            popupCheck.style.display = 'block';
            animate();
         });
      });

      popupCheck.addEventListener('click', (event) => {
         let target = event.target;
 
         if(target.classList.contains('popup-close')){
            popupCheck.style.display = 'none';
         } else {
            target = target.closest('.popup-content');
 
            if(!target){
               popupCheck.style.display = 'none';
            }
         }
      });

//Анимация модального окна
    let count = 0,
        flyInterval;
    const animate = () => {
        if (window.innerWidth > 768){
            flyInterval = requestAnimationFrame(animate);
            count +=4;
            if(count < 80){
                popupContent.style.top = count + 'px';
            }else {
                cancelAnimationFrame(flyInterval);
                count = 0;
            }
        } 
    }; 
};
export default popup;
