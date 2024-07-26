var options = {
  series: [
    {
      name: 'Invested',
      data: [
        [1577836800000, 30.95],
        [1583020800000, 31.5],
        [1588204800000, 30.8],
        [1593388800000, 31.2],
        [1598572800000, 30.7],
        [1603756800000, 31.4],
        [1609459200000, 31.6],
        [1614643200000, 32.1],
        [1619827200000, 31.7],
        [1625011200000, 32.3],
        [1630195200000, 32.0],
        [1635379200000, 32.5],
        [1640995200000, 32.7],
        [1646179200000, 33.0],
        [1651363200000, 32.2],
        [1656547200000, 32.6],
        [1661731200000, 32.1],
        [1666915200000, 32.8],
        [1672531200000, 33.1],
        [1677715200000, 33.5],
        [1682899200000, 32.9],
        [1688083200000, 33.2],
        [1693267200000, 32.8],
        [1698451200000, 33.4],
        [1704067200000, 33.7],
        [1709251200000, 34.1],
        [1714435200000, 33.6],
        [1719619200000, 34.0],
        [1724803200000, 33.5],
        [1729987200000, 34.2],
        [1739619200000, 34.0],
        [1744803200000, 33.5],
        [1749987200000, 34.2],
      ],
    },
  ],
  chart: {
    id: 'area-datetime',
    fontFamily: 'Roboto, Arial, sans-serif',
    type: 'area',
    height: 250,
    zoom: {
      autoScaleYaxis: true,
    },
    toolbar: {
      show: false,
    },
  },
  grid: {
    borderColor: '#f3f3f3',
    strokeDashArray: 3,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  xaxis: {
    type: 'datetime',
    min: new Date('01 Jan 2020').getTime(),
    max: new Date('01 Jan 2025').getTime(),
    tickAmount: 5,
    labels: {
      format: 'yyyy',
    },
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy',
    },
  },
  colors: ['rgb(132, 90, 223)'],
  stroke: {
    width: [1.2],
    curve: ['smooth'],
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
}
document.getElementById('totalInvestmentsStats').innerHTML = ''
var chart2 = new ApexCharts(
  document.querySelector('#totalInvestmentsStats'),
  options
)
chart2.render()
function totalInvestmentsStats() {
  chart2.updateOptions({
    colors: ['rgb(' + myVarVal + ')'],
  })
}
/* Total Investments Chart */

//  /* Start:: Main cards charts */
var spark1 = {
  chart: {
    type: 'line',
    height: 40,
    width: 120,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1,
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'Value',
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
  },
  colors: ['#26bf94'],
}
document.getElementById('bitcoin-chart').innerHTML = ''
var spark1 = new ApexCharts(document.querySelector('#bitcoin-chart'), spark1)
spark1.render()

// etherium

var spark3 = {
  chart: {
    type: 'line',
    height: 40,
    width: 120,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1,
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'Value',
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
  },
  colors: ['#e6533c'],
}
document.getElementById('etheriumChart').innerHTML = ''
var spark3 = new ApexCharts(document.querySelector('#etheriumChart'), spark3)
spark3.render()
/* End:: Main cards charts */

// bnb

var spark3 = {
  chart: {
    type: 'line',
    height: 40,
    width: 120,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1,
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'Value',
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
  },
  colors: ['#e6533c'],
}
document.getElementById('dashcoin-chart').innerHTML = ''
var spark3 = new ApexCharts(document.querySelector('#dashcoin-chart'), spark3)
spark3.render()
/* End:: Main cards charts */

// sol

var spark2 = {
  chart: {
    type: 'line',
    height: 40,
    width: 120,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1,
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'Value',
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
  },
  colors: ['#26bf94'],
}
document.getElementById('etherium-chart').innerHTML = ''
var spark2 = new ApexCharts(document.querySelector('#etherium-chart'), spark2)
spark2.render()

// xrp

var spark2 = {
  chart: {
    type: 'line',
    height: 40,
    width: 120,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1,
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'Value',
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
  },
  colors: ['#26bf94'],
}
document.getElementById('xrpChart').innerHTML = ''
var spark2 = new ApexCharts(document.querySelector('#xrpChart'), spark2)
spark2.render()

// ada
var spark3 = {
  chart: {
    type: 'line',
    height: 40,
    width: 120,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1,
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  series: [
    {
      name: 'Value',
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
  },
  colors: ['#e6533c'],
}
document.getElementById('adaChart').innerHTML = ''
var spark3 = new ApexCharts(document.querySelector('#adaChart'), spark3)
spark3.render()
/* End:: Main cards charts */
