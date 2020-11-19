// import Nylas from 'nylas';
const nylas = function() {
  var backdropEl = document.createElement('div');
  var spinnerEl = document.createElement('div');
  spinnerEl.setAttribute('class', 'nylas-spinner');
  spinnerEl.innerHTML =
    '<svg width="38" height="38" viewBox="0 0 40 40" stroke="currentColor"><g transform="translate(1 1)" stroke-width={2} fill="none" fill-rule="evenodd"><circle stroke-opacity=".4" cx="18" cy="18" r="18" /><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" /></path></g></svg>';
  
  
  function subscribeToPostMessage(handler) {
    if (window.addEventListener) {
      window.addEventListener('message', handler, false);
      return function() {
        window.removeEventListener('message', handler, false);
      };
    } else {
      window.attachEvent('onmessage', handler, false);
      return function() {
        window.detachEvent('onmessage', handler, false);
      };
    }
  }

  var openInstance = null;
  var nylas = {
    scheduler: {
      show: function(config) {
        // Validation
        if (!config.auth || !(config.auth.pageEditToken || config.auth.accessToken)) {
          throw new Error('Nylas: You must provide an auth object with either a pageEditToken or accessToken');
        }
        if (config.behavior && config.behavior.displayOnly) {
          if (!(config.behavior.displayOnly instanceof Array)) {
            throw new Error('behavior.displayOnly should be an array of tab IDs');
          }
          if (config.behavior.displayOnly.length === 0) {
            throw new Error('behavior.displayOnly must contain at least one tab ID');
          }
        }
        var theme = config.style || {};
        if (Object.keys(theme).find(k => !['tintColor', 'backgroundColor'].includes(k))) {
          throw new Error('Nylas: Unknown style key found in the styling configuration.');
        }
        // backwards compatibility with very early version of schedule-editor.js
        if (config.host) {
          config.domain = config.host;
        }
        var disposeListener = null;
        var host = config.domain || 'schedule.nylas.com';
        var protocol = 'https://';
        if (host.includes('://')) {
          protocol = '';
        } else if (host.includes('localhost') || host.includes('127.0.0.1')) {
          protocol = 'http://';
        }
        

        var instance = {};
        
        instance.show = function() {
          if (openInstance) openInstance.hide();
          openInstance = instance;
          var modalEl = document.createElement('div');
          var iframeEl = document.createElement('iframe');
          console.log({source: protocol + host + '/embed/'})
          iframeEl.setAttribute('src', protocol + host + '/embed/');
          modalEl.style.backgroundColor = (config['style'] && config['style']['backgroundColor']) || 'white';
          spinnerEl.style.color = modalEl.style.backgroundColor;
          modalEl.setAttribute('class', 'nylas-modal');
          modalEl.appendChild(iframeEl);
          modalEl.appendChild(spinnerEl);
          backdropEl.setAttribute('class', 'nylas-backdrop nylas-hidden');
          backdropEl.appendChild(modalEl);
          document.body.appendChild(backdropEl);
          var dismissOnBackgroundClick = !config.behavior || config.behavior.dismissOnBackgroundClick !== false;
          if (dismissOnBackgroundClick) {
            backdropEl.addEventListener('click', instance.hide);
          }
          disposeListener = subscribeToPostMessage(function(e) {
            if (e.data && e.data.type === 'nylas:close-modal') {
              instance.hide();
            }
            if (e.data && e.data.type === 'nylas:config-request') {
              // NOTE: We specify a target origin of `host` so other iframes / listeners do
              // not receive this postMessage.
              iframeEl.contentWindow.postMessage({ type: 'nylas:config-response', config: config }, protocol + host);
            }
            if (e.data && e.data.type === 'nylas:ready') {
              modalEl.setAttribute('class', 'nylas-modal nylas-ready');
              setTimeout(function() {
                spinnerEl.remove();
              }, 190);
            }
          });
          setTimeout(function() {
            backdropEl.setAttribute('class', 'nylas-backdrop');
            spinnerEl.setAttribute('class', 'nylas-spinner');
          }, 50);
        };
        
        
        instance.hide = function() {
          disposeListener();
          if (openInstance !== instance) return;
          openInstance = null;
          backdropEl.removeEventListener('click', instance.hide);
          backdropEl.setAttribute('class', 'nylas-backdrop nylas-hidden');
          spinnerEl.setAttribute('class', 'nylas-spinner nylas-hidden');
          backdropEl.remove()
        };
        instance.show();
        return instance;
      },
    },
  };
  
  
  return nylas
};

export default nylas