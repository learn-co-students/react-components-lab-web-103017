// Make sure to import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const grannies = React.createElement('p', {}, 'Two grannies having the time of their life!');
const p = React.createElement('p', {}, 'Passengers:');
const li1 = React.createElement('li', {}, 'Agnes')
const li2 = React.createElement('li', {}, 'Muriel')
// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', {className: 'oldercoaster'}, [
      grannies,
      p,
      React.createElement('ul', {}, [li1, li2])
    ]);
  }
};
export class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, "Sometimes, the solution is right in front of you.")
    ]);
  }
};

export class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', {className: 'butcher-shop'}, [
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
      React.createElement('ul', {}, BUTCHER_PRODUCTS.map(product => React.createElement('li', {}, product)))
    ])
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
