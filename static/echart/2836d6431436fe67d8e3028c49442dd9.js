(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('泗县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"341324","properties":{"name":"泗县","cp":[117.910629,33.482982],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@A@@A@@@@@A@@AA@@@@@A@@@A@@BA@@@A@@@@BA@@BA@@BA@@@AB@@@@A@@BA@@@AB@@@@@BA@@B@@@B@AA@@A@@@AAA@@AA@@@@A@@A@@@@@G@EAE@E@E@EAE@EBC@E@E@E@GBE@C@I@G@@@GA@B@F@@EHADADEFUG@@@A@ABI@@ECCAC@C@EAG@E@E@E@G@CAGAEAECCCACAC@EAE@CAEBGACCEACGCC@EAC@EBCBGBEBEBC@EBEAC@EAA@CC@EBE@CAEAEECCCEAEAGBEBEBEBA@EBIB]ECAeEEACDKLCDcCMLUFEX@DYJCFGHGVCBOD]F@BBFBDBFDDDFDFDDFDHFDFDDFH@JBFDDB@B@B@@BBBAB@FIBBJ@F@H@@@@BJJTAFADEVEF@B@B@DA@CB@@GTAJ@DBBJBBL@DBNDH@@DDB@BB@BBBB@@B@BGLEFCDA@AAKCGCA@@D@HA@K@@P@DBF@@ABCDGFE@GB@@@D@BA@BDBDBPBH@B@BB@HHDFBD@@BBFH@DB@R@@@B@F@@D@D@BHDFD@DBB@D@LBRAFAHAFA@I@G@@BABAFCPADDDFBFDHBH@HBF@H@F@H@FAJ@FBBBAX@DAVDPCLCL@FBDBH@H@HBH@B@F@L@B@B@JAN@HALDJDL@D@HAPHBA\\BHLLHAB@JAF@DC@@BA@A@AAA@A@A@@@A@ADA@@BAB@DAB@@AD@@@BABABCBE@@CGB@AAB@@CBA@DNCAAFAA@DAAKFAD@BBD@BB@@@AB@@FF@BF@@B@B@F@BBDFBBB@B@F@F@D@B@HDDDB@BB@@BBB@DB@BB@@B@B@BB@@@DBD@B@BBB@D@@@FBD@B@H@B@BA@@B@@A@BB@B@D@D@DD@@B@D@DBDA@@B@DA@AB@@@B@B@B@BA@@B@B@@@BBF@B@BBB@D@D@D@HAD@D@BAB@BA@@B@B@DAD@DAD@BA@@D@B@@@B@HCB@B@H@B@B@BKD@JENB@FCHCD@HFB@DJ@@AJBADLB@@BEB@BC@@DAF@DAHAHAHAFBFBHBFDDFBB@D@@@FDH@D@F@@BDDDBFFBFFBB@@@@DABA@@BABA@ABA@@@A@@@@BI@A@AB@@@@@DAB@BAB@@@D@B@B@B@B@F@DBFBFB@@@ED@@AHAB@FA@DBAD@@BDA@FB@@@B@B@B@@ED@D@D@ACB@@EB@@CD@BBB@@AF@@BHB@@CL@BD@ABF@F@FBB@FB@AA@BCDB@EF@@DA@AFD@B@ABFDNH@AJD@@BB@@B@@BBB@DBFD@D@B@F@B@F@D@H@DAB@@@B@D@B@B@@@B@B@B@B@F@D@F@B@B@B@@ABBBBFBDBB@DADAFC@AB@FE@@BCB@@@@@@A@@@@@@B@BCBABAB@@@DC@@B@FCFABA@@B@B@DAD@B@B@@@B@DBFBFBF@BBB@B@@@@@B@FAB@@@@@@@HAD@HCF@HCB@@@@@@@@@@A@@CACCA@@@@A@AA@@@@AAAA@@AA@@@AA@@A@AAA@A@A@@@IBC@A@CBA@@@@AACCGGQ@@@AFAJALCBA@@@A@@AAAC@AAA@CAE@C@C@A@C@EAA@CBA@A@A@CBA@C@A@C@A@C@A@C@A@ABCBC@A@A@A@A@@B@@A@@@@A@CC@@@@AAGEAAOM@AIGGE@AA@AAAAA@AAACA@@@CCAACAACA@ACA@CCCCA@@@@AA@AA@A@@IEA@A@@AA@@@@@AA@@@@BCBEBCBA@GBIBG@C@@@A@CAC@A@CCU@G@@CW@C@A@EAIAMAI@E@A@CA@@CMAEB@EB@@GJA@CF@@A@@@AD@@CAA@GAIAC@EBI@A@G@Q@I@E@@aLEBA@GDE@IDCBCBEBIBCBEBA@E@I@@A@AA@@@@A@@@A@@AA@@@A@@@AA@@A@@@@@AA@@A@@@A@@AA@@@A@@@@@AA@@A@@@@@A@@@AAA@@@@@AA@@@A@@@A@@@A@@A@@@@@AA@@A@@@@AA@@@A@@AA@@@@@AA@@A@@A@@A@@AA@@A@@AA@AA@@@@@AA@@@@AA@@@@A@AA@@A@A@@@A@@AA@@@A@@@A@@@A@@@@@A@@@A@@@A@@@A@@@A@@@@@A@@AA@A@@@@@AA@@@AA@@A@@A@@@A@@@A@@@A@@@A@A@@@A@@@A@@@A@@@A@@@@@A@@@@@A@@A@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@@@@A@@@@@@@A@@@A@@@AA@@A@@@@@A@@@A@@AA@@@A@@AA@A@@@A@@@AA@@@@A@@@A@@@AA@@A@@@A@@@@@A@AA@B@@@@A@@@A@@BA@@BA@@BA@@BA@@B@@AB@@@@AB@@AB@@A@@BA@@@@BA@A@@BA@@@A@@@@@A@@@A@@@A@@AA@@@A@@@A@@@AA@@A@@@A@@@A@@@A@@@@@AB@@A@@B@@A@@BA@@@@BA@@@@@@@A@@@AA@@@@AA@@@AA@@@@A@@@@AA@@@@@AA@@@@@@AA@@@AA@@@@AA@@@@A@@A@@@@AA@@@@AA@@@@AA@@@AA@@@@AA@@A@@A@@A@@AA@@@@AA@@@@@AA@@@@AA@@@@AA@@A@@A@@A@@A@@A@AA@@A@@@@AA@@@A@@AA@@@A@@AA@@@A@@@@AA@@@A@@@A@A@@@A@@@A@@@A@@@A@@@ABA@@@A@@@A@@@A@A@@BA@A@@@A@@@A@@@A@@@A@A@@@A@@@A@@@@@A@@@A@A@@@A@"],"encodeOffsets":[[120803,34150]]}}],"UTF8Encoding":true});}));