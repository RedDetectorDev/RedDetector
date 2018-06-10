// Initial list in case load doesn't work.
// template steal from lihkg
var theList =
{
"支付寶": ["支付寶", "Alipay", "支付宝"],
"百度": ["百度", "Baidu", "百度"],
"香港航空": ["香港航空", "港航", "Hong Kong Airlines", "HongKongAirlines", "HK Airline", "hkairline"]
}
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
  default: function(key, val) {
    var x = this.get(key);
    if (x === null) {
      return this.set(key, val);
    } else {
      return x;
    }
  }
};

var theTree = {};

var hammerFactor = storage.default('hammerFactor', 1);

var enableWords = storage.default('enableWords', true);

var caseSensitivity = storage.default('caseSensitivity', false);

var enableTree = storage.default('enableTree', false);

var enableSingle = storage.default('enableSingle', false);

var sourceUrls = [
    'https://bitbucket.org/awcjack/just-testing/raw/master/list.json'
];

var treeUrls = [
];

var loaded = false;

var loadedTree = false;

if (localStorage.theList) {
  try {
    theList = JSON.parse(localStorage.theList);
  }
  catch (err) {
    console.warn(err);
  }
}
/*
if (localStorage.theTree) {
  try {
    theTree = JSON.parse(localStorage.theTree);
  }
  catch (err) {
    console.warn(err);
  }
}
*/
var _temp = buildPattern_overall(theList);
var pattern = _temp[0], patternEng = _temp[1];

// Don't download heavy resources more than once every $rateLimit ms.
var rateLimit = 1000 * 60 * 15;

function randomPick(list) {
  return list[Math.trunc(Math.random() * list.length)];
}

/**
 * Run a function if (now - last) is > age.
 * @param {Integer}  age       age in milliseconds
 * @param {Integer}  last      instant in time to compare against
 * @param {Function} cb        function to run if age > (now - last)
 * @return {Void}
*/
function runIfOlderThan(age, last, cb) {
  now = Date.now();
  if ((now - last) > age) {
    cb();
  }
}

function lastLoadOf(key, value) {
  if (!key) return v;
  var k = "lastLoadOf_" + key;
  var v = 0;
  if (!value) {
    if (localStorage[k]) {
      v = parseInt(localStorage[k], 10);
    }
    return v;
  } else {
    localStorage[k] = value;
    return value;
  }
}

function wordCount(s) {
  return s.split(' ').length;
}

function wordCountGT(n) {
  return function(s) {
    return wordCount(s) > n;
  };
}

function utf8_validate(str){
    //steal from https://www.codingforums.com/javascript-programming/252162-detecting-non-english-characters.html
    if (!str.match(/([\x80-\uffff])/g)) {
        return true;
    }
    return false;
}

function buildPattern_overall(list){
    var pattern = '(';
    var patternEng = '\\b(';
    for(var key in list){
        var sub_key = list[key];
        for(var name in sub_key){
            if(utf8_validate(sub_key[name])){
                patternEng += sub_key[name] + '|';
            } else {
                pattern += sub_key[name] + '|';
            }
        }
    }
    //remove last '|'
    pattern = pattern.substring(0, pattern.length - 1) + ')';
    patternEng = patternEng.substring(0, patternEng.length - 1) + ')\\b';
    return [pattern, patternEng];
}

// load
function load(url, cb) {
  console.warn('load', url);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var data;
      try {
        data = JSON.parse(xhr.responseText);
      } catch(err) {
        if (err) {
          cb(err);
        }
      }
      cb(null, data);
    }
  };
  xhr.onerror = function() {
    cb(new Error("Could not load '"+url+"'"));
  };
  xhr.send();
}

// loadTheList
function loadTheList(cb) {
  console.warn('loadTheList');
  var sourceUrl = randomPick(sourceUrls);
  load(sourceUrl, function(err, data) {
    if (err) {
      console.warn("loadTheList", err);
      if (cb && typeof cb === "function") cb(err);
    } else {
      loaded = true;
      theList = data;
      _temp = buildPattern_overall(theList);
      pattern = _temp[0], patternEng = _temp[1];
      try {
        localStorage.theList = JSON.stringify(data);
      }
      catch (err) {
        if (cb && typeof cb === "function") cb(err);
        return;
      }
      lastLoadOf('theList', Date.now());
      if (cb && typeof cb === "function") cb(null, theList);
    }
    });
}

function loadTheTree(cb) {
  console.warn('loadTheTree');
  var treeUrl = randomPick(treeUrls);
  load(treeUrl, function(err, data) {
    if (err) {
      console.warn("loadTheTree", err);
      if (cb && typeof cb === "function") cb(err);
    } else {
      loadedTree = true;
      theTree = data;
      try {
        localStorage.theTree = JSON.stringify(data);
      }
      catch (err) {
        if (cb && typeof cb === "function") cb(err);
        return;
      }
      lastLoadOf('theTree', Date.now());
      if (cb && typeof cb === "function") cb(null, theTree);
    }
  });
}

// Disable the following hostnames by default.
var disabledHostnames = [
  "mail.google.com",
  "gmail.com",
  "googlemail.com",
  "live.com",
  "hotmail.com",
  "mail.yahoo.com",
  "maps.google.com",
  "github.com"
];

// onInstalled
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
  chrome.runtime.onInstalled.addListener(function(){
    loadTheList();
    loadTheTree();
    disabledHostnames.forEach(function(h){ localStorage[h] = 1; });
  });
}

// onMessage
chrome.runtime.onMessage.addListener(function(command, sender, sendResponse){
  console.warn('background', command, theList.length);
  switch (command.op) {
    case "load":
      if (!loaded) {
        console.warn('loading data');
        if (localStorage.theList) {
          theList = JSON.parse(localStorage.theList);
          _temp = buildPattern_overall(theList);
          pattern = _temp[0], patternEng = _temp[1];
        }
        runIfOlderThan(rateLimit, lastLoadOf('theList'), function(){
          loadTheList(); // It should be ready for the next page load.
        });
      }
      if (!loadedTree) {
        console.warn('loading theTree');
        if (localStorage.theTree) {
          theTree = JSON.parse(localStorage.theTree);
        }
        runIfOlderThan(rateLimit, lastLoadOf('theTree'), function(){
          loadTheTree();
        });
      }
      sendResponse({ theList: theList, pattern: pattern, patternEng: patternEng, theTree: theTree, enableTree: enableTree, enableWords: enableWords, caseSensitivity: caseSensitivity, hammerFactor: hammerFactor, enableSingle: enableSingle, storage: localStorage });
      break;
    case "clear-title":
      chrome.browserAction.setBadgeText({ text: '' });
      break;
    case "set-title":
      chrome.browserAction.setBadgeText({ text: command.text });
      break;
  }
});
