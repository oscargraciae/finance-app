import { useNumberInput } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

export const useInterest = () => {
  const [datasets, setDatases] = useState([])
  const [datasetsInitialAmmount, setDatasesInitialAmmount] = useState([])
  const [datasetsContributions, setDatasesContributions] = useState([])
  const [labels, setLabels] = useState()

  const [initialAmount, setInitialAmount] = useState(10000)
  const [interest, setInterest] = useState(7)
  const [contribution, setContribution] = useState(2000)
  const [interestPeriod, setInterestPeriod] = useState(12)
  const [contributionPeriod, setContributionPeriod] = useState(12)

  const [finalBalance, setFinalBalance] = useState(0)
  const [finalInteresEarned, setFinalInterestEarned] = useState(0)
  const [finalContribution, setFinalContribution] = useState(0)

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber
  } = useNumberInput({ step: 1, min: 0, defaultValue: 5, max: 50 })

  function compundInterest({ initialAmount, contribution, rate, time }) {
    const totalAmount = Number(contribution * (interestPeriod * time)) + Number(initialAmount)

    const totalPeriod = interestPeriod * time

    const r = 1 + (rate / interestPeriod) / 100
    const Ci = initialAmount * Math.pow(r, totalPeriod)
    const Cr = contribution * ((Math.pow(r, totalPeriod) - 1) / (Math.pow(r, 1) - 1)) // 12/355
    const Cf =  Number(Ci) + Number(Cr)
    let CI = (Cf - totalAmount).toFixed(2)

    return {
      CI,
      totalContribution: contribution * (interestPeriod * time),
      totalInitial: initialAmount,
    }
  }

  useEffect(() => {
    if (isNaN(valueAsNumber) || valueAsNumber < 0 || valueAsNumber > 50) {
      return
    }

    const tInterest = []
    const tContribution = []
    const tInitialAmount = []
    const labelYear = Array.from(Array(Number(valueAsNumber)).keys()).map(value => `${(value + 1)}`);
    setLabels(labelYear)

    for (let i = 0; i < valueAsNumber; i++) {
      const { CI, totalContribution, totalInitial } = compundInterest({ initialAmount, contribution, rate: interest, time: (i + 1) })
      tInterest.push(CI)
      tContribution.push(totalContribution)
      tInitialAmount.push(totalInitial)
    }

    const fContribution = tContribution[tContribution.length - 1] + tInitialAmount[tInitialAmount.length - 1]
    const fInterest = tInterest[tInitialAmount.length - 1]
    setFinalContribution(fContribution)
    setFinalInterestEarned(fInterest)
    setFinalBalance(Number(fContribution) + Number(fInterest))

    setDatases(tInterest)
    setDatasesContributions(tContribution)
    setDatasesInitialAmmount(tInitialAmount)
  }, [initialAmount, interest, valueAsNumber, contribution, interestPeriod])

  return {
    datasets,
    datasetsInitialAmmount,
    datasetsContributions,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    labels,
    setInitialAmount,
    initialAmount,
    setContribution,
    contribution,
    setInterest,
    interest,
    setInterestPeriod,
    interestPeriod,
    setContributionPeriod,
    contributionPeriod,
    finalBalance,
    finalContribution,
    finalInteresEarned,
  }
}
