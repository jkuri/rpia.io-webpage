(() => {
  'use strict';

  const body = document.querySelector('body');
  const colorButton = document.querySelectorAll('.color');
  const buttons = document.querySelectorAll('.button');
  let code = document.querySelector('code');
  let markupCopy = document.querySelector('.markup-copy');

  [].forEach.call(colorButton, btn => {
    btn.addEventListener('click', e => {
      let color = e.target.classList.item(1);
      [].forEach.call(buttons, b => {
        b.classList.remove('is-red', 'is-pink', 'is-purple', 'is-deep-purple', 'is-indigo', 'is-blue', 'is-light-blue', 'is-cyan', 'is-teal', 'is-green', 'is-light-green', 'is-lime', 'is-yellow', 'is-amber', 'is-orange', 'is-deep-orange', 'is-brown', 'is-green', 'is-blue-grey', 'is-grey');
        if (color) {
          b.classList.add(color);
        }

        code.innerHTML = markupCopy.innerHTML;
        let btns = code.querySelectorAll('.button');
        [].forEach.call(btns, x => {
          if (color) {
            x.classList.add(color);
          }
        });
        code.innerHTML = code.innerHTML.replace(/</g, '&lt;').replace(/\>/g, '&gt;');
        hljs.highlightBlock(document.querySelector('.language-html'));
      });
    }, false);
  });

})();