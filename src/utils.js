
export const calcGCD = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return calcGCD(m, k);
  }
  return Math.abs(n);
};

