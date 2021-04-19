const {Point} = require('./point')
const {Human} = require('./classInfo')
const {alice, bob, charlie} = require('./devs.js')

//classInfo.js passage des devs dans la class Human
const aliceHuman = new Human (alice)
const bobHuman = new Human (bob)
const charlieHuman = new Human (charlie)

// --> Exemple d'utilisation: console.log(charlieHuman.printInfo())

//point.js
const p1 = new Point(0, 0)
const p2 = new Point(10, 5)

// --> Exemple d'utilisation: console.log(p1.distance(p2))