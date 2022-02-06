import React, { useState, useEffect } from 'react'
import { useNumberInput } from '@chakra-ui/react'

export const usePresentValue = () => {
  const [futureAmount, setFutureAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [presentValue, setPresentValue] = useState(0)

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber
  } = useNumberInput({ step: 1, min: 0, defaultValue: 5, max: 1500 }) // years

  useEffect(() => {
    const r = 1 + (rate / 100)
    const PV = futureAmount / Math.pow(r, valueAsNumber)
    setPresentValue(PV)
  }, [futureAmount, rate, valueAsNumber])

  return {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    setFutureAmount,
    futureAmount,
    setRate,
    rate,
    presentValue,
    valueAsNumber
  }
}
