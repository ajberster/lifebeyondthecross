(function () {
  var base = document.currentScript.src.replace('js/nav.js', '');
  fetch(base + 'nav.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      html = html.replace(/\{\{BASE\}\}/g, base);
      var tmp = document.createElement('div');
      tmp.innerHTML = html;
      var placeholder = document.getElementById('nav-placeholder');
      if (placeholder) placeholder.replaceWith(tmp.firstElementChild);
    });
}());
