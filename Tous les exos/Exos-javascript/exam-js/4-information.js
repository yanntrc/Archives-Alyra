const information = (prénom, nom, age) => {
    console.log(`Prénom: ${prénom}`)
    console.log(`Nom: ${nom}`)
    console.log(`Age: ${age}`)
    if (age >= 18) {
        console.log(`Vous êtes majeur depuis ${age-18}ans `)
    } else {
        console.log(`Vous serez majeur dans ${18-age}ans `)
    }
}

information('Yann', 'Troadec', 30)