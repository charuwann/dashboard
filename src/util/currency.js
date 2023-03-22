function CurrencyFormat(price) {
  return new Intl.NumberFormat().format(price);;
}

export default CurrencyFormat;