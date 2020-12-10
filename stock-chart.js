const apiToken = 'pk_f5c07fe30e3f4fcea2b684c4b6974d55';

// Highcharts.getJSON('https://cloud.iexapis.com/v1/deep?symbols=SNAP&token=' + apiToken, function (data) {

    // let trades = data.trades,
    //     seriesData = [];
    //
    // for(var i in trades)
    // {
    //   let price = trades[i].price;
    //   let timestamp = trades[i].timestamp;
    //
    //   seriesData.push([timestamp, price]);
    // }
Highcharts.getJSON('chart-data.json', function (data) {

    let options = {

        chart: {
          type: 'bar'
        },

        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: function() {
                  $('#share-value').html(this.y.toFixed(2));
                }
              }
            }
          },
          column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
          }
        },

        title: {
            text: null
        },

        exporting : {
        		enabled: false
        },

        scrollbar: {
            enabled: false
        },

        navigator: {
            enabled: false
        },

        credits: {
          enabled: false
        },

        yAxis: {
          min: 0,
          stackLabels: {
            enabled: true,
          },
          title: {
            text: 'Prices'
          }
        },

        xAxis: {
          categories: []
        },

        series: []
    }

    let purchasePrices = [];
    let currentPrices = [];

    for(var i in data)
    {
      purchasePrices.push(data[i].purchasePrice);
      currentPrices.push(data[i].currentPrice);

      options.xAxis.categories.push(data[i].ticker);
    }

    console.log(options.xAxis.categories);

    options.series.push({
      name: 'Purchase',
      data: purchasePrices
    });

    console.log(options.series);

    options.series.push({
      name: 'Current',
      data: currentPrices
    });

    // Create the chart
    Highcharts.chart('container', options);
});
