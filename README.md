# CoinCap.io
API tools and documentation

* [Command line tools](https://github.com/sebs/capcoin)

## REST URLs

#### /coins  
- Description: Array of all supported coins
- URL: http://coincap.io/coins
- Response: 
    ```JSON
    ["300", "611", "808", "888", "INPAY", "XNG", "ARGUS", "DBIX", "DAR", "HMQ"]
    ```

#### /map  
- Description: JSON object of Coin symbols/names and known aliases
- URL: http://coincap.io/map
- Response: 
    ```JSON
    [
        {
            "aliases": [],
            "name": "300 Token",
            "symbol": "300"
        },
        {
            "aliases": [],
            "name": "SixEleven",
            "symbol": "611"
        },
        {
            "aliases": [],
            "name": "808Coin",
            "symbol": "808"
        }
    ]
     ```

#### /front 
- Description: Front Page Data of current coin stats
- URL: http://coincap.io/front
- Response:
    ```JSON
    [
        {
            "cap24hrChange": -6.05,
            "long": "Bitcoin",
            "mktcap": 65173805891.25,
            "perc": -6.05,
            "price": 3934.85,
            "shapeshift": true,
            "short": "BTC",
            "supply": 16563225,
            "usdVolume": 2337600000,
            "volume": 2337600000,
            "vwapData": 3997.5639538606733,
            "vwapDataBTC": 3997.5639538606733
        },
        {
            "cap24hrChange": -6.59,
            "long": "Ethereum",
            "mktcap": 26016428866.32,
            "perc": -6.59,
            "price": 275.02,
            "shapeshift": true,
            "short": "ETH",
            "supply": 94598316,
            "usdVolume": 945732000,
            "volume": 945732000,
            "vwapData": 278.03921067242516,
            "vwapDataBTC": 278.03921067242516
        }
    ]
    ```

#### /global 
- Description: Global data
- URL: http://coincap.io/global
- Response:
    ```JSON
    {
        "altCap": 70056946653.0021,
        "bitnodesCount": 9350,
        "btcCap": 65003614189.66167,
        "btcPrice": 3924.57472440673,
        "dom": 69.48,
        "totalCap": 135060560842.66382,
        "volumeAlt": 578834063.4608318,
        "volumeBtc": 1317521389.0430577,
        "volumeTotal": 1896355452.5038888
    }
    ```

#### /page/:coin  
- Description: must seach by symbol ex BTC returns all data on a specific coin
- URL: http://coincap.io/page/ETC
    ```JSON
    {
        "altCap": 70977893975.02808,
        "bitnodesCount": 9350,
        "btcCap": 65149292318.25,
        "btcPrice": 3933.37,
        "dom": 69.49,
        "totalCap": 136127186293.27805,
        "volumeAlt": 579507047.7508223,
        "volumeBtc": 1319701715.2883158,
        "volumeTotal": 1899208763.0391374,
        "id": "ETC",
        "_id": "c2f0fa55-495c-41e2-ad77-c66545b6d584",
        "cap24hrChange": -2.45,
        "display_name": "Ethereum Classic",
        "status": "available",
        "supply": 95478079,
        "volume": 106044000,
        "vwap_h24": 14.584250499041465,
        "price_btc": 0.003659301940567121,
        "price_eth": 0.052350773626971485,
        "price_eur": 12.076,
        "price_usd": 14.334776791590517,
        "price_ltc": 0.2325328883760402,
        "price_zec": 0.06845529547566803,
        "market_cap": 1368656950.954846,
        "type": "cmc",
        "price": 14.1888
    }
    ```

#### /history/:coin 
- Description: Returns all history on a coin
- URL: http://coincap.io/history/BTC
- Response: 
    ```javascript
    {
        "market_cap": [
            [
                1504664370000,  // unix time (milliseconds)
                74300994770     // market cap
            ],
            [
                1504750775000,
                74594182198
            ]
        ],
        "price" : [
            [
                1504750775000,
                4507.45 
            ],
            [
                1504839280000,
                4599.26
            ]
        ],
        "volume": [
            [
                1504750775000,  
                2095800000   
            ],
            [
                1504839280000,
                1752760000
            ]
        ]
    }
    ```

#### /history/1day/:coin 
- Description: Returns 1 day of price history for a given coin
- URL: http://coincap.io/history/1day/BTC

#### /history/7day/:coin 
- Description: Returns 7 days of price history for a given coin
- URL: http://coincap.io/history/7day/BTC

#### /history/30day/:coin 
- Description: Returns 30 days day of price history for a given coin
- URL: http://coincap.io/history/30day/BTC

#### /history/90day/:coin 
- Description: Returns 90 days of price history for a given coin
- URL: http://coincap.io/history/90day/DOGE

#### /history/180day/:coin 
- Description: Returns 180 days of price history for a given coin
- URL: http://coincap.io/history/180day/BTC


#### /history/365day/:coin 
- Description: Returns a years of price history for a given coin
- URL: http://coincap.io/history/365day/BTC

### Socket API
    https://coincap.io


To connect to CoinCap WebSockets you must use socket.io-client 1.4.6 or another
websocket client compatiable with that version of Socket.io


[Sample code attached](https://github.com/CoinCapDev/CoinCap/blob/master/subscribe.html)

#### Socket Response
```JSON
{
	"coin": "XMR",
	"exchange_id": "bittrex",
	"market_id": "ETH_XMR",
	"message": {
		"coin": "XMR",
		"msg": {
			"cap24hrChange": -6.96,
			"long": "Monero",
			"mktcap": 1581966162.9998832,
			"perc": -6.96,
			"price": 113.18142493836066,
			"shapeshift": true,
			"short": "XMR",
			"supply": 15074975,
			"usdVolume": 46837300,
			"volume": 46837300,
			"vwapData": 109.52716734604815,
			"vwapDataBTC": 109.52716734604815
		}
	},
	"msg": {
		"cap24hrChange": -6.96,
		"long": "Monero",
		"mktcap": 1581966162.9998832,
		"perc": -6.96,
		"price": 113.18142493836066,
		"shapeshift": true,
		"short": "XMR",
		"supply": 15074975,
		"usdVolume": 46837300,
		"volume": 46837300,
		"vwapData": 109.52716734604815,
		"vwapDataBTC": 109.52716734604815
	}
}
```


