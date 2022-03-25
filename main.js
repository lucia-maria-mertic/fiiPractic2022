import { render as renderHeader } from './app/components/header.js';
import { render as renderDatePicker } from './app/components/date-picker.js';
import { createElement } from './app/dom-utils.js'

(() => {  
  const appElement = document.getElementById('wrapper');
  
  renderHeader(appElement);
  renderAppContent(appElement);

  renderDatePicker(document.getElementById("calendar-wrapper"));

  function renderAppContent(rootElement) {
    const element = createElement('section', {
      innerHTML: `
        <aside>
          <div id="calendar">
              <h3>Calendar</h3>
              <div id="calendar-wrapper"></div>
          </div>
          <div id="categories">
              <h3>Categories</h3>
          </div>
        </aside>
        <main>
            <h2>Events of the day</h2>
        </main>
      `
    });
    rootElement.appendChild(element);
  }
})();
