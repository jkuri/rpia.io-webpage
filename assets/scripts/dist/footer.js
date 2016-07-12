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
  let demo = document.querySelector('.demo');
  let demoCode = document.querySelector('.demo-code');

  initMarkup(demo, demoCode);

  [].forEach.call(colorButtons, colorButton => {
    colorButton.addEventListener('click', e => {
      let demoFooter = document.querySelector('.demo > .footer');
      let color = e.target.classList.item(1);
      demoFooter.classList.remove('is-red', 'is-pink', 'is-purple', 'is-deep-purple', 'is-indigo', 'is-blue', 'is-light-blue', 'is-cyan', 'is-teal', 'is-green', 'is-light-green', 'is-lime', 'is-yellow', 'is-amber', 'is-orange', 'is-deep-orange', 'is-brown', 'is-green', 'is-blue-grey', 'is-grey');
      if (color) {
        demoFooter.classList.add(color);
      }
      initMarkup(demo, demoCode);
    }, false);
  });

  function initMarkup(code, markup) {
    code.innerHTML = tidy_html5(code.innerHTML, tidyOpts);
    markup.innerHTML = code.innerHTML.replace(/</g, '&lt;').replace(/\>/g, '&gt;');
    hljs.highlightBlock(markup);
  }

})();