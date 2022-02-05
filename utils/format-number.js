export function thousandSpace (value) {
  let numStr = '0'
  const regex = /(\d+)(\d{3})/

  if (typeof value === 'number') {
    numStr = String(value)
  } else {
    numStr = value
  }

  return numStr.replace(/^\d+/, (w) => {
    while (regex.test(w)) {
      w = w.replace(regex, '$1,$2')
    }

    return w
  })
}

export function toMoney (value) {
  let num = 0

  if (typeof value === 'number') {
    num = value
  } else if (typeof value === 'string') {
    num = parseFloat(value)
  } else {
    throw new Error('Cannot parse number')
  }

  return num.toFixed(2)
}

export function moneyThousand (value) {
  const _money = toMoney(value)

  return thousandSpace(_money)
}

export function stripeToMoneyThousand (value) {
  const _money = toMoney((value / 100))

  return thousandSpace(_money)
}

export function currencyToNumber (value) {
  console.log('Entrada', value)
  const number = value.replace(/[^0-9.-]+/g,'')
  console.log('Salida', number)
  return number
}

const defaultOptions = {
  significantDigits: 2,
  thousandsSeparator: ',',
  decimalSeparator: '.',
  symbol: '$'
}

export const currencyFormatter = (value, options) => {
  if (typeof value !== 'number') value = 0.0
  options = { ...defaultOptions, ...options }
  value = value.toFixed(options.significantDigits)

  const [currency, decimal] = value.split('.')
  return `${options.symbol} ${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator
  )}${options.decimalSeparator}${decimal}`
}
