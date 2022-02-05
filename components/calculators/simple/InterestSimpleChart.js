import React from 'react'
import { Flex } from '@chakra-ui/react'
import ChartJS from 'chart.js/auto'
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

export const InterestSimpleChartBar = ({ datasets, datasetsInitialAmmount, labels }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    // ...registerables
    // ChartDataLabels
  )

  const options = {
    scales: {
      xAxes: {
        grid: {
          display: false
        },
        stacked: true,
        ticks: {
          precision: 0
        }
      },
      yAxes: {
        grid: {
          display: false
        },
        stacked: true
      }
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        align: 'center'
      }
    },
    tooltip: {
      cornerRadius: 6,
      titleColor: 'transparent',
      titleFont: {
        size: 0
      },
      enabled: true,
      position: 'nearest',
      backgroundColor: '#FFFFFF',
      bodyColor: '#000000',
      footerColor: '#000000',
      padding: 12,
      // yAlign: 'bottom',
      // xAlign: 'center',
      borderColor: '#E2E8F0',
      borderWidth: 2,
      footerFont: {
        size: 12
      }
    }
  }

  const datasetsBar = [
    {
      label: 'Intereses generados',
      backgroundColor: '#2F855A',
      borderRadius: 8,
      data: datasets,
      order: 3
    },
    {
      label: 'Deposito inicial',
      backgroundColor: '#9AE6B4',
      data: datasetsInitialAmmount,
      order: 1
    }
  ]

  return (
    <Flex h="400px" w="100%">
      <Chart
        type="bar"
        data={{ labels, datasets: datasetsBar }}
        height={350}
        options={options}
      />
    </Flex>
  )
}
