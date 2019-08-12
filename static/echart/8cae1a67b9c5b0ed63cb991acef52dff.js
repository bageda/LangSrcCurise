(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('邯山区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130402","properties":{"name":"邯山区","cp":[114.531002,36.594313],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AE@ACFY@A@GBIGIACCGCGCI@CAC@ACMAA@@GKA@EMACAACIAOAECGAAAC@A@@DEB@DDDHF@AOA@@AAM@@@CCMCBAQAAC@M@C@K@BDCBE@K@[BABE@A@@LOHoDCB@DBVIBEBE@ODFXO@WDAK@OKBG@MBA@CAC@CAG@M@AHAHEDGBIBCDEFAH@BBDBP@BANAV@NAD\\@N@@FV@R@D@HH@DADCFENCHAFAFAFVE\\G@ED@D@J@JH@B@F@J@@@HDNDTBH@D@J@D@D@DC@@HCDBDQF@@A@BDCBG@CBIDGD@@A@KBCBXnL@VC@HjT@@@CD@BKAA@KBEF@@DB@AGBADBBDBA@BJ@@AAAFA@EHAD@B@@@BBB@@@@BH@P@B@D@B@F@N@BP@B@@B@@@D@J@@B@@DLB@@B@BBB@BBB@B@@@@BD@B@@@@BFBB@@@B@D@@@HF@@@D@@@D@F@@@@@D@B@B@D@D@@@JAB@FAH@@@D@DAB@N@FA@@@@@@F@@@@@H@F@HA@@J@@C@@@CB@@CAEA@BAD@B@@AA@@@A@@CD@@@D@D@B@BBBBDBD@D@FA@AD@@FD@@B@FHDH@B@HBF@D@@BLPPJDBHBVDR@J@J@AGB@L@@IB@@EH@BA@G@CBM@CBADGDAD@BAACD@@C@CCAO@@CE@@@@@C@AAICC@CBAG@A@A@@NCDCAIA@@E@AD@@EBGJ@BCF@@AFS@@AKIKAAGE@@GG@@A@A@AAA@A@AEDABEDGBABAFICEEIEIGK@@[BA@MHCBCBIBABE@M@K@@@BDEBGBKBCG@@WDEHBHEFK@E@CAMAC@ADCBE@GA"],"encodeOffsets":[[117265,37374]]}}],"UTF8Encoding":true});}));