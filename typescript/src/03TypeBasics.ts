export default function typeBasics() {
  let age = 38 // inferred type is string
  // age = 'thirty seven' // Error: Type 'string' is not assignable to type 'number'.

  console.log(age)

  // explicit typing
  let firstName: string = 'Vasil'
  let isFictional: boolean = false
  // isFictional = 1 // Error

  // null
  let something: null
  // undefined
  let anotherThing: undefined

  // something = 10
  // anotherThing = 'asd'
}
