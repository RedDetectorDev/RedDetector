# ☭ 紅色背景偵測器 ☭

☭ 紅色背景偵測器 ☭ 喺一個幫你喺上緊網嘅時候，自動辨認紅色背景嘅公司、牌子、字句等等嘅 browser extension，現時支援嘅瀏覽器包括 Chrome, Firefox, Safari, 同埋 Opera。

![detection example](https://i.imgur.com/3faBIml.png)

![screenshot](https://i.imgur.com/GVvPpJ1.png)

## 功能

1. 時刻警惕究竟身邊有咩餐廳、時裝、電影院、足球隊、汽車、酒店、電器、出版社、報紙、航空公司等等等等喺已經被染紅。
2. 偵測匪語：將「優才」、「進軍」、「打造」等非香港語加上適當嘅襯托。
3. 疫症等級：如果覺得一對 ☭鐮刀斧頭☭ 唔夠，可以自行調整。
4. 按照網址暫停偵測：如果遇到太過紅色嘅網站，睇到頭暈，可以設定暫停偵測。
5. 染紅列表更新：列表會無時無刻（即係都唔知幾時）keep住更新，所以記住要每隔幾個禮拜就㩒吓呀！

## 你今日紅咗未呀？

### 仲唔快啲安裝 ☭ 紅色背景偵測器 ☭ ？

## 安裝方法：

### Chrome 系列瀏覽器

用Chrome, Chromium, Iridium, 或者 Vivaldi 嘅人可以到 [Chrome Web Store 下載](https://chrome.google.com/webstore/detail/%E7%B4%85%E8%89%B2%E8%83%8C%E6%99%AF%E5%81%B5%E6%B8%AC%E5%99%A8/beobjkighjdobeabbhjknckbmdjggocb/)。

### Firefox

到 [Add-ons for Firefox 下載](https://addons.mozilla.org/en-GB/firefox/addon/%E7%B4%85%E8%89%B2%E8%83%8C%E6%99%AF%E5%81%B5%E6%B8%AC%E5%99%A8/)。

### Safari

1. 安裝 [TamperMonkey](https://tampermonkey.net/?browser=safari)
2. https://greasyfork.org/en/scripts/32151-%E7%B4%85%E8%89%B2%E8%83%8C%E6%99%AF%E5%81%B5%E6%B8%AC%E5%99%A8

### Opera

用 Opera 嘅人請先安裝 **[Download Chrome Extension](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/?display=en)**，跟住照Chrome系列瀏覽器嘅程序安就得。

## 染紅列表甩漏、錯誤

如果你發現有未入表嘅染紅公司，[歡迎到上面「issues」page 單聲！](https://github.com/RedDetectorDev/RedDetector/issues)

## 參與 development

* **master**      - Base for files common to all branches
* **chrome**      - Fork of master for Chrome 
* **firefox**     - Fork of master for Firefox (WebExtension)
* **userscript**  - Userscript version for Safari

The majority of development should happen in **master** or a feature branch based on **master**
if something drastic is being tried out.

When it comes time to release, something like this should happen:

```sh
# from master
git pull
git checkout chrome
git rebase master
# then make any changes necessary to manifest.json
git tag v14.8.1-chrome
```

For a Firefox release, you'd replace `chrome` with `firefox`.

The only file that really needs to differ between Chrome and Firefox is
`manifest.json`, so the **master** branch should not have a `manifest.json` to prevent merge conflicts in the future.

