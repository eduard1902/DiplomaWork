'use strict';

const sendForm = () => {
  // Отправка формы - заказать консультацию
// Отправка формы - получить расчет и скидку
const errorMessage = 'ошибка',
      loadMessage = 'идет отправка',
      successMessage = 'отправлено',
      forms = document.querySelectorAll('form'),
      formMessage = document.querySelector('.director-form'),
      myonoffswitch = document.getElementById('myonoffswitch'),
      myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
      calcResult = document.getElementById('calc-result'),
      collapseTwo = document.getElementById('collapseTwo'),
      collapseFour = document.getElementById('collapseFour'),
      selectsOne = collapseTwo.querySelectorAll('select'),
      statusMessage = document.createElement('div');

  statusMessage.style.cssText = 'font-size: 2rem;';

  const postData = (body) =>
    fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.appendChild(statusMessage);
      statusMessage.innerHTML = loadMessage;
      const formData = new FormData(form);
      const body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      //форма с вопросом
      if (form.closest('.popup-consultation')) {
        body['message'] = formMessage.querySelector('input').value;
      }

      // форма калькулятор
      if (form.closest('.popup-call')) {
        //запись - камеры
        if (myonoffswitch.checked === true) {
          body['камер'] = 'одна';
        } else {
          body['камер'] = 'две';
        }

        //запись - колодцы
        if (myonoffswitchTwo.checked === true) {
          body['колодец'] = 'есть';
        } else {
          body['колодец'] = 'нет';
        }

        //запись - расстояние
        body['расстояние до дома'] =
          collapseFour.querySelector('input').value + ' метров';

        //запись -  колодцы
        if (myonoffswitch.checked === false) {
          body['Второй колодец - Диаметр'] = selectsOne[2].value;
          body['Второй колодец - Количество колец'] = selectsOne[3].value;
        }
        body['Первый колодец - Диаметр'] = selectsOne[0].value;
        body['Первый колодец - Количество колец'] = selectsOne[1].value;

        //запись - цена
        body['Итоговая цена'] = calcResult.value;
      }

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Status network not 200');
          }
          statusMessage.textContent = successMessage;
          setTimeout(() => (statusMessage.textContent = ''), 5000);
          const allInput = document.querySelectorAll('input');
          allInput.forEach((elem) => {
            elem.value = '';
          });
          form.reset();
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
    });
  });
};
export default sendForm;
