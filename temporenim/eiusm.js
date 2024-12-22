function calculateRatio(value, options = { 'default': 1.618033988749895 }) {
  const ratio = options.default;
  return value * ratio;
}

console.log(calculateRatio(10)); // Output: 16.18033988749895
