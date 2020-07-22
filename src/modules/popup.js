const popup = () => {
    //открытие модального окона
    const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call');
        callBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            event.preventDefault();
            popupCall.style.display = 'block';
            animate();
        });
    });
    //закрытие модального окона
    popupCall.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('popup-close')){
            popupCall.style.display = 'none';
        } else {
            target = target.closest('.popup-dialog');
            if(!target){
                popupCall.style.display = 'none';
            }
        }
    });
    //анимация
    let count = 0,
    flyInterval;
const animate = () => {
    const popupDialog = document.querySelector('.popup-content');
        if (window.innerWidth > 768){
            flyInterval = requestAnimationFrame(animate);
            count +=5;
            if(count < 100){
                popupDialog.style.top = count + 'px';
            }else {
                cancelAnimationFrame(flyInterval);
                count = 0;
            }
        } 
    }; 
};
export default popup;