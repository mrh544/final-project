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

  display: function(investors)
  {
    investors.forEach(function(investor) {
      let fundID = investor.fund;
      let roi = investor.roi;

      fetch('./investors/' + fundID + '.json').then(data => data.json()).then(data => {
        data.roi = roi;
        data.fundID = fundID;

        if(roi > 0)
          data.direction = 'positive';
        else
          data.direction = 'negative';

        fetch('./templates/investor-figure.mustache').then(template => template.text()).then(template => {
            const rendered = Mustache.render(template, data);
            $('#investors').append(rendered);
        });
      });
    });
  }

}
