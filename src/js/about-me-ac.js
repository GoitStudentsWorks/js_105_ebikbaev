import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('.accordion-container', {
    duration: 300,
    showMultiple: false,
  });
});
