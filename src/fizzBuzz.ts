const divisibleOf = (x: number) => (target: number) => target % x === 0

const isFizz = divisibleOf(3)
const isBuzz = divisibleOf(5)
const isFizzBuzz = (x: number) => isFizz(x) && isBuzz(x)

const calcFizzBuzz = (x: number) => {
  if (isFizzBuzz(x)) {
    return 'fizz buzz'
  } else if (isFizz(x)) {
    return 'fizz'
  } else if (isBuzz(x)) {
    return 'buzz'
  }
  return `${x}`
}

export const fizzBuzz = (x: number) => console.log(calcFizzBuzz(x))
