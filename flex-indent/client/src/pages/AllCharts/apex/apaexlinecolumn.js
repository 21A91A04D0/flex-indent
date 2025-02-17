import React from "react"
import ReactApexChart from "react-apexcharts"

const Apaexlinecolumn = () => {
  const series = [
    {
      name: "Flex",
      data: [46, 57, 59, 54, 62, 58, 64, 60, 66, 88, 67, 98],
    },
    {
      name: "Stickers",
      data: [74, 83, 102, 97, 86, 106, 93, 114, 94, 58, 64, 60],
    },
    {
      name: "Foam Boards",
      data: [37, 42, 38, 26, 47, 50, 54, 55, 43, 83, 102, 97],
    },
    {
      name: "certificates",
      data: [46, 57, 51, 54, 68, 58, 84, 60, 76, 88, 67, 98]
    }
  ]
  const options = {
    chart: {
      toolbar: {
        show: !1,
      },
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: !1
    },
    stroke: {
      show: !0,
      width: 2,
      colors: ['transparent']
    },
    series: [{
      name: 'Net Profit',
      data: [46, 57, 59, 54, 62, 58, 64, 60, 66, 54, 55, 43]
    }, {
      name: 'Revenue',
      data: [74, 83, 102, 97, 86, 106, 93, 114, 94, 54, 55, 43]
    }, {
      name: 'Free Cash Flow',
      data: [37, 42, 38, 26, 47, 50, 54, 55, 43, 54, 55, 43]
    }],
    colors: ['#45cb85', '#3b5de7', '#eeb902', '#eb5d76'],
    xaxis: {
      categories: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      title: {
        text: 'Quantity'
      }
    },
    grid: {
      borderColor: '#f1f1f1',
    },
    fill: {
      opacity: 1

    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " " + 'quantity'
        }
      }
    }
  }

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} className="apex-charts" />
  )
}

export default Apaexlinecolumn
