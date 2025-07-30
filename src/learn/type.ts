const i: boolean = false
function x(): void {}
let xx: string | number
interface Person {
  name: string
  [propName: string]: any
}
const person: Person = {
  name: 'z',
}

const arr: Array<Person> = [person]

interface SF {
  (x: string): boolean
}
const f: SF = (x) => {
  console.log(x)
  return true
}

//断言
const s = 1

//版本1
//2
