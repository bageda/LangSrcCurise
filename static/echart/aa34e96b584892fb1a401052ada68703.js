(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('漠河县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"232723","properties":{"name":"漠河县","cp":[122.538591,52.972272],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@UF[AeKuACBOBoEaNKPKHADQpEDO@[CIEAABCDW@AIGAAO]ACWKEQIK_QWGJMLKSMkIgEFQHQWcSKOG{cQEEGO_UECGAGAICMIMiYYEKAOAHQA]AKBIFoTUHOFYFMDoJuFCBEBAHDP@\\MTGFKHKPWTUNWLHRbjCDULYLELEHODiCaAYBIFOPYNSB_EYGODQ\\MLEBAD@FABADC@E@ICOBKAEBGFEDGDG@GAEBCBCDCBMDMDIBK@E@AB@B@B@DCDAF@J@NABABABE@WBGBE@AD@DABCBEBEAI@KAC@CBIDGBA@AB@B@FADCBCBABEHEDCBGAE@CDAB@DBB@BCHANCJCBC@G@OBGBGBGFOFSHGBA@KGICCBMAK@KCYCM@IBIDKHCBEBK@GBCBCBCDMJ@D@BFDPHRHPDTFZFJDFFBFBDJJJDLFJBPBFDLHRLHBBB@F@F@FBDNDH@FDBBAHBFDDHBNDL@Z@JDHBJ@N@N@NBRHHHDHBFNBLDFDFDNJJHFFHHHFLFJDRFHDBFDJLNBLDFDHDBHDDBBLBDDBFBLBT@LBPFLJ\\TBDLLTDFDJFRHHBTH\\PT`JJLDJDHD@DITUNAFHLHH@BEPDB`DXRNFTDPJRVJRBR@NFFJJNNHNLRLLBLFJHFPFbFxPDDDBFBDBFBF@HDDDBDBBBFAD@B@D@BDBDDDBDD@D@BBBBDBDDHFBDBDBD@DBBDDFDF@D@DADCBCBCBGBE@EBGDEDEBABAFEDOHEDAD@DDBBDBBDDFFBD@BABA@CF@BADAF@FEBEFEDCDABAD@BADADAD@DADEDIJABEDC@C@EAGAEAEAC@E@EBG@E@ABEBADCBCDCDCDCBE@CBEBEBEBCBEBIBEBEBEBMFCDCBCDCDAD@DBF@B@D@DADBDBBBBHDH@DBH@FBFB@BAB@DADADADAD@D@D@D@D@DBDDBDDBB@D@B@F@BBD@B@DADABEBEBCDEBEDCBIFCBCDABCDCDCBC@CBC@C@C@EAIAGAGAG@EBGB@BADABCDABCDGDABCDCBCDCBABCDABEDABCBADCDCBCBE@GBE@EBEBCDCBCBADCDCDEDEDEDEDC@EBE@CBGBGBC@EBGBKJEJ@DEPjD\\D´TLB^hL\\FPFJFFDDDJDFDDBDBNDNAjGVAT@RDZJhPHDPFJDJDPFPDNBXB`FNFXF`ChAJ~BX@vAjG~CX@RB\\HxhplPHjAjKLAFAFAF@D@J@NBJ@pNNFfLNHf\\lRN@H@XMNKFO@EBCBEBCBCDCbO`MtWx@rTTHxG\\AXBXFJDHBHBH@JBJ@HBbDGF@NAL@NAN@z@VB^DBNAN@HARAH@VCP@LAP@f@¤LJBHBNDJDLDTJ\\PĞpRBN@t@SDALBHBjNTHJLFFDDDBFDFBFDBDDBDDDDFDHFFDLHFBHDFDFDHBRHxNLB|EPEJCHAPEJCJAJAHAQR@JAt@lAD@DADADABCBEDE@EBCBGBCBEDEZSJCJ@J@HDNL@HkbDbNNhR\\A`KZUAQIGGEEEQMKOJOPCRBbNV^DHJpRHb@PAtQ\\GRGFKFEFCDCNQX[JED@JAJAJ@HBHBLDLDF@JBOJALAFAL@HAH@N@F@ZBZBhAzQzetUPGFAHEFADAFALCJCJEJCFCJG`mFGDAFAVATBHFHBBBDBJ@JAD@FADADAHCFEFCDEBEDSJKRGJEHSPGFCJAD@`BDBt^rRbFXDdBXETUdWPIIAAACCAECCAAAACAEAA@CCBCBCDADCAAAA@ACCCAECECAA@@AG@E@ABABCFCBE@CACCEAEA@GAA@GBGBC@E@CAGAECAAAAAAECEACAEBC@CCACCACAE@IAA@CAAAAA@EBABAHADADABABCACAEAC@ACGAAAACCEAAC@AACCCCCCAAACACCECCACCECECEACACACCEAECCACAAAGAEDEBCDABGDKFEBKAEAE@C@C@C@I@EAC@CAEAGAI@C@C@C@C@G@CCAAAAACAECAACCACAECG@C@CAEACCCAAACAA@EAEAC@EAA@EAECCCCAE@CAC@OCA@EAACCC@A@CBADCBABAAECACAC@C@C@IAEBC@C@C@CECCACCC@A@C@CAAACAAACAE@ABC@ABCBA@CAAACEECC@AAA@ACCECCCGAECGACAECECGCC@ECECCCCACCCCAC@CAAGCCCCAMEEAEAC@E@GAIE@A@CBC@EAACEAEACCCEAECCCECCAEAGCEAGAGAEC@A@C@E@C@GC@CAGEC@AACACE@CDCBAFCDCDABADAHCFADADABCB@BAHM@I@EAIEIQCUCOEQGQSGGSQIKIIOMOGaWKKKGWESBWAGCU@I@UBKAUKWIUESEWMKIIIUUMO[cIQKMQQYSKSIMMMEAgNO@WIgWCKSS@ADETGJIHGCKEKOMAK@EAOFMEQBCLYJIFKJSJM\\mHUJUNGNKDCDKAKIQ@GNGP]FIHMFK@SAYBKBA@@@A@AA@CCCA@ADA@@AEEEAAICKEA@AAAA@A@AAA@@@@A@A@A@C@A@AAAAACA@@AC@@AA@CGAC@AAE@A@@A@CBKFA@A@A@K@C@A@ABC@CDA@GCMCEAC@A@AA@ACACCCACAEAAAK@A@@@AA@AA@ACECEEGEGE@A@@@@CACEESBWEOKOMQOGK]GiKkH]GWIWC[IIEeWOEwCWBED_XGBQAICOQAAa@UCQCUEOCYCWCC@A@E@AACAAAC@A@EAG@C@AAECA@CAC@AAAAACACAAA@GAGCA@A@ABA@ABCAAACAAAA@A@CACA@@@@CBABEBCBCBGBEBCBC@CB]EYA[D]AUCQOGMQOWCc@MQ[MwEkGKFGDSJIJC@gMWCUAQA]JBRcN[@]@IEKCeC[A]EO@sbWDMDWBWBkHeHIJBFJVCHELBDDFLTBD@HCFQLUTIPCRENKNM@UYUKCAIBGDGPINABC@aFEDIVIJ_COBADG^OLAL@JG\\QTML"],"encodeOffsets":[[125246,53735]]}}],"UTF8Encoding":true});}));