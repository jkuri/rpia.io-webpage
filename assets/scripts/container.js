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

  let btn = document.querySelector('.fluid-button');
  let demo = document.querySelector('.demo');
  let code = document.querySelector('.demo-code');

  initMarkup(demo, code);

  btn.addEventListener('click', e => {
    e.target.classList.toggle('is-active');
    demo.querySelector('.container').classList.toggle('is-fluid');
    initMarkup(demo, code);
  }, false);

  function initMarkup(code, markup) {
    code.innerHTML = tidy_html5(code.innerHTML, tidyOpts);
    markup.innerHTML = code.innerHTML.replace(/</g, '&lt;').replace(/\>/g, '&gt;');
    hljs.highlightBlock(markup);
  }

})();