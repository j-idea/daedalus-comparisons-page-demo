
let stackCounter = 0;
const numberOfBitsInAStack = 3;

const seriesOfFourMissingThreeScenarios = [{
  name: 'Education',
  data: [{
    y: 0.3,
    breakdownData: [
      {
        name: 'Absences',
        y: 0.2
      },
      {
        name: 'Closures',
        y: 0.1
      }
    ]
  },
  { y: 0 },
  { y: 0 },
  { y: 0 }],
  dataLabels: {
    enabled: true,
    formatter() {
      return this.color === 'lightgrey' ? undefined : `${(this.y).toFixed(1)}%`
    }
  }
}, {
  name: 'Life years',
  data: [2.6, 3.3, 3.3, 3.3],
  dataLabels: {
    enabled: true,
    formatter() {
      return this.color === 'lightgrey' ? undefined : `${(this.y).toFixed(1)}%`
    }
  }
}, {
  name: 'GDP',
  data: [{
    y: 0.4,
    breakdownData: [
      {
        name: 'Absences',
        y: 0.35
      },
      {
        name: 'Closures',
        y: 0.05
      }
    ]},
  { y: 0 },
  { y: 0 },
  { y: 0 }],
  dataLabels: {
    enabled: true,
    formatter() {
      return this.color === 'lightgrey' ? undefined : `${(this.y).toFixed(1)}%`
    }
  }
}]

const seriesWithFourScenarios = [{
  name: 'Education',
  data: [{
    y: 0.3,
    breakdownData: [
      {
        name: 'Absences',
        y: 0.2
      },
      {
        name: 'Closures',
        y: 0.1
      }
    ]
  },
  {
    y: 0.2,
    breakdownData: [
      {
        name: 'Absences',
        y: 0.05
      },
      {
        name: 'Closures',
        y: 0.15
      }
    ]
  },
  {
    y: 0.7,
    breakdownData: [
      {
        name: 'Absences',
        y: 0.2
      },
      {
        name: 'Closures',
        y: 0.5
      }
    ]
  },
  {
    y: 0.3,
    breakdownData: [
      {
        name: 'Absences',
        y: 0.2
      },
      {
        name: 'Closures',
        y: 0.1
      }
    ]
  }],
  dataLabels: {
    enabled: true,
    formatter() {
      return `${(this.y).toFixed(1)}%`
    }
  }
}, {
  name: 'Life years',
  data: [2.6, 4.4, 3.2, 6.1],
  dataLabels: {
    enabled: true,
    formatter() {
      return `${(this.y).toFixed(1)}%`
    }
  }
}, {
  name: 'GDP',
  data: [{
    y: 0.4,
    breakdownData: [
      {
        name: 'Absences',
        y: 0.35
      },
      {
        name: 'Closures',
        y: 0.05
      }
    ]
  },
  {
    y: 0.3,
    breakdownData: [
      {
        name: 'Absences',
        y: 0.05
      },
      {
        name: 'Closures',
        y: 0.25
      }
    ]
  },
  {
    y: 0.2,
    breakdownData: [
      {
        name: 'Absences',
        y: 0.19
      },
      {
        name: 'Closures',
        y: 0.01
      }
    ]
  },
  {
    y: 0.6,
    breakdownData: [
      {
        name: 'Absences',
        y: 0.05
      },
      {
        name: 'Closures',
        y: 0.55
      }
    ]
  }],
  dataLabels: {
    enabled: true,
    formatter() {
      return `${(this.y).toFixed(1)}%`
    }
  }
}]

const chartOptions = {
  chart: {
    type: 'column',
    events: {
      load() {
        // https://www.highcharts.com/forum/viewtopic.php?t=42019
        for (const s of this.series) {
          for (const p of s.points) {
            // get last points
            if (p.index > 0) {
              p.update({
                color: 'lightgrey',
                myCustomProperty: 'pendingData'
              })
            }
          }
        }
      }
    }
  },
  title: {
    text: '',
    align: 'left'
  },
  xAxis: {
    categories: ['Elimination', 'School closures', 'Business closures', 'No response']
  },
  yAxis: {
    min: 0,
    title: {
      text: '% of GDP'
    },
    stackLabels: {
      enabled: true,
      formatter() {
        const hasSomeZeroPoints = Object.values(this.points).flat().includes(0)
        return hasSomeZeroPoints ? undefined : `${(this.total).toFixed(1)}%`
      }
    },
    labels: {
      formatter() {
        return `${(this.value).toFixed(1)}%`
      }
    }
  },
  legend: {
    align: 'right',
    itemStyle: {
      color: 'black'
    },
    borderWidth: '1',
    borderRadius: '5',
    backgroundColor: 'white',
    // y: aVerticalDistance,
    floating: true,
    // borderColor: '#CCC',
    // borderWidth: 1,
    // shadow: false,
    layout: 'vertical',
    verticalAlign: 'top'
  },
  tooltip: {
    formatter() {
      return this.point.color === 'lightgrey' ? undefined : `<small>${this.point.x}</small><br/><b>${this.point.series.name}: ${this.point.y}%</b>`
    },
    useHTML: true
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: false
      }
    }
  },
  series: seriesOfFourMissingThreeScenarios
}

document.addEventListener('DOMContentLoaded', () => {
  const chart = Highcharts.chart('highChartsContainer', chartOptions)
})
