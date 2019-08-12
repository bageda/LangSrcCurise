(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('千阳县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610328","properties":{"name":"千阳县","cp":[107.132441,34.642381],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@C@A@ABA@AAA@C@A@A@AA@@@@A@ABC@AAC@A@C@@@A@@@@@@BA@ABABADCB@@AB@B@B@B@B@B@@@BB@BD@@DA@@@@BDBD@@@B@@A@@BA@@@AAAA@@A@@@@@@BBBBB@@A@@BA@C@C@@@CCA@@@@@@@@BA@A@A@A@@B@B@B@@A@@BAACAAA@@@A@A@C@@@@A@A@C@@@@@@AA@BA@A@A@@@A@@@C@A@AA@@@@@@AA@@BA@AB@@A@AAA@A@@@AAA@ECA@A@CAA@@ACAA@@@@BAD@@A@@@@B@BA@@DAB@B@@@@ED@@@@AB@@@B@BABABA@ABCBA@@B@B@@@BBBB@@BB@@B@@A@@BCB@@A@@BA@AB@BA@@@AB@BA@A@A@A@A@ABA@A@@@ABA@A@@@A@A@@@@DABA@A@A@A@@@ADABAB@@A@A@C@AB@@AB@@A@@@A@A@ABABA@A@@BABAB@B@@A@CBA@@@AA@@A@@@AB@@CB@BAB@B@@@B@@AB@@@@CD@@@B@B@@BDBB@B@@A@ABAB@@@BAB@@A@A@E@A@@@ABCB@@A@@@ABAB@@A@@@ABA@@BC@@BGBABA@@@EA@@ABA@A@E@@@A@CA@@A@@@EDA@A@@BAB@B@B@B@B@B@@ABA@CDAB@@@@AB@B@@@D@B@BBD@@AB@@@B@F@@AB@BA@A@@@AB@@CBA@@@A@A@ABA@ABA@ABC@A@C@A@@@A@@@BDAB@B@@A@@B@B@@@BAB@@@B@B@@@B@@@BAB@@CD@@@B@B@@@D@BA@ABA@ABA@A@A@C@A@@BCBC@@BABAB@BABA@AD@B@@A@BB@BB@BBBB@BFBB@@BBB@@@B@@@BA@ABCBCBA@ABABA@A@@@@BA@@B@@AB@@AB@@BB@@@@A@@@@@@@@@AAA@EAE@@BAB@@@D@@@B@BB@@BB@D@B@@@@@B@DBB@@@@@B@@B@@@@AB@@DB@B@@@@@B@@B@@B@B@@@BB@@B@@B@@@@@@B@@@@@B@AB@@B@BB@@@@B@@A@@BA@A@A@A@EBA@A@@@A@@@@B@@@BBBD@B@DBB@@@B@D@@@@@BBBB@@@@@@AB@@@@@B@@@B@B@@@B@@BD@@@BB@DBBDBB@BBB@@B@BDB@BB@@@BBB@B@B@@DFBBB@@@B@BAB@BAB@B@B@BAB@@@B@B@D@@@B@@@@BA@@DAF@@@DB@BBB@@BDDB@B@FBB@D@BBB@B@B@D@B@BB@@D@B@@@B@@@B@@BB@@B@@@BBBB@DBF@D@B@B@B@B@B@@BBA@@BB@@@@B@@B@@@@B@@B@@@BA@EDCD@B@@@@BBDBBBB@BB@@BBB@@B@D@B@B@B@B@B@@@BDBBBBDBD@BBD@BBBDABB@@@@BBA@@B@@@B@@@BBBBBD@@@DBDB@@BBBB@BBB@@AB@@@@AB@B@@BB@BAF@BABC@CBABAD@B@@@B@B@B@BABABADCB@BB@B@@@B@BAB@@@BBB@B@B@@@BB@@BDBD@B@@@D@@B@@D@H@D@DBDBBBBB@B@@BB@@BB@@@@BAB@@@BEBA@@B@@@@@BBD@BD@@B@BBB@@@B@B@@A@AB@B@B@B@B@B@BBBBBAB@@@BB@@@D@BAD@BBB@@DBB@BD@BBBBB@DBB@B@BBDAB@@@D@B@B@HA@AB@@@BA@@@C@@@@@AB@@A@A@A@AB@B@@@D@B@@@D@B@B@DAB@DBD@@@@@D@@@@@BBB@B@BAD@D@BBBB@@B@ABA@@B@@@@@@@@A@@@@@@@@BA@@@@@A@@@@@@@AB@@A@@@@@@@AB@A@@@@A@@B@@@@@@@B@@@BA@@B@B@D@@@@@B@@BD@BBB@@BDB@@B@@D@@@F@B@@@B@BBBBBBF@BBBBBBBD@@@BBB@BAB@@DB@@@BBB@@@B@B@@@B@@@BBB@B@B@@@B@@@@B@BB@BDAH@JBJAPCDEHCHCFCDGFEBGBEBIBGBIBIDIDIDCFEFGFEL@FB@@B@@@@CBABABA@@B@@@B@DBH@B@B@BDFD@BBFBBDJ@@@@B@@A@@BCD@D@D@D@B@BA@A@A@A@AB@DA@@FCB@D@B@@@@BDH@HFF@BFJ@B@@BFBBBBAD@BD@DBD@B@BB@@FAFC@@D@FDB@@BBD@H@H@FBHBDBBBFHFJBJBJ@J@LBH@F@F@H@HAH@JAB@FAHAFEBEBEDEDCDAFA@@JA@K@@@A@E@A@A@@B@B@D@@@@A@@@EACAE@@@A@A@@BCB@BADCBA@A@C@ABAAC@A@@CA@@@A@@@@DBB@DCBCBA@@@A@A@A@AA@ACA@@ACBC@CBA@A@@BABA@A@A@@@@A@@D@@ABA@@@ABA@CBA@@@C@@BA@A@A@A@@@@C@CA@A@A@AA@GCA@AA@@@@@C@@@@CC@@@CAA@@@@@@@@D@B@@ABA@A@@@C@AAAAAAA@ABA@@@@BA@@AA@@B@@@@@AA@@@A@@BA@AA@AA@@BA@@@A@@@@AA@@@AB@@@@AA@@A@A@@A@@@@AA@@AA@@@@@BA@@@A@@@@@@@@@@@A@@@A@@@@@A@AA@@@A@CAA@@@A@@@@AB@B@B@@@@AA@A@@AA@B@@@BA@@@@@A@@A@@@BABA@C@@A@@A@A@@@AB@B@@@@A@@B@@@BA@@@BBBB@@@B@@BBAB@@@AA@@@AD@@@@A@@@@A@C@@@@AAAEC@@@@AA@@@@A@@@A@A@@@CA@@A@AB@@@@AA@@@AA@@@@A@@@@@@A@@@A@AB@@A@@@@A@AA@@@@@@@@ABA@@@AC@CA@A@A@A@@@AB@@ABA@@BA@A@@B@B@B@D@B@@@@@@A@@BA@C@A@A@@A@A@ADAB@@CAA@@@AA@@@@@@AB@@@@AB@AA@ACAA@A@AA@BA@@@CB@@ABA@@@A@A@@@AAA@AA@@A@@A@C@@A@@@A@AAA@ABA@A@@@@@A@A@A@@@C@@@AA@@@A@@@CA@@@A@@AA@@ABA@@AAA@AABABABAB@@@B@@ABAB@DA@@@A@CAACC@A@C@@@A@C@AA@@@@BA@@@AB@@@@AB@@AB@D@@@B@DEBAB@@AAE@AACB@@A@A@CAAC@@AAAA@@@@AAB@@A@@@A@AAA@@AC@AAA@A@AA@@A@@@A@@A@A@A@@AAAA@AA@@ABAA@A@A@AA@@@A@@AA@@@C@A@A@AC@@A@AAA@C@A@@B@@A@@@AAA@@@A@C@C@ABA@@@C@@@AAA@A@@@A@A@A@@@@B@@@@A@A@AAAACAA@AAA@AAA@C@@A@C@@AA@@@AA@@AA@@A@@@@@AA@@@@@@AA@@@@@A@@@@@@@@@@@A@@@A@@A@@@@@B@AAB@AA@@@AA@@@@@@@@@@@@@AA@@@@AA@@A@@@@@@AC@@@@@@A@@AA@@@A@@@@@@@@@@@A@@@@@@AA@@@@@@A@@@@A@@@@A@AA@@@AA@@@@@AA@@A@@AA@@@@AA@@@@@A@@A@@AAAA@A@@A@@@@@AA@@@@@@A@@@A@@@@AA@@A@@AA@@@@A@@A@@A@BA@@@A@@@@@AA@@A@@A@@A@@A@@A@@@A@@AA@@AA@@@A@@@@@A@A@AA@@A@@@@BA@@CC@@A@AA@AA@@A@A@@@A@A@@@AAA@@@@@A@@@@@A@@AA@@A@I@A@A@AAA@A@@@AA@@AAA@AA@@A@AAA@A@@@A@AAGEMECAA@@C@C@M@CBABEBC@A@CAA@C@CBABG@@IA@@A@EBC@A@A@CA"],"encodeOffsets":[[109766,35392]]}}],"UTF8Encoding":true});}));