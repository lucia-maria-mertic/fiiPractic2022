(() => {
  const calendar = document.getElementById('calendar-wrapper');

  const header = document.createElement('header');

  function createElement(tagName) {
    const button = document.createElement(tagName);

    return (props) => {
      const tag = button.cloneNode(true);

      if (typeof props === 'object') {
        Object.keys(props).forEach(prop => {
          tag[prop] = props[prop]
        })
      }

      return tag
    }
  }

  const button = createElement('button');

  const div = createElement('div')

  calendar.insertAdjacentElement('afterend', div({
    style: 'background-color: red;padding: 10px',
    textContent: 'DIV1'
  }))
  calendar.insertAdjacentElement('afterend', div({
    style: 'background-color: black;color: white;padding: 10px',
    innerText: 'DIV2'
  }))


  const prevMonth = button({
    name: 'previous-month',
    type: 'button',
    innerText: '<<'
  })

  const prevDay = button({
    name: 'previous-day',
    type: 'button',
    innerText: '<'
  })

 header.appendChild(prevMonth)
 header.insertAdjacentElement('beforeend', prevDay)

  calendar.parentNode.querySelector('h3')
    .insertAdjacentElement('afterend', header)

  const section = document.createElement('section');
  const labels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  for(let i = 0; i < labels.length; i++) {
    const div = document.createElement('div');
    div.textContent = labels[i];
    section.appendChild(div);
  }

  const date = new Date();
  date.setDate(1);
  const currentMonth = date.getMonth();

  let day = 1;

  while(date.getMonth() === currentMonth) {
    const div = document.createElement('div');
    div.textContent = day;
    section.appendChild(div);
    date.setDate(++day);
  }

  calendar.appendChild(section);
})();