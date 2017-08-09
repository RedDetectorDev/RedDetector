// Initial list in case load doesn't work.
var theList = [
"01博評",
"01哲學",
"01觀點",
"U購",
"三九集團",
"三聯",
"中信集團",
"中國旅行社",
"中國移動",
"中國銀行",
"中央電視台",
"中旅社",
"中港混凝土",
"中移動",
"中華書局",
"中藝",
"中銀",
"互動百科",
"五豐行",
"亞美大陸煤層氣",
"僑商置業",
"優酷",
"凱雷",
"利原",
"北京紫竹藥業",
"南周",
"南方周末",
"博雅藝術",
"名創優品",
"商務印",
"商務印書館",
"商報",
"喜羊羊",
"噴射飛航",
"囍臨門",
"國信證券",
"土豆",
"大公報",
"大同機械",
"天貓",
"太平洋咖啡",
"太陽報",
"央視",
"富臨",
"小南國",
"小王牛肉麵",
"小米",
"微信",
"惟膳",
"成報",
"招商局",
"支付寶",
"文匯報",
"新報",
"新浪",
"新雅文化",
"星島日報",
"晴報",
"東方日報",
"東阿阿膠",
"海南航空",
"淘寶",
"炎丸居酒屋",
"無綫電視",
"無線電視",
"白熊咖哩",
"百佳",
"百利唱片",
"百度",
"睦美屋",
"維景酒店",
"翠華",
"聯合出版",
"聯合電子出版",
"英文虎報",
"華潤",
"華為",
"萬里機構",
"蘇文大學",
"西隧",
"許留山",
"譽宴",
"谷姐",
"金威",
"銀座梅林",
"阿里巴巴",
"集古齋",
"頭條日報",
"香港01",
"香港聯合書刊物流",
"香港航空",
"騰訊",
"麥當勞"
];

var theListEng = [
"Alipay",
"Baidu",
"Crabtree & Evelyn",
"Descente",
"FILA",
"Folli Follie",
"Genesis Care",
"GenesisCare",
"Goojje",
"HK01",
"Huawei",
"Italian Tomato",
"McDonald's",
"Metropark Hotel",
"MINISO",
"Pacific Coffee",
"Pokka Cafe",
"SINA",
"Suwen University",
"Taobao",
"Tencent",
"Tsui Wah",
"Tudou",
"TurboJET",
"TVB",
"U Weddings",
"WeChat",
"Xiaomi",
"Youku"
];

var theListWords = [
"一小撮人",
"一年一檢",
"一把抓",
"一步到位",
"一系列措施",
"一籃子因素",
"一簽一行",
"人民幣清算平台",
"人性化",
"力度要大",
"上馬",
"上訪",
"上綱上線",
"下行壓力",
"口岸",
"大量預備工作",
"不一樣",
"不同類型",
"不法",
"不排除",
"中央政府",
"中國香港",
"予以肯定",
"六七年反英抗暴",
"內交",
"內地",
"內部矛盾",
"公安",
"支部",
"心理素質",
"手段",
"方方面面",
"出台",
"加大力度",
"北漂",
"奶製品污染",
"打知名度",
"打假",
"打造",
"打造資訊交流平台",
"申領",
"申遺",
"正面評價",
"正確理解",
"用到刀口上",
"立法會產生辦法",
"充份體現",
"向暴力說不",
"回歸",
"扣帽子",
"有保留",
"有關報道完全不正確",
"老百姓",
"民眾",
"老齡化",
"行動綱領",
"低收入人士",
"別有用心",
"含金量高",
"妖魔化",
"完成得比較好",
"完成歷史任務",
"成功學習",
"成熟一件推出一件",
"形象工程",
"扮演角色",
"把關",
"抓緊",
"抓緊時間",
"抓緊機遇",
"投放資源",
"折騰",
"沉痛哀悼",
"災害",
"並無任何諮詢計劃",
"事故",
"兩手準備",
"兩手都要硬",
"兩碼子事",
"協商",
"到位",
"和平崛起",
"周邊國家",
"拔尖",
"拔尖捕底",
"拍板",
"拔高補底",
"社會認受基礎",
"表示關注",
"表態",
"非典",
"非物質",
"亮點",
"信息量高",
"屍檢",
"思想工作",
"思想指引",
"思想準備",
"持份者",
"政策傾斜",
"施放催淚彈",
"查找不足",
"活化",
"活雞",
"相當大比例",
"負增長",
"負面消息",
"配套",
"重中之重",
"香港特區",
"個體",
"核心價值",
"核心工程",
"核心成員",
"核心職務",
"涉賄",
"滅貧",
"班子",
"責成",
"特大嚴重事故",
"特供",
"特事特辦",
"現有機制",
"高端",
"高度自治",
"高度重視",
"高度肯定",
"高度評價",
"高度讚揚",
"高度關注",
"假大空",
"優才",
"參與水貨活動",
"堅定不移",
"堅實基礎",
"培訓基地",
"崗位",
"強化",
"強烈不滿",
"強烈勸諭",
"強迫性交",
"強烈表示",
"強烈譴責",
"深化",
"深切慰問",
"深圳灣",
"深層次",
"理順",
"第二梯隊",
"粗暴干涉",
"粗暴干涉中國內政",
"統戰工作",
"貧下中農",
"釣魚島",
"進行到底",
"進行採訪",
"進駐",
"頂尖級",
"單位",
"創造條件",
"媒體",
"媒體炒作",
"惡劣政治影響",
"提高生活質素",
"普教中文",
"景點",
"最高領導人",
"渠道",
"港飄",
"登陸香港市場",
"硬道理",
"落戶",
"超標",
"進軍",
"達標",
"發表講話",
"絕不手軟",
"結構性原因",
"集體決定",
"集體領導",
"黑材料",
"傷害中國人民感情",
"勢頭",
"新來港人士",
"新香港人",
"搶灘",
"極度遺憾",
"滅貧",
"經濟條件不好",
"落差",
"落實",
"裸退",
"跨度",
"零意外",
"零距離",
"劃清界線",
"團隊",
"敲定",
"監控",
"監管",
"精神文明工程",
"綜合廢物處理設施",
"適當跟進",
"領導",
"需要比較高的認受性",
"增長翻一翻",
"廣泛社會認受基礎",
"熱烈歡迎",
"調控",
"調研",
"質檢",
"遺體告別儀式",
"銷毁家禽",
"操控",
"機遇",
"積極為市場創造條件",
"積極考慮",
"磨合",
"親中",
"優化",
"檢舉",
"禮節性訪問",
"職稱",
"講話",
"鎖定",
"嚴打",
"嚴正聲明",
"嚴肅處理",
"釋出善意",
"釋除疑慮",
"釋除誤會",
"大降溫",
"山體滑坡",
"古代漢語",
"打點滴",
"自然災害",
"抗震力",
"豆腐渣工程",
"屍檢",
"故意殺人",
"追尾",
"食水困難",
"航天",
"航天員",
"動車",
"強降雨",
"結龍",
"截取通訊",
"漢語",
"檢測",
"一次性",
"一次性餐具",
"一起事件",
"一起意外",
"一路好走",
"二八開、三七開、四六開",
"人力資源",
"人員",
"人工流產",
"不一樣",
"不同類型",
"不好拿",
"不容易",
"不減少",
"大款",
"大氣",
"小三",
"小四",
"心理素質比較好",
"方便麵",
"文藝晚會",
"公交",
"水平",
"手機",
"禁止追尾",
"立交橋",
"可能性很大",
"平台",
"打後",
"打折",
"打的",
"打知名度",
"打車",
"本土基地",
"正品",
"正面情緒",
"永久性",
"仿冒品",
"吉祥物",
"地溝油",
"安保",
"尖子",
"早上好",
"下午好",
"晚上好",
"有一定保證",
"自我感覺良好",
"吸引眼球",
"吸睛",
"含金量高",
"志願者",
"車資",
"夜宵",
"官二代",
"空調",
"房地產",
"沸沸揚揚",
"河蟹",
"玩忽職守",
"性價比高",
"性價比低",
"直營店",
"非婚生子",
"亮點",
"品位",
"品牌",
"客服中心",
"春晚",
"春節",
"研發",
"流感",
"耶誕",
"首發",
"哪有",
"庫存",
"砸了",
"消費",
"粉絲",
"粉領",
"素質",
"閉幕式",
"高檔",
"高架路",
"高端雜誌",
"高勝價比",
"商業步行街",
"國家們",
"盒飯",
"開機",
"剩女",
"富二代",
"揪心",
"普通話",
"殘奧",
"港漂",
"溫馨提示",
"渠道",
"硬盤",
"發揮水平",
"給力",
"裁判",
"買單",
"視頻",
"開幕式",
"飲料",
"亂搞男女關係",
"微電影",
"搶包山活動",
"搞衛生",
"搭配",
"新年好",
"腦殘",
"資源置換",
"認知",
"酷",
"增值",
"嘴賤",
"衛生紙",
"衛生間",
"請不要",
"踏實",
"質量",
"醉駕",
"學習差異兒童",
"擁擠",
"檔次",
"擊劍",
"繁體字",
"還未",
"蹊蹺",
"點球",
"邊青",
"關注",
"獻血",
"驕傲",
"切爾西",
"戈達爾",
"卡梅倫 ",
"布什",
"布列松",
"布努埃爾",
"弗吉尼亞",
"伊斯坦布爾",
"好萊塢",
"西哈魯克",
"西鐡城",
"米歇爾",
"考文垂",
"艾奧瓦",
"希區柯克",
"希拉里",
"希拉蕊",
"希特勒",
"谷哥",
"貝克漢姆",
"法斯賓德",
"武勒",
"肯尼亞",
"迪思科",
"阿森納",
"哈瓦那",
"柏格曼",
"迪斯尼",
"迪拜",
"科特迪瓦",
"突尼斯",
"英特納雄耐爾",
"泰坦尼克號",
"特呂弗",
"特立尼達和多巴哥共和國",
"符拉迪沃斯托克",
"索尼",
"馬拉多納",
"馬薩諸塞",
"基斯洛夫斯基",
"強生",
"悉尼",
"戛纳",
"梅西",
"理光",
"新西蘭",
"瑞安",
"維仙優",
"齊達內",
"羅麥爾",
"巧克力",
"布丁",
"冰淇淋",
"吐司",
"色拉",
"沙丁魚",
"沙拉",
"果凍",
"拿鐡",
"起司",
"培根",
"甜圈",
"莫加",
"雪批",
"黃油",
"酸奶"
]

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

var caseSensitivity = storage.default('caseSensitivity', true);

var enableTree = storage.default('enableTree', false);

var enableSingle = storage.default('enableSingle', false);

var sourceUrls = [
  'https://rawgit.com/RedDetectorDev/RedDetector/master/theList.json'
];

var sourceUrlsEng = [
  'https://rawgit.com/RedDetectorDev/RedDetector/master/theListEng.json'
];

var sourceUrlsWords = [
  'https://rawgit.com/RedDetectorDev/RedDetector/master/theListWords.json'
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

if (localStorage.theListEng) {
  try {
    theListEng = JSON.parse(localStorage.theListEng);
  }
  catch (err) {
    console.warn(err);
  }
}

if (localStorage.theListWords) {
  try {
    theListWords = JSON.parse(localStorage.theListWords);
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

var pattern = buildPattern(theList);
var patternEng = buildPatternEng(theListEng);
var patternWords = buildPattern(theListWords);

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

function buildPattern(list) {
//  if (enableSingle) {
//    return '\\b(' + list.join('|') + ')\\b';
//  } else {
//    return '\\b(' + list.filter(wordCountGT(1)).join('|') + ')\\b';
//  }
//  return '\(' + list.join('|') + ')\';
  return '(' + list.join('|') + ')';
}

function buildPatternEng(list) {
  return '\\b(' + list.join('|') + ')\\b';
//  return '\\b(' + list.filter(wordCountGT(1)).join('|') + ')\\b';
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
      pattern = buildPattern(theList);
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
  console.warn('loadTheListEng');
  var sourceUrlEng = randomPick(sourceUrlsEng);
  load(sourceUrlEng, function(err, data) {
    if (err) {
      console.warn("loadTheListEng", err);
      if (cb && typeof cb === "function") cb(err);
    } else {
      loaded = true;
      theListEng = data;
      patternEng = buildPatternEng(theListEng);
      try {
        localStorage.theListEng = JSON.stringify(data);
      }
      catch (err) {
        if (cb && typeof cb === "function") cb(err);
        return;
      }
      lastLoadOf('theListEng', Date.now());
      if (cb && typeof cb === "function") cb(null, theListEng);
    }
  });
  console.warn('loadTheListWords');
  var sourceUrlWords = randomPick(sourceUrlsWords);
  load(sourceUrlWords, function(err, data) {
    if (err) {
      console.warn("loadTheListWords", err);
      if (cb && typeof cb === "function") cb(err);
    } else {
      loaded = true;
      theListWords = data;
      patternWords = buildPattern(theListWords);
      try {
        localStorage.theListWords = JSON.stringify(data);
      }
      catch (err) {
        if (cb && typeof cb === "function") cb(err);
        return;
      }
      lastLoadOf('theListWords', Date.now());
      if (cb && typeof cb === "function") cb(null, theListWords);
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
          pattern = buildPattern(theList);
        }
        runIfOlderThan(rateLimit, lastLoadOf('theList'), function(){
          loadTheList(); // It should be ready for the next page load.
        });
        if (localStorage.theListEng) {
          theListEng = JSON.parse(localStorage.theListEng);
          patternEng = buildPatternEng(theListEng);
        }
        runIfOlderThan(rateLimit, lastLoadOf('theList'), function(){
          loadTheList(); // It should be ready for the next page load.
        });
        if (localStorage.theListWords) {
          theListWords = JSON.parse(localStorage.theListWords);
          patternWords = buildPattern(theListWords);
        }
        runIfOlderThan(rateLimit, lastLoadOf('theList'), function(){
          loadTheList(); // It should be ready for the next page load.
        });
      }
/*
      if (!loadedTree) {
        console.warn('loading theTree');
        if (localStorage.theTree) {
          theTree = JSON.parse(localStorage.theTree);
        }
        runIfOlderThan(rateLimit, lastLoadOf('theTree'), function(){
          loadTheTree();
        });
      }
*/
      sendResponse({ theList: theList, theListEng: theListEng, theListWords: theListWords, pattern: pattern, patternEng: patternEng, patternWords: patternWords, theTree: theTree, enableTree: enableTree, enableWords: enableWords, caseSensitivity: caseSensitivity, hammerFactor: hammerFactor, enableSingle: enableSingle, storage: localStorage });
      break;
    case "clear-title":
      chrome.browserAction.setBadgeText({ text: '' });
      break;
    case "set-title":
      chrome.browserAction.setBadgeText({ text: command.text });
      break;
  }
});
