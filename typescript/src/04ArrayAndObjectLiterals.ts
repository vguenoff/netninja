export default function arrayAndObjectLiterals() {
  // arrays

  let names: string[] = ['Mario', 'Luigi', 'Peach']
  let ages: number[] = [25, 23, 24]

  // names.push(true) // error
  names.push('bowser')
  // ages.push('33') // error
  ages.push(33)

  console.log({ names, ages })

  let fruits = ['a', 'b']
  // fruits.push(true) // error

  let things = [1, true, 'hello']
  const t = things[0]

  // Object literals
  let user: {
    firstName: string
    age: number
    id: number
  } = {
    firstName: 'mario',
    age: 32,
    id: 1234,
    // isFunctional: true
  }

  // user.name = 'luigi' // error

  console.log({ user })

  // type inference with object literals
  let person = {
    name: 'luigi',
    score: 3,
  }

  // infered type let person: {
  // name: string;
  // score: number;
  // }

  // person.name = true // error
}
