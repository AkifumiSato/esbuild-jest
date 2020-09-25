import { fizzBuzz } from './fizzBuzz'

describe('output test', () => {
  const consoleSpy = jest.spyOn(console, 'log')
  consoleSpy.mockImplementation()

  beforeEach(() => {
    consoleSpy.mockClear()
  })

  test('arg is 1', () => {
    fizzBuzz(1)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('1')
  })

  test('arg is 2', () => {
    fizzBuzz(2)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('2')
  })

  test('arg is 3', () => {
    fizzBuzz(3)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('fizz')
  })

  test('arg is 4', () => {
    fizzBuzz(4)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('4')
  })

  test('arg is 5', () => {
    fizzBuzz(5)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('buzz')
  })

  test('arg is 7', () => {
    fizzBuzz(7)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('7')
  })

  test('arg is 15', () => {
    fizzBuzz(15)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('fizz buzz')
  })
})