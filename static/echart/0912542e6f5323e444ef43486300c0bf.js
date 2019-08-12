(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('碑林区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610103","properties":{"name":"碑林区","cp":[108.94059,34.256783],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@I@@@C@@@@@E@@@E@C@@@A@K@@@A@A@@@ABA@A@@BAA@@A@@@A@@B@@@B@@CBCBGBGDEDB@@DAFB@@B@BB@D@@B@@@BD@J@@@@@F@@DB@F@F@D@B@F@@B@@B@@H@@@DADF@B@B@@@B@B@B@B@D@@@B@@@@@@B@@D@D@D@B@B@F@D@@@F@F@B@@@@@F@@@@@B@@@@@B@@A@@@@@B@@@@@@@B@B@@@@@@@@@B@@@B@B@B@@@B@@@BBAB@B@B@@@D@D@B@@@@@B@D@B@@@@@@AB@A@@AB@@@BD@@@BB@D@B@@@@@@@B@@@B@@@B@@@@@B@B@@@@@D@B@@AD@@EC@@@B@@AB@FC@AE@@@A@C@ABAAB@@A@@@@B@B@B@@AD@@A@A@@@@@A@@@@@C@@E@@CC@@@B@@A@@@CH@@@D@@BB@@CD@@A@@@C@AA@C@A@C@E@@AA@@@A@@@@A@@A@CA@BGCIC@A@@A@A@@@@A@@ABAAB@AA@BA@DGCA@@C@@AA@A@@BADA@@@@@BABA@@@@A@C@@BBB@@A@AA@@A@A@@@AB@A@@A@A@BACA@@@@A@@@E@A@A@@DB@@@@@@B@@@B@@C@@BC@@AA@@AA@@AA@@C@@@@"],"encodeOffsets":[[111569,35052]]}}],"UTF8Encoding":true});}));