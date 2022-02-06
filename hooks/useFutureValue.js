import React, { useState, useEffect } from 'react'
import { useNumberInput } from '@chakra-ui/react'

export const useFutureValue = () => {
  const [presentAmount, setPresentAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [futureValue, setFutureValue] = useState(0)

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber
  } = useNumberInput({ step: 1, min: 0, defaultValue: 5, max: 1500 }) // years

  useEffect(() => {
    const r = 1 + (rate / 100)
    const PV = presentAmount * Math.pow(r, valueAsNumber)
    setFutureValue(PV)
  }, [presentAmount, rate, valueAsNumber])

  return {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    setPresentAmount,
    presentAmount,
    setRate,
    rate,
    futureValue,
    valueAsNumber
  }
}
