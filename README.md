# CoinCap
API tools and documentation


##Main Map

* /coins  Array of all supported coins
* /map  JSON object of Coin symbols/names and known aliases
* /front Front Page Data of current coin stats
* /global Global data
* /page/:coin  must seach by symbol ex BTC returns all data on a speffic coin
* /history/:coin Returns all history on a coin
* /history/1day/:coin returns 1 day of price history for a given coin
* /history/7day/:coin returns 7 days of price history for a given coin
* /history/30day/:coin returns 30 days day of price history for a given coin
* /history/90day/:coin returns 90 days of price history for a given coin
* /history/180day/:coin returns 180 days of price history for a given coin
* /history/365day/:coin returns a years of price history for a given coin

## Socket API
    http://socket.coincap.io

To connect to CoinCap WebSockets you must use socket.io-client 0.9.16 or another
websocket client compatiable with that version of Socket.io
You can find the 0.9.16 client on github
[https://github.com/automattic/socket.io-client/tree/0.9](https://github.com/automattic/socket.io-client/tree/0.9)

[Sample code attached](https://github.com/CoinCapDev/CoinCap/blob/master/subscribe.js)

### responses
```
// Example Trade message
{
    "message": {
        "coin": "BTC",
        "msg": {
            "position24": "1",
            "position": "1",
            "short": "BTC",
            "long": "Bitcoin",
            "time": 1434566319464,
            "price": 251.55,
            "perc": "1.89",
            "volume": "46021300",
            "usdVolume": "46021300",
            "cap24hrChange": "1.89",
            "mktcap": 3593077312.5,
            "supply": "14283750",
            "published": false
        }
    }
}

//Example Global Message
{
    "message": {
        "btcPrice": "251.445",
        "btcCap": "3591577518.75",
        "altCap": 657169699,
        "dom": 85,
        "bitnodesCount": "6216"
    }
}
```



##Coins Call
    http://www.coincap.io/coins

###   responce
    ["XCP","PRO","NXTI","NIRO","VCOIN","ADN","DTC","EMC","EGMA","DRZ","SIGU","IEC","007","CZR","SLING","TWIST","GUA","SOL","BAT","XPL","XCO","HEX","RT2","HIRO","KRN","CCC","BTX","SPHR","OSC","XMS","ROS","XTP","TEETH","SHELL","BCF","ANI","BUB","SLFI","486","BTC","LTC","NXT","PPC","DOGE","NMC","XRP","QRK","DGC","BTCD","LXC","XMR","SDC","XC","AUR","PTS","DVC","MINT","MGW","NAS","SFR","ZET","VIA","FTC","XPM","VRC","GML","IFC","VTC","XCR","QORA","MAX","ZCC","WDC","YBC","NXTTY","FRSH","XCN","BTB","PRT","TIX","RED","NET","EXC","CANN","BCN","MSC","MONA","STR","RDD","NVC","XDN","POT","SYS","CLOAK","IXC","SYNC","JLH","BILS","ANC","SDC","KARM","PND","NOTE","BBR","RZR","RZR","URO","UNO","NAUT","GLD","HYPER","NLG","XDP","DGB","JPC","NBT","NODE","UNITY","EXCL","XTC","MAID","BURST","DEM","SWIFT","MRKT","DASH","BTS","BANX","XPY","ARCH","NSR","FAIR","XEM","GEMZ","SWARM","BLK","DEX","CLAM","CELL","START","ETC","SJCX","NXTV","PANGEA","FC2","BLOCK","10K","GRC","SKYNET","JINN","I0C","USDT","XBS","NAV","LIQUID","TRON","BAY","MEC","CRAVE","JAY","BITUSD","CURE","ZRC","SLR","DOGED","ZEIT","VNL","ATOMIC","UCI","CNMT","PRIVATEBET","DMD","HZ","BITCNY","MMNXT","UFO","BITBTC","NOO","BTM","BSTY","FCN","MMXIV","WBB","DRKC","LDOGE","BLC","MUE","METAL","YAC","KORE","SMAC","HLC","CON","BQC","MWC","QTL","RBBT","DSH","DTC","ENRG","MNE","KOBO","EMD","KUMA","LEAF","SMBR","NTRN","KEY","CC","MTR","COV","ACOIN","CIN","PSEUD","LOT","FRK","SPA","TIT","LGD","XCASH","U","GLIDE","WKC","JUDGE","DBL","CXC","ASN","LSD","ASC","MRC2","CKC","LOG","XJO","BRIT","BTG","WETK","CRAIG","NKT","EVENT","HRNXT","BUN","GHC","BITZ","TRK","VDO","LYC","GP","BVC","GSM","TRI","ARG","VMC","VIOR","GIZ","GRE","P7C","CF","JKC","OPALTKN","SOON","BTQ","TAK","BOOM","UIS","EAGS","42","DSB","SHIBE","CRT","ICASH","URC","COINO","RBT","BALLS","NXTCOINSCO","SF0","FIMK","MTC","NXTPRIVACY","DICE","RBR","ISR","ECC","CINNI","CCS","AC","MRCAM","TRUST","WATER","FLT","PINK","CBX","XAP","NTR","RIN","NXTSCO","GMC","PLUGIN","MED","DARK","OC","PMP","XCH","NXTI","BTCS","SONG","CAIX","SXC","SSD","XLB","TES","XWT","BITGOLD","GAIA","COMM","MIN","TTC","BCX","TRL","XBC","BLZ","CZC","DORCS","HAM","XPD","CRW","CTM","TOR","VOOT","ICB","SCSY","QSLV","LKY","COOL","TOP","ELC","GLC","CLR","PIGGY","THC","HVC","BUK","PLNC","HUC","GDC","KTK","OK","XDQ","APEX","XXX","SILK","SLM","CHA","SMC","UTIL","MEOW","SAT2","GCN","GB","GUE","NRS","ROOT","XSI","GIVE","NYC","PXC","ANAL","SBC","HAL","NKA","MRY","MNC","EXE","POP","KGC","RPC","ICN","DIEM","CAT","XGR","QCN","NMB","ZED","SHLD","SHA","FFC","GLYPH","MLS","FRAC","CDN","BET","OCTO","ALN","CRACK","AU","VGC","SHADE","KDC","STV","CAGE","AXR","BEAR","STK","ORO","SPT","XBOT","MCN","MRS","RIPO","HRL","YUM","SOLE","ZS","LTB","ULTC","CATC","BNCR","CHASH","XAU","CNL","GUN","LIMX","QB","GSX","BTCRY","PHO","NRB","PLC2","GAP","BEL","NTC","NEC","BOB","CGA","BEN","CND","VPN","APC","FIBRE","CACH","MZC","FLO","IOC","XAI","BLITZ","XST","JBS","HBN","OPAL","MOON","RBY","BOST","SMLY","UTC","HYP","FRC","HTML5","USDE","BITS","EAC","XWC","TEK","BLU","DEBUNE","FLAP","UNC","MARYJ","AM","MYR","C2","NOBL","LTBC","XMG","UNB","ABY","CCN","8BIT","CAP","RIC","TIPS","CASH","NEOS","TRC","CRYPT","EFL","BYC","SPR","TAG","DIME","NOXT","GEO","SUPER","AMBER","EMC2","PTC","OMC","MMC","CESC","ELT","EKN","VTA","FST","J","SLG","ARI","FLDC","SRC","DOPE","GRS","QBK","CSC","BITB","XQN","PHS","LTCD","CYP","COL","ORB","NYAN","XCPSCO","CAM","UNAT","TCO"]



##Map
    http://www.coincap.io/map
###responce
    An Array of Objects
    [{"name":"Counterparty","symbol":"XCP","aliases":["unknown","setme"]},...,...,...]

##Front
    http://www.coincap.io/front
###   responce
    An Array of Objects
    [{"position24":"1","position":"1","short":"BTC","long":"Bitcoin","time":1434562273127,"price":"251.42000000","perc":"5.98","volume":"48384700","usdVolume":"48384700","cap24hrChange":"5.98","mktcap":3590824438.5,"supply":"14282175","published":false},...,...,]


##Globals
    http://www.coincap.io/global
###   responce
    JSON object
    {"btcPrice":250.12,"btcCap":3572257611,"altCap":630448767,"dom":18}

##Page call
    http://www.coincap.io/page/:coin
    Coin must be the coin symbole. ie Bitcoin is BTC
    to view a list of correct symbols/names view the map call 

###   responce
    JSON object
    {"btcPrice":250.21,"btcCap":3573543006.75,"altCap":628974097,"dom":18,"short":"BTC","long":"Bitcoin","homeURL":"https://www.reddit.com/r/Bitcoin","explorerURL":"","twitter":"","discissionURL":"","mineable":true,"premined":false,"preminedSig":false,"position24":"1","position":"1","time":1434562499433,"price":[...*Array of Arrays (chart data)*],"perc":"5.98","volume":"48384700","usdVolume":"48384700","cap24hrChange":"5.98","mktcap":3573543006.75,"supply":"14282175","published":false,"usdPrice":250.21,"market_cap":[...*Array of Arrays (chart data)*]}


##History
    http://www.coincap.io/history/*Timeframe*/BTC
    
    Timeframes supported
    
    * /history/1day/ 
    * /history/7day/ 
    * /history/30day/ 
    * /history/90day/
    * /history/180day/ 
    * /history/365day/

    Timeframe is optional
    /history/:coin will return all data

###   responce
    JSON object
    {"marekt_cap":[*Array of Arrays (chart data)*],"price":[*Array of Arrays (chart data)*]}
