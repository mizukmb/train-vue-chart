import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data'],
  mounted () {
    this.renderChart(this.datacollection, this.options)
  },
  data () {
    return {
      datacollection: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 50]
          },
          {
            label: 'Data Two',
            backgroundColor: '#0f0f0f',
            data: [80, 60]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0
              },
              stacked: true
            }
          ],
          xAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    };
  }
}
