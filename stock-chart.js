const apiToken = 'pk_f5c07fe30e3f4fcea2b684c4b6974d55';

Highcharts.getJSON('https://cloud.iexapis.com/v1/deep?symbols=SNAP&token=' + apiToken, function (data) {

    let trades = data.trades,
        seriesData = [];

    for(var i in trades)
    {
      let price = trades[i].price;
      let timestamp = trades[i].timestamp;

      seriesData.push([timestamp, price]);
    }

    // Create the chart
    Highcharts.stockChart('container', {

        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: function() {
                  $('#share-value').html(this.y.toFixed(2));
                }
              }
            }
          }
        },

        annotations: [{
          labels: [{
              text: '<img class="chart-icon" src="images/billackman.jpg" />',
              point: {
                  x: seriesData[0][0],
                  y: seriesData[0][1],
                  xAxis: 0,
                  yAxis: 0
              },
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              useHTML: true,
          }],
        }],

        rangeSelector: {
            height: 50,
            selected: 2
        },

        title: {
            enabled: false
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

        series: [{
            name: 'AAPL Stock Price',
            data: seriesData,
            type: 'spline',
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});
