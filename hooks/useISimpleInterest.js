import { useNumberInput } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

export const useSimpleInterest = () => {
  const [datasets, setDatases] = useState([])
  const [datasetsInitialAmmount, setDatasesInitialAmmount] = useState([])
  const [labels, setLabels] = useState()

  const [initialAmount, setInitialAmount] = useState(10000)
  const [interest, setInterest] = useState(7)
  const [interestPeriod, setInterestPeriod] = useState(1)

  const [finalBalance, setFinalBalance] = useState(0)
  const [finalInteresEarned, setFinalInterestEarned] = useState(0)
  const [finalContribution, setFinalContribution] = useState(0)

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber
  } = useNumberInput({ step: 1, min: 0, defaultValue: 5, max: 50 })

  function simpleInterest({ interest, time }) {
    const r = 1 + ((interest * time) / interestPeriod) / 100
    const Cf = initialAmount * r
    const interestF = (Cf - initialAmount).toFixed(2)
    return { interestF }
  }

  useEffect(() => {
    if (isNaN(valueAsNumber) || valueAsNumber < 0 || valueAsNumber > 50) {
      return
    }

    const tInterest = []
    const tInitialAmount = []
    const labelYear = Array.from(Array(Number(valueAsNumber)).keys()).map(value => `${(value + 1)}`);
    setLabels(labelYear)

    for (let i = 0; i < valueAsNumber; i++) {
      const { interestF } = simpleInterest({ interest, time: (i + 1) })
      tInterest.push(interestF)
      tInitialAmount.push(initialAmount)
    }

    const fContribution = tInitialAmount[tInitialAmount.length - 1]
    const fInterest = tInterest[tInitialAmount.length - 1]

    console.log('Finales', fContribution, fInterest)

    setFinalContribution(fContribution)
    setFinalInterestEarned(fInterest)
    setFinalBalance(Number(fContribution) + Number(fInterest))

    setDatases(tInterest)
    setDatasesInitialAmmount(tInitialAmount)
  }, [initialAmount, interest, valueAsNumber, interestPeriod])

  return {
    datasets,
    datasetsInitialAmmount,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    labels,
    setInitialAmount,
    initialAmount,
    setInterest,
    interest,
    setInterestPeriod,
    interestPeriod,
    finalBalance,
    finalContribution,
    finalInteresEarned
  }
}
