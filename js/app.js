const app = {

  apiToken : 'pk_f5c07fe30e3f4fcea2b684c4b6974d55',

  initialize: function()
  {
    app.retrieveData(['0001771524', '0001166559', '0001336528', '0000936753', '0001067983', '0000921669']);
  },

  retrieveData: function(funds)
  {
    let investors = [];
    let holdings = [];

    async.each(funds, function(fundID, next)
    {
      async.waterfall([
        function(callback) { callback(null, fundID); },
        app.getFileContents,
        app.getStockInfo
      ], function (error, holdings) {
        let purchaseValue = fund.getPurchaseValue(holdings);
        let currentValue = fund.getCurrentValue(holdings);

        // holdings.forEach(function(holding) {
        //   console.log(fund.getROI(holding.purchasePrice, holding.currentPrice));
        // });
        // console.log(fund.getTopHoldings(holdings, 5));

        let obj = {
          'fund' : fundID,
          'roi' : fund.getROI(purchaseValue, currentValue).toFixed(2)
        }
        investors.push(obj);

        next(error, holdings);
      });
    }, function (error) {
      investor.display(investors, function(templates)
      {
        templates.forEach(function(template) {
            $('#investors').append(template);
        });

        let tag = search.getInput();
        search.searchByTag(investors, tag);
      });
    });
  },

  getFileContents: function(fundID, callback)
  {
    fetch('./data/' + fundID + '.json').then(data => data.json()).then(data => {
      callback(null, data);
    });
  },

  getStockInfo: function(holdings, callback)
  {
    let tickers = [];
    holdings.forEach(function(obj) {
      tickers.push(obj.ticker);
    });

    fetch('https://cloud.iexapis.com/v1/tops/last?symbols=' + tickers + '&token=' + app.apiToken).then(data => data.json()).then(data => {
      for(let i = 0; i < holdings.length; i++)
        holdings[i].currentPrice = data[i].price;

      callback(null, holdings);
    });
  }

}
