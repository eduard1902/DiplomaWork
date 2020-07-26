"use strict";

const sendMessage = () => {
  // Модальное окно 3 
  const consultationBtn = document.querySelectorAll(".consultation-btn"),
    popupConsultation = document.querySelector(".popup-consultation");
  consultationBtn.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
    });
    elem.addEventListener("click", () => {
      popupConsultation.style.display = "block";
    });
  });
  popupConsultation.addEventListener("click", (event) => {
    let target = event.target;

    if (target.classList.contains("popup-close")) {
      popupConsultation.style.display = "none";
    } else {
      target = target.closest(".popup-content");

      if (!target) {
        popupConsultation.style.display = "none";
      }
    }
  });
};
export default sendMessage;

