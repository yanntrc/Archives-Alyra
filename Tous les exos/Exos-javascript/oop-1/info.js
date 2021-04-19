const alice = {
    firstName: 'Alice',
    lastName : 'Liddell',
    age: 28 ,
    language: ['Tiger', 'ArnoldC', 'R', 'Go', 'C++']
}

const bob = {  
    firstName: 'Bob',
    lastName: 'Lemon',
    age: 30,
    language: ['Javascript', 'Java', 'C', 'C#']
}

const charlie = {   
    firstName: 'Charlie',
    lastName: 'Charlot',
    age: 8,
    language: ['Typescript', 'Javascript', 'Python', 'Malbolge', 'Solidity']
}

const printInfo = (person) => {
   console.log(person)
}

const canVote = (person) => {
if (person.age >=18){
  console.log(`${person.firstName} can vote.`)
  return true
} else{
  console.log(`${person.firstName} cannot vote.`)
  return false
}
}

const mostSkilledDev = (person1, person2) => {
   if(person1.language.length>person2.language.length){
     return person1.firstName
   } else if (person1.language.length<person2.language.length){
  return person2.firstName
   } else {
     return 'draw'
   }
}

