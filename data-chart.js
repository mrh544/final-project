Highcharts.chart('container', {
    chart: {
        width: 600,
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Stock A', 'Stock B', 'Stock C', 'Stock D', 'Stock F']
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }]
});
