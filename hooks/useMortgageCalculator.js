import React, { useState, useEffect } from 'react'
import { useNumberInput } from '@chakra-ui/react'

export const useMortgageCalculator = () => {
  const [datasetInterest, setDatasetInterest] = useState([])
  const [datasetPrincipal, setDatasetPrincipal] = useState([])
  const [labels, setLabels] = useState()

  const [initialAmount, setInitialAmount] = useState(1000000)
  const [interest, setInterest] = useState(12)

  const [finalMonthlyPayment, setFinalMonthlyPayment] = useState(0)
  const [finalInterestPayment, setFinalInterestPayment] = useState(0)
  const [finalTotalPayment, setFinalTotalPayment] = useState(0)
  const [tableResults, setTableRessults] = useState([])

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber
  } = useNumberInput({ step: 1, min: 0, defaultValue: 15, max: 50 })

  function mortgageCalculator ({ initialAmount, rate, time }) {
    const r = (rate / 12) / 100
    const monthlyPayment = initialAmount * ((Math.pow(1 + r, time * 12) * r) / (Math.pow(1 + r, time * 12) - 1))
    const totalPayment = monthlyPayment * (time * 12)
    const interestPayment = totalPayment - initialAmount

    return { monthlyPayment, totalPayment, interestPayment }
  }

  function mortgageTable ({ monthlyPayment }) {
    const r = (interest / 12) / 100

    const totalTime = valueAsNumber * 12
    let tablePayments = []
    let principal = initialAmount

    for (let i = 0; i < totalTime; i++) {
      const interestPayment = r * principal
      const principalPayments = (monthlyPayment - interestPayment).toFixed(3)
      let principalBefore = principal
      principal = (principal - principalPayments).toFixed(3)
      tablePayments = [...tablePayments, { monthlyPayment, interestPayment, principalPayments, principal, principalBefore }]
      principalBefore = principal
    }
    return tablePayments
  }

  useEffect(() => {
    if (isNaN(valueAsNumber) || valueAsNumber < 0 || valueAsNumber > 50) {
      return
    }
    const labelYear = Array.from(Array(Number(valueAsNumber)).keys()).map(value => `${(value + 1)}`)
    setLabels(labelYear)

    const { monthlyPayment, totalPayment, interestPayment } = mortgageCalculator({ initialAmount, rate: interest, time: valueAsNumber })
    const results = mortgageTable({ monthlyPayment })

    console.log('results', results)
    const dataInterestPayment = []
    const dataPrincipalPayment = []
    let n = 1
    let sum = 0
    let sumPrincipal = 0
    for (let i = 0; i < results.length; i++) {
      const e = results[i]
      if (n < 12) {
        sum = sum + Number(e.interestPayment)
        sumPrincipal = sumPrincipal + Number(e.principalPayments)
        n++
      } else {
        sum = sum + Number(e.interestPayment)
        sumPrincipal = sumPrincipal + Number(e.principalPayments)
        dataInterestPayment.push(sum.toFixed(2))
        dataPrincipalPayment.push(sumPrincipal.toFixed(2))
        sum = 0
        sumPrincipal = 0
        n = 1
      }
    }
    console.log('dataInterestPayment', dataInterestPayment)
    setDatasetInterest(dataInterestPayment)
    setDatasetPrincipal(dataPrincipalPayment)

    // const a = results.map((item) => item.principalPayments)

    setFinalInterestPayment(interestPayment)
    setFinalMonthlyPayment(monthlyPayment)
    setFinalTotalPayment(totalPayment)
    setTableRessults(results)
  }, [initialAmount, interest, valueAsNumber])

  return {
    datasetPrincipal,
    datasetInterest,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    labels,
    setInitialAmount,
    initialAmount,
    setInterest,
    interest,
    finalMonthlyPayment,
    finalInterestPayment,
    finalTotalPayment,
    tableResults
  }
}
