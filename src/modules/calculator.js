// Модальное окно 2 — Заказать со скидкой
const calculator = () => {

//переменные аккордеон с кнопками
const accordion = document.querySelector('#accordion'),
    panelHeadings = accordion.querySelectorAll('.panel-heading'),
    collapses = accordion.querySelectorAll('.collapse'),
    constructBtn = accordion.querySelectorAll('.construct-btn');

//Переменные калькулятор
const onoffCheckbox = document.querySelector(".onoffswitch-checkbox"),
    //formControl = document.querySelectorAll(".form-control"),
    collapseTwo = document.getElementById("collapseTwo"),
    insideCollapseTwo = collapseTwo.children[0].children,
    calcResult = document.querySelector("#calc-result"),
    myonoffswitchTwo = document.querySelector("#myonoffswitch-two"),
    inputDistance = document.querySelector("#collapseFour").children[0].children[1],
    buttonDistance = document.querySelector("#collapseFour").children[0].children[2];
let finalTotal = 0;

// Аккордеон с кнопками
    panelHeadings.forEach((item, index) => {
        item.addEventListener('click', (event) => {
          event.preventDefault();
          collapses.forEach((item) => {
            item.classList.remove('in');
          });
          collapses[index].classList.add('in');
        });
    }); 
    constructBtn.forEach((item, index) => {
        item.addEventListener('click', (event) => {
          event.preventDefault();
    
          collapses.forEach((item) => {
            item.classList.remove('in');
          });
          if (index !== 3){
            collapses[index + 1].classList.add('in');
          }
        });
    });
//Калькулятор
  accordion.addEventListener('click', () => {
    
      if (onoffCheckbox.checked) {
        insideCollapseTwo[5].classList.add('hidden');
        insideCollapseTwo[4].classList.add('hidden');
        insideCollapseTwo[3].classList.add('hidden');

        let total = 10000;
        finalTotal = total;
       
        if (insideCollapseTwo[1].children[1].value === '2 метра') {
          finalTotal = total + total * 0.2;
        }
        if (insideCollapseTwo[2].children[1].value === '2 штуки') {
          finalTotal += total * 0.3;
        } else if (insideCollapseTwo[2].children[1].value === '3 штуки') {
          finalTotal += total * 0.5;
        }
        if (myonoffswitchTwo.checked) {
          finalTotal += 1000;
        }
      } else {
        insideCollapseTwo[5].classList.remove('hidden');
        insideCollapseTwo[4].classList.remove('hidden');
        insideCollapseTwo[3].classList.remove('hidden');
        let total = 15000;
        finalTotal = total;
        if (insideCollapseTwo[1].children[1].value === '2 метра') {
          finalTotal += total * 0.2;
        }
        if (insideCollapseTwo[2].children[1].value === '2 штуки') {
          finalTotal += total * 0.3;
        } else if (insideCollapseTwo[2].children[1].value === '3 штуки') {
          finalTotal += total * 0.5;
        }
        if (insideCollapseTwo[4].children[1].value === '2 метра') {
          finalTotal += total * 0.2;
        }
        if (insideCollapseTwo[5].children[1].value === '2 штуки') {
          finalTotal += total * 0.3;
        } else if (insideCollapseTwo[5].children[1].value === '3 штуки') {
          finalTotal += total * 0.5;
        }
        if (myonoffswitchTwo.checked) {
          finalTotal += 2000;
        }
      }
      calcResult.value = finalTotal;
      if (inputDistance.value === '') {
        buttonDistance.disabled = true;
      }
      inputDistance.addEventListener('input', () => {
        inputDistance.value = inputDistance.value.replace(/[^0-9]/, '');
        if (inputDistance.value === '') {
          buttonDistance.disabled = true;
        } else {
          buttonDistance.disabled = false;
        }
      });
  });
};

export default calculator;



