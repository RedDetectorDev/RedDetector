// ==UserScript==
// @name          紅色背景偵測器
// @description   能偵測有紅色背景嘅公司、中資企業、匪語等等
// @include       *
// @grant         GM_getResourceText
// @resource      theList https://rawgit.com/RedDetectorDev/RedDetector/master/theList.json
// @resource      theListEng https://rawgit.com/RedDetectorDev/RedDetector/master/theListEng.json
// @resource      theListWords https://rawgit.com/RedDetectorDev/RedDetector/master/theListWords.json
// @version       14.8.1
// @namespace     https://reddetector.com/
// ==/UserScript==


(function(){
var theList = JSON.parse(GM_getResourceText("theList"));
var regexp = new RegExp('(' + theList.join('|') + ')', "g");
var regexpEng = new RegExp('\\b(' + theList.join('|') + ')\\b(?!\\)\\))', "gi");
var regexpWords = new RegExp('(' + theList.join('|') + ')', "g");

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	textNode.nodeValue = textNode.nodeValue.replace(regexp, '☭$1☭');
	textNode.nodeValue = textNode.nodeValue.replace(regexpEng, '☭$1☭');
	textNode.nodeValue = textNode.nodeValue.replace(regexpWords, '🇨🇳$1🇨🇳');
}

walk(document.body);
})();
