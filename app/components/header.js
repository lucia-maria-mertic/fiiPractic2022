import { createElement, compile } from '../dom-utils.js';

const template = `
  <h1>{title}</h1>
  <button name="add-event"><i>+</i>{buttonLabel}</button>
`;

export const render = (rootElement) => {
  const element = createElement('header', {
    className: 'app-header',
    innerHTML: compile(template, {
      title: 'Calendar',
      buttonLabel: 'Add Event'
    })
  });
  rootElement.appendChild(element);
}