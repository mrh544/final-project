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
  }

}
