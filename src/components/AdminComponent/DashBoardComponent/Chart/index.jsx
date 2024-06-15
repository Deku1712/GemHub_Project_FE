import {
  Card,
  CardBody,
  CardHeader,
  Typography
} from '@material-tailwind/react'
import Chart from 'react-apexcharts'
import manage from '../../../../service/manage'
import { useEffect, useState } from 'react'
import { formatCurrencyVND } from '../../../../api/function'

function transformData(data) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const seriesData = new Array(12).fill(0) // Initialize array with 12 zeros

  Object.keys(data).forEach(month => {
    const monthIndex = parseInt(month) - 1 // Convert to zero-based index
    seriesData[monthIndex] = data[month]
  })

  return {
    categories: months,
    series: [{
      name: 'Doanh thu',
      data: seriesData
    }]
  }
}

export default function ChartSale({change, setChange}) {
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Doanh thu',
      data: []
    }],
    categories: []
  })

  const fetchMonthlyIncome = async () => {
    try {
      const response = await manage.getMonthlyIncome()
      const transformedData = transformData(response.data)
      setChartData(transformedData)
    } catch (error) {
      console.error('Error fetching monthly income data:', error)
    }
  }

  const chartConfig = {
    chart: {
      toolbar: {
        show: false
      }
    },
    title: {
      text: 'Doanh thu hàng tháng',
      align: 'center',
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#263238'
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#020617'],
    stroke: {
      lineCap: 'round',
      curve: 'smooth'
    },
    markers: {
      size: 5,
      colors: ['#020617'],
      strokeWidth: 2
    },
    xaxis: {
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400
        }
      },
      categories: chartData.categories
    },
    yaxis: {
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400
        }
      }
    },
    grid: {
      show: true,
      borderColor: '#dddddd',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 5,
        right: 20
      }
    },
    fill: {
      opacity: 0.8
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: true
      },
      y: {
        formatter: function (value) {
          return  formatCurrencyVND(value)
        }
      }
    }
  }

  useEffect(() => {
    fetchMonthlyIncome()
    setChange(false)
  }, [change])

  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="w-full h-full flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div>
          <Typography variant="h6" color="blue-gray">
            Doanh thu của cửa hàng
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart options={chartConfig} series={chartData.series} type="line" height={240} />
      </CardBody>
    </Card>
  )
}
