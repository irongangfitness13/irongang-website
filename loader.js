/* Iron Gang Fitness page loader
 *
 * Squarespace holds only a tiny snippet per page, e.g.
 *   <div data-igf-page="home"></div>
 *   <script src="https://irongangfitness13.github.io/irongang-website/loader.js"></script>
 *
 * This script fetches pages/<name>.html from the same place it was loaded
 * from, drops it into that div, and runs the page's scripts in order.
 * Editing pages/*.html in the GitHub repo updates the live site; nothing
 * in Squarespace needs to change.
 */
(function () {
  var me = document.currentScript;
  var base = me ? me.src.replace(/[^\/]*$/, '') : 'https://irongangfitness13.github.io/irongang-website/';

  // Recreate <script> tags so the browser runs them (innerHTML does not),
  // one at a time so external scripts finish loading before the inline
  // code that depends on them.
  function runScripts(scripts, i) {
    if (i >= scripts.length) return;
    var old = scripts[i];
    var s = document.createElement('script');
    for (var a = 0; a < old.attributes.length; a++) {
      s.setAttribute(old.attributes[a].name, old.attributes[a].value);
    }
    if (old.src) {
      s.async = false;
      s.onload = s.onerror = function () { runScripts(scripts, i + 1); };
      old.parentNode.replaceChild(s, old);
    } else {
      s.text = old.text;
      old.parentNode.replaceChild(s, old);
      runScripts(scripts, i + 1);
    }
  }

  function mount(el) {
    if (el.getAttribute('data-igf-loaded')) return;
    el.setAttribute('data-igf-loaded', 'loading');
    var name = el.getAttribute('data-igf-page');
    // no-cache = always ask GitHub whether the file changed (cheap when it hasn't)
    fetch(base + 'pages/' + encodeURIComponent(name) + '.html', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function (html) {
        el.innerHTML = html;
        el.setAttribute('data-igf-loaded', 'done');
        runScripts(Array.prototype.slice.call(el.querySelectorAll('script')), 0);
        // Jump links like /#start only work once the content exists.
        if (location.hash) {
          var t = document.getElementById(location.hash.slice(1));
          if (t) t.scrollIntoView();
        }
      })
      .catch(function (err) {
        el.setAttribute('data-igf-loaded', 'error');
        el.innerHTML = '<p style="padding:40px 24px;text-align:center;font:18px sans-serif">' +
          'This page did not load. Please refresh, or email ' +
          '<a href="mailto:info@irongangfit.com">info@irongangfit.com</a>.</p>';
        if (window.console) console.error('[Iron Gang] page "' + name + '" failed to load:', err);
      });
  }

  var els = document.querySelectorAll('[data-igf-page]');
  for (var i = 0; i < els.length; i++) mount(els[i]);
})();
