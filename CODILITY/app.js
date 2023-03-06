function solution(A) {
    const input = String(A);
    const length = input.length;
    let shuffled = '';
    for (let i = 0, j = length - 1; i <= j; i++, j--) {
      shuffled += input.charAt(i);
      if (i !== j) {
        shuffled += input.charAt(j);
      }
    }
    return Number(shuffled);
  }
  