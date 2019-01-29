// Data retrieved from http://vikjavev.no/ver/index.php?spenn=2d&sluttid=16.06.2015.

Highcharts.chart('container', {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: 'Volkan and Aysen\'s BMI transformations of last 25 years'
    },
    subtitle: {
        text: '1994 - 2018'
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'BMI (kg/m2)'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ 
            from: 16,
            to: 18.5,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Underweight',
                style: {
                    color: '#606060'
                }
            }
        },{ 
            from: 18.5,
            to: 25,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Healthy weight',
                style: {
                    color: '#606060'
                }
            }
        },{ 
            from: 25,
            to: 30,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Overweight',
                style: {
                    color: '#606060'
                }
            }
        }, { 
            from: 30,
            to: 35,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Moderately obese',
                style: {
                    color: '#606060'
                }
            }
        }, { 
            from: 35,
            to: 40,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Severely obese',
                style: {
                    color: '#606060'
                }
            }
        }, { 
            from: 40,
            to: 45,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Very severely obese',
                style: {
                    color: '#606060'
                }
            }
        }, { 
            from: 45,
            to: 50,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Morbidly obese',
                style: {
                    color: '#606060'
                }
            }
        }, { 
            from: 50,
            to: 60,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Super obese',
                style: {
                    color: '#606060'
                }
            }
        }, { 
            from: 60,
            to: 65,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Hyper obese',
                style: {
                    color: '#606060'
                }
            }
        }]
    },
    tooltip: {
        valueSuffix: ' m/s'
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: Date.UTC(1971, 0, 1, 0, 0, 0), // one year
            pointStart: Date.UTC(1994, 0, 1, 0, 0, 0)
        }
    },
    series: [{
        name: 'Aysen',
        data: [
            16.7, 18.5, 17.3, 18.2, 20.3,
            21.5, 23.6, 27.8, 24.7, 29.9,
            31.2, 35.5, 33.3, 40.2, 35.4,
            32.1, 30.7, 31.8, 30.5, 29.7,
            30.8, 35.7, 36.7, 33.8, 35.9
        ]

    }, {
        name: 'Volkan',
        data: [
            20.7, 21.5, 22.3, 25.2, 24.3,
            26.5, 22.6, 23.8, 24.7, 27.9,
            25.2, 24.5, 25.3, 23.2, 20.4,
            22.1, 27.7, 28.8, 23.5, 25.7,
            26.8, 26.7, 26.7, 27.8, 26.9
        ]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});