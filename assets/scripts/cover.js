(() => {
  'use strict';

  const tidyOpts = {
    'indent': true,
    'indent-spaces': 2,
    'output-xml': false,
    'show-body-only': true,
    'tidy-mark': false,
    'show-info': false,
    'show-warnings': false,
    'quiet': true,
    'drop-empty-elements': false,
    'markup': true
  };

  let colorButtons = document.querySelectorAll('.color');
  let sizeButtons = document.querySelectorAll('.size-button');
  let gradientButton = document.querySelector('.gradient-button');
  let demo = document.querySelector('.demo-cover');
  let demoCode = document.querySelector('.demo-code');

  initMarkup(demo, demoCode);

  [].forEach.call(colorButtons, colorButton => {
    colorButton.addEventListener('click', e => {
      let demoCover = document.querySelector('.demo-cover > .cover');
      let color = e.target.classList.item(1);
      demoCover.classList.remove('is-red', 'is-pink', 'is-purple', 'is-deep-purple', 'is-indigo', 'is-blue', 'is-light-blue', 'is-cyan', 'is-teal', 'is-green', 'is-light-green', 'is-lime', 'is-yellow', 'is-amber', 'is-orange', 'is-deep-orange', 'is-brown', 'is-green', 'is-blue-grey', 'is-grey');
      if (color) {
        demoCover.classList.add(color);
      }
      initMarkup(demo, demoCode);
    }, false);
  });

  [].forEach.call(sizeButtons, sizeButton => {
    sizeButton.addEventListener('click', e => {
      [].forEach.call(sizeButtons, b => b.classList.remove('is-active'));
      e.target.classList.add('is-active');
      let demoCover = document.querySelector('.demo-cover > .cover');
      let size = e.target.innerHTML.trim();
      demoCover.classList.remove('is-fullheight', 'is-medium', 'is-large');
      demoCover.classList.add(size);
      initMarkup(demo, demoCode);
    }, false);
  });

  gradientButton.addEventListener('click', btn => {
    btn.target.classList.toggle('is-active');
    demo.querySelector('.cover').classList.toggle('is-gradient');
    initMarkup(demo, demoCode);
  }, false);

  function initMarkup(code, markup) {
    code.innerHTML = tidy_html5(code.innerHTML, tidyOpts);
    markup.innerHTML = code.innerHTML.replace(/</g, '&lt;').replace(/\>/g, '&gt;');
    hljs.highlightBlock(markup);
  }

})();