 let nombre = 1
 let multiple3 = []
 let multiple7 = []

 for (nombre = 1; nombre <= 1000; nombre++) {
     reste3 = nombre % 3
     reste7 = nombre % 7
     if (reste3 === 0) {
         multiple3.push(nombre)
     }
     if (reste7 === 0) {
         multiple7.push(nombre)
     }
 }

 console.log(`Les multiples de 3 de 1 à 1000 sont : \n${multiple3}. \n`)
 console.log(`Les multiples de 7 de 1 à 1000 sont : \n${multiple7}.`)