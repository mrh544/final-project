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

Highcharts.theme = {
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: 'transparent',
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: 'rgba(112,112,115,.25)',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: 'rgba(112,112,115,.25)',
        minorGridLineColor: '#505053',
        tickColor: 'rgba(112,112,115,.25)',
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    yAxis: {
        gridLineColor: 'rgba(112,112,115,.25)',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: 'rgba(112,112,115,.25)',
        minorGridLineColor: '#505053',
        tickColor: 'rgba(112,112,115,.25)',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#F0F0F3',
                style: {
                    fontSize: '13px'
                }
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        },
        title: {
            style: {
                color: '#C0C0C0'
            }
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },
    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },
    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },
    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#40404070',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000000a3',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },
    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);
Highcharts.setOptions({ lang: { rangeSelectorZoom :"" } });
