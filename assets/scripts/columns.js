(() => {
  'use strict';

  const tidyOpts = {
    'indent': 'auto',
    'indent-spaces': 2,
    'output-xml': false,
    'show-body-only': true,
    'tidy-mark': false,
    'show-info': false,
    'show-warnings': false,
    'quiet': true
  };

  let firstCaseCode = document.querySelector('.code-first-case');
  let firstCaseMarkup = document.querySelector('.markup-first-case');

  let secondCaseCode = document.querySelector('.code-second-case');
  let secondCaseMarkup = document.querySelector('.markup-second-case');

  let thirdCaseCode = document.querySelector('.code-third-case');
  let thirdCaseMarkup = document.querySelector('.markup-third-case');

  let fourthCaseCode = document.querySelector('.code-fourth-case');
  let fourthCaseMarkup = document.querySelector('.markup-fourth-case');

  const addColumnButton = document.querySelector('.add-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const classes = ['', 'alert-danger', 'alert-success', 'alert-warning'];
  const hellos = ['Hello!', 'Salut!', 'Hallo!', 'Ciao!', 'Bog!', 'YAH sahs', 'Hola!', 'Czesc', 'Hej!', 'Shalom!', 'Merhaba!', 'Ola!'];

  initMarkup(firstCaseCode, firstCaseMarkup);
  initMarkup(secondCaseCode, secondCaseMarkup);
  initMarkup(thirdCaseCode, thirdCaseMarkup);
  initMarkup(fourthCaseCode, fourthCaseMarkup);

  // first case
  addColumnButton.addEventListener('click', e => {
    addColumn(firstCaseCode);
  }, false);

  removeColumnButton.addEventListener('click', e => {
    removeColumn(firstCaseCode);
  }, false);

  // second case
  let sizeButtons = document.querySelectorAll('.size-button');

  [].forEach.call(sizeButtons, sizeButton => {
    sizeButton.addEventListener('click', b => {
      let secondCaseColumns = secondCaseCode.querySelectorAll('.column');
      [].forEach.call(sizeButtons, btn => btn.classList.remove('is-active'));
      b.target.classList.add('is-active');
      secondCaseColumns[0].classList.remove('is-three-quarters', 'is-two-thirds', 'is-half', 'is-one-third', 'is-one-quarter');
      secondCaseColumns[0].classList.add(b.target.classList.item(2));
      secondCaseColumns[0].querySelector('.alert').innerHTML = `.${b.target.classList.item(2)}`;
      initMarkup(secondCaseCode, secondCaseMarkup);
    }, false);
  });  

  // third case
  let columnButtons = document.querySelectorAll('.column-button');

  [].forEach.call(columnButtons, columnButton => {
    columnButton.addEventListener('click', b => {
      let thirdCaseColumns = thirdCaseCode.querySelectorAll('.column');
      [].forEach.call(columnButtons, btn => btn.classList.remove('is-active'));
      b.target.classList.add('is-active');
      thirdCaseColumns[0].classList.remove('is-2', 'is-3', 'is-4', 'is-5', 'is-6', 'is-7', 'is-8', 'is-9', 'is-10', 'is-11');
      thirdCaseColumns[0].classList.add(b.target.classList.item(2));
      thirdCaseColumns[0].querySelector('.alert').innerHTML = `.${b.target.classList.item(2)}`;
      initMarkup(thirdCaseCode, thirdCaseMarkup);
    }, false);
  });

  // fourth case
  let offsetColumnButtons = document.querySelectorAll('.offset-column-button');
  let offsetButtons = document.querySelectorAll('.offset-button');

  [].forEach.call(offsetColumnButtons, offsetColumnButton => {
    offsetColumnButton.addEventListener('click', b => {
      let fourthCaseColumns = fourthCaseCode.querySelectorAll('.column');
      [].forEach.call(offsetColumnButtons, btn => btn.classList.remove('is-active'));
      b.target.classList.add('is-active');
      fourthCaseColumns[0].classList.remove('is-2', 'is-3', 'is-4', 'is-5', 'is-6', 'is-7', 'is-8', 'is-9', 'is-10', 'is-11');
      fourthCaseColumns[0].classList.add(b.target.classList.item(2));
      fourthCaseColumns[0].querySelectorAll('p')[0].innerHTML = `.${b.target.classList.item(2)}`;
      initMarkup(fourthCaseCode, fourthCaseMarkup);
    }, false);
  });

  [].forEach.call(offsetButtons, offsetButton => {
    offsetButton.addEventListener('click', b => {
      let fourthCaseColumns = fourthCaseCode.querySelectorAll('.column');
      [].forEach.call(offsetButtons, btn => btn.classList.remove('is-active'));
      b.target.classList.add('is-active');
      fourthCaseColumns[0].classList.remove('is-offset-1', 'is-offset-2', 'is-offset-3', 'is-offset-4', 'is-offset-5', 'is-offset-6', 'is-offset-7', 'is-offset-8', 'is-offset-9', 'is-offset-10');
      fourthCaseColumns[0].classList.add(b.target.classList.item(2));
      fourthCaseColumns[0].querySelectorAll('p')[1].innerHTML = `.${b.target.classList.item(2)}`;
      initMarkup(fourthCaseCode, fourthCaseMarkup);
    }, false);
  });

  function initMarkup(code, markup) {
    code.innerHTML = tidy_html5(code.innerHTML, tidyOpts);
    markup.innerHTML = code.innerHTML.replace(/</g, '&lt;').replace(/\>/g, '&gt;');
    hljs.highlightBlock(markup);
  }

  function addColumn(code) {
    let el = document.createElement('div');
    el.classList.add('column');
    let tpl = `
    <div class='alert ${classes[Math.floor(Math.random() * classes.length)]}'>
      ${hellos[Math.floor(Math.random() * hellos.length)]}
    </div>
    `;
    el.innerHTML = tpl;

    code.querySelector('.columns').appendChild(el);
    initMarkup(code, firstCaseMarkup);
  }

  function removeColumn(code) {
    let columns = code.querySelectorAll('.column');
    if (columns.length > 1) {
      code.querySelector('.columns').removeChild(columns[columns.length - 1]);
    }

    initMarkup(code, firstCaseMarkup);
  }

})();