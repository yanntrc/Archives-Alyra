if (process.argv.length !== 3) {
    console.log('enter your name only')
    process.exit(1)
}

console.log(`My name is ${process.argv[2]}`)