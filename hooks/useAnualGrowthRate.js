import { useNumberInput } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

export const useAnnualGrowth = () => {
  const [initialAmount, setInitialAmount] = useState(0)
  const [finalAmount, setFinalAmount] = useState(0)
  const [annualGrotwh, setAnnualGrowth] = useState(0)

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber
  } = useNumberInput({ step: 1, min: 0, defaultValue: 5, max: 1500 }) // years

  useEffect(() => {
    const TCAC = 100 * (Math.pow(finalAmount / initialAmount, 1 / valueAsNumber) - 1)
    console.log('TCAC', TCAC)
    if (isNaN(TCAC)) {
      setAnnualGrowth(0)
    } else {
      setAnnualGrowth(TCAC)
    }
  }, [initialAmount, finalAmount, valueAsNumber])

  return {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    setInitialAmount,
    initialAmount,
    setFinalAmount,
    finalAmount,
    valueAsNumber,
    annualGrotwh
  }
}
