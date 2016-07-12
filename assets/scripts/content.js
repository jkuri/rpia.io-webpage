(() => {
  'use strict';

  const classButtons = document.querySelectorAll('.class-button');
  const demoContent = document.querySelector('.demo-content');
  const markup = document.querySelector('.language-html');
  const markupCopy = document.querySelector('.markup-copy');

  [].forEach.call(classButtons, classBtn => {
    classBtn.addEventListener('click', e => {
      [].forEach.call(classButtons, classButton => {
        classButton.classList.remove('is-active');
      });

      let target = e.target;
      let c = target.dataset.class;
      target.classList.add('is-active');

      demoContent.classList.remove('is-mini', 'is-medium', 'is-large');
      demoContent.classList.add(c);

      markup.innerHTML = markupCopy.innerHTML;
      markup.querySelector('.content').classList.add(c);
      markup.innerHTML = markup.innerHTML.replace(/</g, '&lt;').replace(/\>/g, '&gt;');
      hljs.highlightBlock(markup);
    }, false);
  });
})();