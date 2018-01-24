function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  }
  return null;
}

function power(a, b) {
  if (b==0) {
    return 1;
  }
  return Math.pow(a,b);
}

module.exports = {
  soma,
  subtrai,
  multiplica,
  divide,
  power,
};
