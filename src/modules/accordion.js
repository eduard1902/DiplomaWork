const accordion = () => {
  const accordion = document.getElementById('accordion-two'),
      panel = accordion.querySelectorAll('.panel'),
      panelCollapse = document.querySelectorAll('#accordion-two .panel > .panel-collapse');
      accordion.addEventListener('click', (event) => {
        event.preventDefault();
          let target = event.target;
          target = target.closest('.panel');
          if (target) {
            panel.forEach((item, i) => {
              if (item === target) {
                toggleContent(i);
              }
            });
          }
        });
  const toggleContent = (index) => {
    for (let i = 0; i < panelCollapse.length; i++) {
        if (index === i) {
        panelCollapse[i].classList.add('in');
        } else {
           panelCollapse[i].classList.remove('in');
        }
    }
  }; 
};
export default accordion;

