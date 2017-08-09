function getActiveTabHostname(cb) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    var hostname = "";
    if (url) {
      // http://stackoverflow.com/questions/3689423/google-chrome-plugin-how-to-get-domain-from-url-tab-url
      hostname = url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
    }
    cb(null, hostname);
  });
}

/**
 * Utility functions for localStorage
 */
storage = {
  get: function(key) {
    var val = localStorage.getItem(key);
    var res;
    if (val == undefined) {
      return val;
    } else {
      try {
        res = JSON.parse(val);
      }
      catch (err) {
        res = undefined;
      }
      return res;
    }
  },
  set: function(key, val) {
    var storedVal = JSON.stringify(val);
    localStorage[key] = storedVal;
    return val;
  },
  toggle: function(key) {
    var val = this.get(key);
    if (val) {
      return this.set(key, false);
    } else {
      return this.set(key, true);
    }
  }
};

cc = String.fromCharCode;

function displayToggleState(toggleState) {
  getActiveTabHostname(function(err, hostname) {
    if (localStorage[hostname]) {
      toggleState.textContent = cc(9744);
    } else {
      toggleState.textContent = cc(9745);
    }
  });
}

function displayToggleWordsState(toggleWordsState) {
  var v = storage.get('enableWords');
  if (v) {
    toggleWordsState.textContent = cc(9745);
  } else {
    toggleWordsState.textContent = cc(9744);
  }
}

/*
function displayToggleCaseState(toggleCaseState) {
  var v = storage.get('caseSensitivity');
  if (v) {
    toggleCaseState.textContent = cc(9745);
  } else {
    toggleCaseState.textContent = cc(9744);
  }
}

function displayToggleTreeState(toggleTreeState) {
  var v = storage.get('enableTree');
  if (v) {
    toggleTreeState.textContent = cc(9745);
  } else {
    toggleTreeState.textContent = cc(9744);
  }
}

function displayToggleSingleState(toggleSingleState) {
  var v = storage.get('enableSingle');
  if (v) {
    toggleSingleState.textContent = cc(9745);
  } else {
    toggleSingleState.textContent = cc(9744);
  }
}
*/

function displayHammerFactor(hammerSpan) {
  chrome.runtime.getBackgroundPage(function(bg) {
    if (localStorage.hammerFactor) {
      bg.hammerFactor = parseInt(localStorage.hammerFactor, 10);
    }
    hammerSpan.textContent = bg.hammerFactor.toString();
  });
}

function displayListLength(countSpan) {
  chrome.runtime.getBackgroundPage(function(bg) {
    var len = bg.theList.length;
    countSpan.textContent = len.toString().replace(/(\d)(?=(\d{3})+$)/, '$1,'); // add commas
  });
}

function displayVersion(versionSpan) {
  versionSpan.textContent = chrome.runtime.getManifest().version;
}

function inc(cb) {
  chrome.runtime.getBackgroundPage(function(bg) {
    bg.hammerFactor++;
    localStorage.hammerFactor = bg.hammerFactor;
    cb(null, bg.hammerFactor);
  });
}

function dec(cb) {
  chrome.runtime.getBackgroundPage(function(bg) {
    if (bg.hammerFactor > 0) {
      bg.hammerFactor--;
      localStorage.hammerFactor = bg.hammerFactor;
      cb(null, bg.hammerFactor);
    }
  });
}

/*
function restoreSavedList() {
  chrome.runtime.getBackgroundPage(function(bg) {
    if (localStorage.theList) {
      bg.console.warn('restoring');
      bg.theList = JSON.parse(localStorage.theList);
    }
  });
}

restoreSavedList();
*/

document.addEventListener('DOMContentLoaded', function() {
  var siteName          = document.getElementById('siteName');
  var toggle            = document.getElementById('toggle');
  var toggleState       = document.getElementById('toggleState');
  var toggleWords       = document.getElementById('toggleWords');
  var toggleWordsState  = document.getElementById('toggleWordsState');
/*
  var toggleCase        = document.getElementById('toggleCase');
  var toggleCaseState   = document.getElementById('toggleCaseState');
  var toggleTree        = document.getElementById('toggleTree');
  var toggleTreeState   = document.getElementById('toggleTreeState');
  var toggleSingle      = document.getElementById('toggleSingle');
  var toggleSingleState = document.getElementById('toggleSingleState');
*/
  var hammerSpan          = document.getElementById('hammer');
  var incSpan           = document.getElementById('inc');
  var decSpan           = document.getElementById('dec');
  var countSpan         = document.getElementById('count');
  var refresh           = document.getElementById('refresh');
  var loading           = document.getElementById('loading');
  var versionSpan       = document.getElementById('version');

  getActiveTabHostname(function(err, hostname) {
    if (hostname) {
      siteName.textContent = hostname;
    } else {
      sitename.textContent = "This Site";
    }
  });

  displayToggleState(toggleState);
  displayToggleWordsState(toggleWordsState);
/*
  displayToggleCaseState(toggleCaseState);
  displayToggleTreeState(toggleTreeState);
  displayToggleSingleState(toggleSingleState);
*/
  displayHammerFactor(hammerSpan);
  displayListLength(countSpan);
  displayVersion(versionSpan);

  toggle.addEventListener('click', function(ev) {
    chrome.runtime.getBackgroundPage(function(bg) {
      getActiveTabHostname(function(err, hostname) {
        if (hostname) {
          var val = localStorage[hostname];
          if (val) {
            localStorage.removeItem(hostname);
          } else {
            localStorage[hostname] = 1;
          }
          displayToggleState(toggleState);
        }
      });
    });
  });


  toggleWords.addEventListener('click', function(ev) {
    chrome.runtime.getBackgroundPage(function(bg) {
      bg.enableWords = storage.toggle('enableWords');
      bg.loaded = false;
      displayToggleWordsState(toggleWordsState);
    });
  });

/*
  toggleCase.addEventListener('click', function(ev) {
    chrome.runtime.getBackgroundPage(function(bg) {
      bg.caseSensitivity = storage.toggle('caseSensitivity');
      bg.loaded = false;
      displayToggleCaseState(toggleCaseState);
    });
  });

  toggleTree.addEventListener('click', function(ev) {
    chrome.runtime.getBackgroundPage(function(bg) {
      bg.enableTree = storage.toggle('enableTree');
      displayToggleTreeState(toggleTreeState);
      if (bg.enableTree) {
        bg.enableJudasWatch = storage.set('enableJudasWatch', false);
        displayToggleJudasState(toggleJudasState);
      }
    });
  });

  toggleSingle.addEventListener('click', function(ev) {
    chrome.runtime.getBackgroundPage(function(bg) {
      bg.enableSingle = storage.toggle('enableSingle');
      bg.loaded = false; // reload the list next time
      displayToggleSingleState(toggleSingleState);
    });
  });
*/

  incSpan.addEventListener('click', function(ev) {
    inc(function(err, hammerFactor) {
      hammerSpan.textContent = hammerFactor.toString();
    });
  });

  decSpan.addEventListener('click', function(ev) {
    dec(function(err, hammerFactor) {
      hammerSpan.textContent = hammerFactor.toString();
    });
  });

  refresh.addEventListener('click', function(ev) {
    loading.className = "";
    refresh.className = "";
    chrome.runtime.getBackgroundPage(function(bg) {
      bg.loadTheList(function(err){
        if (err) {
          refresh.className = "error";
        }
        displayListLength(countSpan);
/*
        bg.loadTheTree(function(err){
          if (err) {
            refresh.className = "error";
          }
        });
*/
        loading.className = "hidden";
      });
    });
  });
});
