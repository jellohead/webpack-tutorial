import _ from 'lodash';
<<<<<<< HEAD
import printMe from './print.js';
=======

>>>>>>> a00aceee8912efa4b7bde2a3be7bd5ccb7211b7a

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
<<<<<<< HEAD

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

=======
    element.classList.


>>>>>>> a00aceee8912efa4b7bde2a3be7bd5ccb7211b7a

    return element;
}

document.body.appendChild(component());