const fund = {

  getCurrentValue: function(holdings)
  {
    let currentValue = 0;
    holdings.forEach(function(obj) {
      currentValue += (obj.currentPrice * obj.shares);
    });
    return currentValue;
  },

  getPurchaseValue: function(holdings)
  {
    let purchaseValue = 0;
    holdings.forEach(function(obj) {
      purchaseValue += (obj.purchasePrice * obj.shares);
    });
    return purchaseValue;
  },

  getROI: function(purchaseValue, currentValue)
  {
    let roi = ((currentValue - purchaseValue) / purchaseValue) * 100;

    return parseFloat((roi).toFixed(2));
  },

  getTopHoldings: function(holdings, number)
  {
    holdings.sort(function(a, b){
        return b.roi - a.roi;
    });

    let topHoldings = [];
    for(var i = 0; i < number; i++)
    {
      topHoldings.push(holdings[i]);
    }

    console.log(topHoldings);

    return topHoldings;
  }

}
