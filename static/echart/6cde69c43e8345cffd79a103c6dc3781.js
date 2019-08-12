(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('定海区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"330902","properties":{"name":"定海区","cp":[122.106773,30.019858],"childNum":55},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@A@@@@@@@@B@@@@@@@@B@@A"],["@@@AA@@@A@@B@@@@B@@@B@"],["@@@@@@@@A@@@@B@@B@B@@B@@@A@@@@AA"],["@@@@@@@B@@@@B@@@A@@@@@B@@@@@B@@@@@@@@@@@AA@@A@@@@@"],["@@@@@@@@A@@@@@@@@B@@B@@@@@B@@@@@@@@A@@@@A@"],["@@@AABA@A@@@@@@BB@@@B@BA@@@@@@@@@@"],["@@@@@A@@@@@@@@@@AA@@@@@@@@A@@@@B@@@@@@BB@@@@@@@@@B@@B@@@@@@A@@"],["@@A@@B@@@@@@AB@B@@@@@@B@@AB@@@B@@@@@B@@@@@@@AA@@AA@@"],["@@A@@@@B@@@@A@AB@@@@@B@@B@B@B@@AB@@A@@@AA@@@"],["@@@AA@@BA@@@A@@@@@AB@AA@@B@@@@BB@@B@@@B@@@B@@@@A@@B@@@BA@@@@A@"],["@@@AA@A@AB@@@B@B@@BBBA@@@@B@@ABAA@"],["@@@@@@@@@@@@@@A@@@BB@@BDBF@@B@@@@@@@@@B@@AA@@ACE@AA@"],["@@@@A@AB@@AB@B@@AB@@@@@B@@B@BA@@B@BABA@A@@AA"],["@@B@@@@A@@@@@A@@B@@@B@@@@A@@A@A@@AA@A@@@A@@AA@@@C@@B@@B@B@@@@@@B@@B@@@B@@B@@@BB@@@@B@@"],["@@B@B@@A@A@@@AA@@B@A@@A@@@@@ABAB@@AB@BBB@@@B@@@@B@@@@A@@B@@@@A@@@@@@@A"],["@@@@A@A@@@AB@@AB@@@B@@@B@@@BB@@@B@B@@ABA@A@@@A@@@A"],["@@A@@@A@AAA@A@@B@BB@@BDBB@BBB@@A@C@@@AA@"],["@@A@@BAB@B@B@BB@@BBAB@BA@A@A@A@A@@@AA@AB"],["@@@A@A@A@A@AAAA@A@@@AB@@BBBD@B@@AB@@@BB@BB@@B@@A@A"],["@@B@@@@@@A@@@AA@A@@@@@A@@@@@AAA@@A@@@@@@AA@@@@@AAB@@AA@@A@A@@BDB@@@BB@@@@@BB@@@@BBB@@@@@@B@@@@B@@@BA@B@@B@@@@@"],["@@BA@@@AA@EAA@A@@B@BAB@BB@B@B@B@B@BA"],["@@K@E@C@BDDBFAPCC@A@"],["@@@@A@CBADAB@@@BB@DBD@BA@@@A@C@AAA"],["@@@@@AA@@@@@CAA@@@A@A@@@A@A@@B@@@B@BD@D@@@B@BBB@@@B@@C"],["@@CBCDAB@B@B@@DAF@BAD@@A@@@CAAA@A@"],["@@A@@AA@A@A@A@@BA@@B@B@@@BFB@@B@@@B@@@@@BA@A@A@A"],["@@A@@B@@B@@@@@ABA@@@B@A@KD@B@@@@B@NC@@B@@@B@BB@@B@@@@A@@B@@@B@@BB@@AA@@A@@@@A@AAAAAA@A@@A@@@AD@@@@"],["@@A@AB@DAB@BBBBB@@B@B@B@@A@A@C@CAA@@A@"],["@@A@A@@@AB@@@BBDBBFBD@@@B@@@@A@ACCAACA"],["@@@@A@ABAB@BABADAB@B@@@BD@BBB@@@BCBABC@A@CBAA@AA"],["@@B@DAB@D@BA@@@AA@@@A@@A@A@@@AC@A@EBADA@@@A@A@@D@@BBB@BA@@@@BBB@"],["@@A@@A@@A@A@@@A@@BABA@@@@@@B@B@@@B@B@@A@@@@@@BB@@@@@BB@@B@BBB@D@@A@@@A@@BA@@@CA@@@@A@@@@@@@A@@@@B@@A@@A@"],["@@CB@@CD@BAB@B@@@BBBB@D@D@BABA@ABC@CAAA@C@"],["@@A@AAA@A@A@ABA@ABAB@B@@BB@@@BB@B@@@BABBB@BB@B@@B@B@B@@ABABA@A@@@AA@@A@AA@@@A@"],["@@@@BA@@@A@AAAAAA@C@A@A@AB@B@D@D@@@BB@BBBB@@@BB@B@@@B@@@B@@@B@@A@A@AAA@A"],["@@A@AB@@AB@BA@@@A@A@A@ED@@@B@@DBNDD@B@B@BA@A@AACACAA@AA@"],["@@@BAB@B@BBDBD@@B@D@B@B@@@@C@CAA@ABA@A@A@CAC@AAA@@CB@BA@@B@DAD"],["@@@@AAA@AAA@EAC@A@@B@B@BA@BB@@@B@@@BDBB@@B@BAB@@AB@BBBB@D@D@@A@@@AB@@@@@@A@AA@@A@@BA@@@A@@@A@@BBB@@@@A@A@A@@"],["@@B@DBD@B@@@@A@A@@B@@@B@BBB@DAB@BA@AB@BB@@B@B@@AB@AAAAA@ICC@IAC@C@A@@B@B@F@B@BBB"],["@@@C@E@CCCE@EBIDAD@DDDDFFBF@DADE"],["@@@C@EAAA@I@CDCD@DAH@BBDDDFBB@B@DABA@A@@@E@A@AB@@A@A"],["@@ABCDAFA@@@A@@B@@@B@B@@BBB@F@@@BB@BB@D@F@B@@C@ADABAB@@A@CAACCEACCAA@AA@AB@B@@@B@B"],["@@B@BAACAABA@ABABAB@@@BA@@@A@CACCAEACACAA@CBCBADAB@B@B@BBDDBD@@B@BBFBBB@D@BBB@@@"],["@@BFDDBBF@DBBBF@DCBABC@G@CBAFCBAAAACMEE@CAEBCBCF@DAF@H"],["@@BABCAEAQACAAC@IAG@C@A@ADCF@F@DBDBFFJBBBBD@D@HADADA"],["@@DABABC@@B@B@@BB@DABA@ABABBD@BCBABA@A@A@@B@FCBCACCEEAEAEBGDGFA@CAA@G@C@AB@BBBB@BB@@ABBBD@@B@BCFA@AB@D@BA@AB@BDBD@B@BA@@B@B@@@BBB@"],["@@@@AAA@CACACACECACACBAB@BBDABCH@D@F@D@F@DADBBBBFFDBB@FADADCVU@A@A@ACCAAA@A@@@A@"],["@@C@EAC@C@AD@BCBEFAD@DBDBBDBDBDBH@BBBBB@@BB@@@B@DBB@DB@@BBB@B@B@D@D@BADAFEFG@C@GAEAAAAA@IAEAEAG@EBA@"],["@@GFCBMDC@C@ABABA@A@C@A@AA@@CA@@CAC@CB@BA@BH@B@@DBFBD@DBDBDBNNBBB@DBB@D@BAFCFGDEBANGLMDCFG@A@CAACAE@E@A@AAC@C@ADADEFCB"],["@@EGACGKGEGCE@EDEHENAN@DDHDDDBLHHFFBF@F@FEFCBG@GEM"],["@@A@A@IEOGCAABABAAC@CBCHBBBB@BKTC@ABCBBBD@BBABDDDDH@D@@@BBADC@ADBBB@D@BB@DDBDABA@@BABB@DD@DADABB@FBDHAH@H@D@BCDENG@ABC@MAAACGAC@KG@AEEEC"],["@@DBDDH@H@FABEBADAD@FAFCBECGAAACAC@K@CACGEGM@C@ABCEGCAKACBC@C@GBCB@BBDDD@FCHCFCDCBC@EAC@CB@FCBA@ABBDAFBBHJFFDDFDD@JCBB@BABBBJF"],["@@QBUFGBAH@H@HCBEBOHCLFNHHDJAN@\\ERATJNBDPRBB@DAHEFAHDHDBDDN@F@FAD@D@BBHBHA@CBAD@D@DBFBFC@ECG@CF@B@DCAEJMF@FA@AACBCF@LBLAFG@KBQFYLYDQEQGE[OYGWKMGSK"],["@@CD@B@@B@B@DCFC@@FCDCDCBAAA@@A@A@CBCF@@EDEF"],["@@BBFFDBB@B@BBBB@HBDF@FCPGVGHGPIPGLC\\EjORAFAPFbHDBH@dFVCHAHCHCBCBABE@C@C@@JCNEDABCBCBCBCFIFGFCFCDCH@F@F@DBBBDDB@B@B@DCH@F@BDD@DADEFEFAP@H@XAZ@FBD@DEF@FDDA`QHBdHD_BUAB_ACAIEA@CA@AAC@A@ABABAFC@@AAACCBCBA@@AA@@A@@B@@A@AAA@A@A@@@AA@@@A@@@AAAAAA@@A@A@@@AA@@A@AAA@AACA@A@@@@BABAAA@C@@@A@AB@@AB@BA@AB@@@B@@AB@B@D@@@BA@@B@@A@A@@B@@@@@B@B@BAB@@@B@B@B@B@@A@@@@B@@@@ABA@A@AA@@@BA@@AA@@@A@@A@A@@@C@@A@@A@@AAA@@@@@A@A@@B@@@@A@@@@@A@@A@AAAAA@@@A@AAAAA@@ACA@A@@AAA@A@@@@A@@@A@@AA@@@@@@@A@A@@@@@@AA@@BA@A@@AA@AA@@A@@@@@A@ABABA@@BA@@@@@@BA@AB@@@@A@@CAA@@BA@@@A@A@@A@@@A@@@@@A@A@@B@@A@CE@A@@@BA@@@A@@@@@@@@@A@@@@@@@AA@AAA@@@AA@@BA@@@@@A@@@@@ABA@@@@@CAC@@@@@@@@@A@@@A@@AC@@CAWHIBA@EGCAAB@B@F@DMDOFABOJGFCBGBEBE@C@E@GAA@K@@@G@I@GAIAECCAA@EAEBEBABADCHGTCDABADC@KBM@C@A@CACAE@MBG@GAEACCGCOGECKAC@AACAAAA@A@A@ABA@C@A@A@CBABAB@DABADENIRCFCH[bCDEFEBKFGFADAFAF@DBDBFDDDBHDFDBDBDAB@@ABABA@AB@BBB@B@D@DAB@DAFAJCHCDKPCDAF]fEJCHILURCFAD@HBDLH"]],"encodeOffsets":[[[124962,30932]],[[124829,30956]],[[124826,30949]],[[124820,30951]],[[124824,30954]],[[124963,30929]],[[125017,30969]],[[124986,30971]],[[125087,30688]],[[125085,30705]],[[125082,30700]],[[124761,30770]],[[125085,30700]],[[124873,30922]],[[125084,30847]],[[125052,30665]],[[125015,30691]],[[125000,30666]],[[125018,30681]],[[124824,30944]],[[125069,30699]],[[125161,30684]],[[125072,30690]],[[124768,30821]],[[125130,30690]],[[125033,30713]],[[124806,30812]],[[124999,30691]],[[125038,30697]],[[125026,30680]],[[124782,30824]],[[125016,30929]],[[125036,30714]],[[125026,30695]],[[124992,30661]],[[125074,30698]],[[125002,30675]],[[124796,30830]],[[125061,30688]],[[124986,30706]],[[124903,30776]],[[124900,30811]],[[124915,30807]],[[125009,30668]],[[125058,30697]],[[124756,30806]],[[125019,30700]],[[125080,30664]],[[125107,30683]],[[124985,30665]],[[124977,30893]],[[124863,30835]],[[124800,30684]],[[125111,30703]],[[124869,30896]]]}}],"UTF8Encoding":true});}));