const popup = () => {
// функция открытия модального окна
const openBlock = (elem) => {
    elem.style.display = 'block';
};
// функция закрытия модального окна
const closingBlock = (elem) => {
    if(!elem){
        return;
    } 
    elem.style.display = 'none';
};
    //открытие модальных окон
    document.body.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
        // открытие окон header и footer 
        if (target.closest('.call-btn')){ 
            openBlock(document.querySelector('.popup-call'));
        }
        // //открытие модального окна получить расчет или скидку
        if (target.closest('.discount-btn')){ 
            openBlock(document.querySelector('.popup-discount'));
        }
        //открытие модального окна получить чек-лист
        if (target.closest('.check-btn')){ 
            openBlock(document.querySelector('.popup-check'));
        }
        //открывается модальное окно получить консультфцию
        if (target.closest('.consultation-btn')){ 
            openBlock(document.querySelector('.popup-consultation'));
        }
    });
    //закрытие модальных окон
    document.body.addEventListener('click', (event) => {
        if (event.target.closest('.popup-close') || !event.target.closest('.popup-content') && !event.target.closest('.contacts')){
            closingBlock(event.target.closest('.popup'));
        }
    });
};
export default popup;
// popup();