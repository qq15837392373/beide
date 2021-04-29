(function (doc, win) {
    let fn = () => {
      let docEl = doc.documentElement,
        clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 16 * (clientWidth / 1920) + 'px';
    }
    if (!doc.addEventListener) return;
    win.addEventListener('resize', fn);
    doc.addEventListener('DOMContentLoaded', fn);
  })(document, window);
