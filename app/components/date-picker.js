import { createElement } from '../dom-utils.js';

export const render = (rootElement) => {
  const section = document.createElement("section");
    const labels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    for (let i = 0; i < labels.length; i++) {
      const div = createElement("div", {
        textContent: labels[i],
      });
      section.appendChild(div);
    }

    const date = new Date();
    const today = new Date();
    const prev = new Date(today);
    prev.setDate(0);
    date.setDate(1);
    let day = 1;
    const currentMonth = date.getMonth();
    
    day = date.getDay();
    while(day > 0) {
      const div = createElement("div", {
        textContent: prev.getDate(),
      });
      prev.setDate(-1);
      day--;
      section.appendChild(div);
    }

    day = 1;
    while (date.getMonth() === currentMonth) {
      const div = createElement("div", {
        textContent: day,
        className: date.getDate() === today.getDate() ? 'today' : '',
      });
       
      section.appendChild(div);
      date.setDate(++day);
    }

    rootElement.appendChild(section);
}