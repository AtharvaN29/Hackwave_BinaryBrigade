import CanvasJSReact from '@canvasjs/react-charts'
// var CanvasJSReact = require('@canvasjs/react-charts')
var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

export default function PieChart() {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'dark2', // "light1", "dark1", "dark2"
    title: {
      text: 'Stability',
    },
    data: [
      {
        type: 'pie',
        indexLabel: '{label}: {y}%',
        startAngle: -90,
        dataPoints: [
          { y: 36, label: 'Stable' },
          { y: 64, label: 'Unstable' },
        ],
      },
    ],
  }
  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  )
}
