(() => {
  'use strict';

  const searchForm = document.querySelector('.form');
  const search = document.querySelector('.search-input');
  const iconsContainer = document.querySelector('.icons');
  let icons = document.querySelectorAll('.icons > li');

  const iconButtons = document.querySelectorAll('.icon-button');
  const containers = ['ionicons', 'fontawesome', 'material'];

  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    e.stopPropagation();
  }, false);

  [].forEach.call(iconButtons, btn => {
    btn.addEventListener('click', e => {
      search.value = '';
      let ev = new Event('keyup');
      search.dispatchEvent(ev);

      let target = e.target;
      let set = target.dataset.set;
      [].forEach.call(iconButtons, iconButton => iconButton.classList.remove('is-active'));
      target.classList.add('is-active');

      hideContainers();
      showContainer(set);
    }, false);
  });

  let hideContainers = function() {
    containers.forEach(c => {
      document.querySelector(`.${c}`).classList.add('is-hidden');
      document.querySelector(`.${c}-heading`).classList.add('is-hidden');
    });
  };

  let showContainer = function(set) {
    document.querySelector(`.${set}`).classList.remove('is-hidden');
    document.querySelector(`.${set}-heading`).classList.remove('is-hidden');
  };

  search.addEventListener('keyup', e => {
    let keyword = search.value;
    let tips = document.querySelectorAll('.tip');

    [].forEach.call(tips, tip => {
      tip.parentNode.removeChild(tip);
    });

    let icons = document.querySelectorAll('.icons:not(.is-hidden) > li');

    if (keyword.length > 2) {
      [].forEach.call(icons, i => {
        let c;

        c = i.classList.item(0);
        if (c === 'fa' || c === 'mdi') {
          c = i.classList.item(1);
        }

        if (c.indexOf(keyword) === -1) {
          i.classList.add('is-hidden');
        } else {
          i.classList.remove('is-hidden');
        }
      });
    } else {
      [].forEach.call(icons, i => {
        i.classList.remove('is-hidden');
      });
    }
  }, false);

  [].forEach.call(icons, i => {
    i.addEventListener('click', e => {
      [].forEach.call(document.querySelectorAll('.tip'), tip => {
        tip.parentNode.removeChild(tip);
      });
      let target = e.target;
      let c = target.classList.item(0);
      if (c === 'fa' || c === 'mdi') {
        c += ` ${target.classList.item(1)}`;
      }
      let tip = document.createElement('div');
      tip.classList.add('tip');
      let content = `
      <span class='icon'>
        <i class='${c}'>
      </span>
      `;
      tip.innerHTML = `<pre class='icon-pre'><code class='language-html icon-code'>${content.replace(/</g, '&lt;').replace(/\>/g, '&gt;')}</code></pre>`;
      hljs.highlightBlock(tip);
      target.parentNode.insertBefore(tip, target.nextSibling);
    }, false);
  });
})();
