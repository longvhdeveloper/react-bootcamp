const add = (a, b) => a + b

const generateGreeting = (name = 'Anonymous') => {
  return `Hello ${name}`
}

test('should add two numbers', () => {
  const result = add(3, 4)

  expect(result).toBe(7)
})

test('should return greeting with name', () => {
  const greeting = generateGreeting('Leo')
  expect(greeting).toBe('Hello Leo')
})

test('Shoul return greeting with empty name', () => {
  const greeting = generateGreeting()
  expect(greeting).toBe('Hello Anonymous')
})
