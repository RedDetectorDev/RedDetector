function hammerify(s, factor) {
  var left = "☭".repeat(factor);
  var right = "☭".repeat(factor);
  return left + s + right;
}

function flagify(s, factor) {
  var left = "🇨🇳".repeat(factor);
  var right = "🇨🇳".repeat(factor);
  return left + s + right;
}

chrome.runtime.sendMessage(null, {op: "clear-title"}, null, function(){});

chrome.runtime.sendMessage(null, {op:"load"}, null, function(state) {
  var theList = state.theList;
  var pattern = state.pattern;
  var theListEng = state.theListEng;
  var patternEng = state.patternEng;
  var theListWords = state.theListWords;
  var patternWords = state.patternWords;
  var theTree = state.theTree;
  var enableWords = state.enableWords;
  var caseSensitivity = state.caseSensitivity;
  var enableTree = state.enableTree;
  if (!enableTree) {
    var regexp = new RegExp(pattern, (caseSensitivity ? "g" : "gi"));
    var regexpEng = new RegExp(patternEng, (caseSensitivity ? "g" : "gi"));
    var regexpWords = new RegExp(patternWords, (caseSensitivity ? "g" : "gi"));
  }
  var hammerFactor = state.hammerFactor;
  var storage = state.storage;
  var anchorStack = [];
  var count = 0;

  var minLength = 0;
  if (!state.enableSingle) {
    minLength = 1;
  }

  if (enableTree && !caseSensitivity) {
    theTree = JSON.parse(JSON.stringify(theTree).toLowerCase());
  }

  var walk = function(node) {
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var next;
    var child = node.firstChild;

    if (node.nodeName === 'A') {
      anchorStack.push(node.nodeName);
    }
    switch (node.nodeType)
    {
      case 1:
        if (node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea') {
          break; // do not process user input
        }
        // no break
      case 9:
      case 11:
        while ( child )
        {
          next = child.nextSibling;
          walk(child);
          child = next;
        }
        break;

      case 3:
        {
          handleText(node);
        }
        break;
    }
    if (node.nodeName === 'A') {
      anchorStack.pop();
    }
  };

  var handleText = function(textNode) {
    count++;
    var v = textNode.nodeValue;
    v = v.replace(regexp, function(j){ count++; return hammerify(j, hammerFactor) });
    v = v.replace(regexpEng, function(j){ count++; return hammerify(j, hammerFactor) });
    if (enableWords) {
      v = v.replace(regexpWords, function(j){ count++; return flagify(j, hammerFactor) });
    }
    textNode.nodeValue = v;
  };

  var checkName = function(words, obj) {
    var word = words[words.length - 1];
    if (!caseSensitivity) {
      word = word.toLowerCase();
    }
    var r;
    if (word in obj) {
      if (obj[word] >= 0) {
        return [1,obj[word]];
      }
      if (words.length >= 2) {
        r = checkName(words.slice(0,-1), obj[word]);
        if (r[0] > 0) {
          return [r[0]+1,r[1]];
        }
      }
      if ("" in obj[word]) {
        return [1,obj[word][""]];
      }
    }
    return [-1,0];
  }

  var handleTextTree = function(textNode) {
    count++;
    var oldtext = textNode.nodeValue;
    var newtext = "";
    var words = oldtext.split(/\b/);
    var n;
    var r;


    while (words.length > 0) {
      r = checkName(words, theTree);
      if (r[0] > minLength) {
        if (r[1] > 0) {
          newtext = hammerify(words.slice(-r[0]).join(""), hammerFactor) + newtext;
        }
        else {
          newtext = words.slice(-r[0]).join("") + newtext;
        }
        words = words.slice(0,-r[0]);
      }
      else {
        newtext = words.pop() + newtext;
      }
    }
    textNode.nodeValue = newtext;
  };

  var observerOptions = { childList: true, subtree: true };
  var observer;

  var mutationHandler = function(mutations) {
    mutations.forEach(function(m) {
      if (m.type != 'childList') return;
      m.addedNodes.forEach(function(n) {
        if (n.nodeType != Node.ELEMENT_NODE) return;
        observer.disconnect();
        if (!n.isContentEditable) {
          walk(n);
        }
        observer.observe(document.body, observerOptions);
      });
    });
  };

  var hostname = location.host; // popup.js :: getActiveTabHostname returns something more like location.host than location.hostname
  if (! storage[hostname]) {
    walk(document.body);
    observer = new MutationObserver(mutationHandler);
    observer.observe(document.body, observerOptions);
  }

  /*
  if (count > 0) {
    chrome.runtime.sendMessage(null, { op: "set-title", text: count.toString() }, null, function(){});
  }
  */

});

