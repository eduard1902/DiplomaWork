const accordion = () => {
    const accordionTwo = document.getElementById('accordion-two');
        accordionTwo.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            target = target.closest('.panel-default');
            const collapseIn = accordionTwo.querySelector('.collapse.in');
            collapseIn.classList.remove('in');
            collapseIn.classList.add('collapse');
            target.children[1].classList.add('in');
        });
    };
export default accordion;

