const investor = {

  rank: function(investors)
  {
    var array = [];

    investors.forEach(function(investor) {
      array.push(investor);
    });

    array.sort(function(a, b){
        return b.roi - a.roi;
    });

    var rank = 1;
    for (var i = 0; i < array.length; i++) {
      // increase rank only if current roi is less than previous
      if (i > 0 && array[i].roi < array[i - 1].roi) {
        rank++;
      }
      array[i].rank = rank;
    }

    return array;
  },

  addProperties: function(data, callback)
  {
    let fundID = data.fund;
    let roi = data.roi;

    fetch('./investors/' + fundID + '.json').then(data => data.json()).then(data => {
      data.roi = roi;
      data.fundID = fundID;

      if(roi > 0)
        data.direction = 'positive';
      else
        data.direction = 'negative';

      callback(null, data);
    });
  },

  getTemplate: function(data, callback)
  {
    fetch('./templates/investor-figure.mustache').then(template => template.text()).then(template => {
      const rendered = Mustache.render(template, data);

      callback(null, rendered);
    });
  },

  display: function(data, callback)
  {
    let templates = [];

    // rank data before displaying
    data = investor.rank(data);

    // eachSeries is used to guarantee order
    async.eachSeries(data, function(obj, next)
    {
      async.waterfall([
        function(callback) { callback(null, obj); },
        investor.addProperties,
        investor.getTemplate
      ], function (error, rendered)
      {
        templates.push(rendered);

        next(error, rendered);
      });
    }, function (error) {
      callback(templates);
    });
  }

}
