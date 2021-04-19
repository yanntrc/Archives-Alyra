class Human {
  constructor (person) {
    this.firstName = person.firstName
    this.lastName = person.lastName
    this.age = person.age
    this.language = person.language
    this.person = person
  }

printInfo() {
   return this.person
}

canVote() {
if (this.age >=18){
  console.log(`${this.firstName} can vote.`)
  return true
} else{
  console.log(`${this.firstName} cannot vote.`)
  return false
}
}

mostSkilledDev (person2) {
   if(this.language.length>person2.language.length){
     return this.firstName
   } else if (this.language.length<person2.language.length){
  return person2.firstName
   } else {
     return 'draw'
   }
}
}

exports.Human = Human
