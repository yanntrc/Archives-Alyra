const fs = require('fs')
const chalk = require('chalk')
const command = require('./commands.js')
const readlineSync = require('readline-sync')
let readlineSyncProcess = []

//Partie Node Manuelle
if (process.argv.length > 2) {
    if (process.argv[2] === 'cat') {
        if (process.argv.length < 4) {
            console.log(chalk.redBright('Veuillez entrer un chemin de directory.'))
            process.exit(1)
        } else {
            let [, , , ...args] = process.argv
            args.forEach(elem => {
                if (fs.existsSync(elem)) {
                    let statsCat = fs.statSync(elem)
                    if (!statsCat.isFile()) {
                        console.log(chalk.redBright(`Veuillez entrer un chemin de fichier pour '${elem}'.`))
                        process.exit(1)
                    } else {
                        console.log(command.cat(elem))
                    }
                } else {
                    console.log(chalk.redBright(`Veuillez entrer un chemin valide pour l'argument '${elem}'.`))
                }
            })
        }
    } else if (process.argv[2] === 'cp') {
        if (process.argv.length < 4) {
            console.log(chalk.redBright('Veuillez renseigner nom de fichier à copier.'))
            process.exit(1)
        } else if (process.argv.length < 5) {
            console.log(chalk.redBright('Veuillez renseigner un nom de fichier de destination.'))
            process.exit(1)
        } else {
            if (fs.existsSync(process.argv[3])) {
                let statsCp = fs.statSync(process.argv[3])
                if (!statsCp.isFile()) {
                    console.log(chalk.redBright(`Vous ne pouvez copier que des fichiers.`))
                    process.exit(1)
                } else {
                    command.copy(process.argv[3], process.argv[4])
                }
            } else {
                console.log(chalk.redBright(`Ce fichier n'existe pas.`))
            }
        }
    } else if (process.argv[2] === 'apnd') {
        if (process.argv.length < 5) {
            console.log(chalk.redBright('Veuillez renseigner au moins un fichier d\'origine et une destination.'))
            process.exit(1)
        } else {
            let [, , , ...args] = process.argv
            for (i = 0; i < args.length - 1; i++) {
                let statsApnd1 = fs.statSync(args[i])
                let statsApnd2 = fs.statSync(process.argv[process.argv.length - 1])
                if (!fs.existsSync(args[i]) || !statsApnd1.isFile()) {
                    console.log(chalk.redBright(`Le fichier ${args[i]}n'existe pas.`))
                } else if (!statsApnd2.isFile()) {
                    console.log(chalk.redBright(`Veuillez renseigner un bon format de fichier de destination.`))
                } else {
                    command.append(args[i], args[args.length - 1])
                }
            }
        }
    } else if (process.argv[2] === 'tl') {
        if (process.argv.length === 3) {
            console.log(chalk.redBright('Veuillez renseigner un fichier d\'origine.'))
            process.exit(1)
        } else if (process.argv.length === 4) {
            if (fs.existsSync(process.argv[3])) {
                let statsTail = fs.statSync(process.argv[3])
                if (!statsTail.isFile()) {
                    console.log(chalk.redBright(`Cette opération ne fonctionne que sur des fichiers.`))
                    process.exit(1)
                } else {
                    console.log(command.tail(process.argv[3], 10))
                }
            } else {
                console.log(chalk.redBright('Chemin erroné.'))
            }
        } else if (process.argv.length === 5) {
            if (process.argv[4] === '-n') {
                console.log(chalk.yellow('Veuillez ajouter une valeur en argument supplémentaire.'))
            } else {
                console.log(chalk.redBright(`'${process.argv[4]}' n'est pas un argument de 'tail'. `))
            }

        } else if (process.argv.length === 6) {
            if (fs.existsSync(process.argv[3])) {
                let statsTail = fs.statSync(process.argv[3])
                if (!statsTail.isFile()) {
                    console.log(chalk.redBright('Cette opération ne fonctionne que sur des fichiers.'))
                    process.exit(1)
                } else {
                    if (!isNaN(process.argv[5]) && process.argv[4] === '-n') {
                        console.log(command.tail(process.argv[3], process.argv[5]))
                    } else {
                        console.log(chalk.redBright('Veuillez respecter ce format : -n (x).'))
                        process.exit(1)
                    }
                }
            } else {
                console.log(chalk.redBright('Veuillez respecter le format : path -n (x).'))
                process.exit(1)
            }
        } else {
            console.log(chalk.redBright('Trop d\'arguments (4 maximum)'))
        }
    } else if (process.argv[2] === 'wc') {
        if (process.argv.length === 3) {
            console.log(chalk.yellow('Veuillez renseigner un chemin de fichier.'))
            process.exit(1)
        } else if (process.argv.length === 4) {
            if (fs.existsSync(process.argv[3])) {
                let statsWc1 = fs.statSync(process.argv[3])
                if (statsWc1.isFile()) {
                    console.log(command.wc(process.argv[3]))
                } else {
                    console.log(chalk.redBright('Cette opération ne fonctionne que sur des fichiers.'))
                    process.exit(1)
                }
            } else {
                console.log(chalk.redBright('Chemin erroné.'))
            }
        } else {
            if (fs.existsSync(process.argv[4])) {
                let statsWc2 = fs.statSync(process.argv[4])
                if (statsWc2.isFile()) {
                    if (process.argv[3] === '-l') {
                        let result = command.wc(process.argv[4])
                        console.log(`${result[0]}   ${process.argv[4]}`)
                    } else if (process.argv[3] === '-w') {
                        let result = command.wc(process.argv[4])
                        console.log(`${result[1]}   ${process.argv[4]}`)
                    } else if (process.argv[3] === '-c') {
                        let result = command.wc(process.argv[4])
                        console.log(`${result[2]}   ${process.argv[4]}`)
                    } else {
                        console.log(chalk.redBright('Veuillez utiliser -l -w ou -c.'))
                        process.exit(1)
                    }
                } else {
                    console.log(chalk.redBright('Cette opération ne fonctionne que sur des fichiers.'))
                    process.exit(1)
                }
            } else {
                console.log(chalk.redBright('Chemin erroné.'))
            }
        }
    } else {
        console.log(chalk.green('----- -----'))
        console.log(`Vous avez rentré ${process.argv.length -2} arguments en ligne de commande:`)
        console.log(chalk.green('----- -----'))
        let [, , ...args] = process.argv
        console.log(args.toString().replaceAll(',', ' '))
    }
    //Partie ReadlineSync
} else {
    while (readlineSyncProcess[0] !== '.exit') {
        let readlineInput = readlineSync.question('➤ ')
        readlineSyncProcess = readlineInput.split(' ')
        if (readlineSyncProcess[0] === 'cat') {
            if (readlineSyncProcess.length < 2) {
                console.log(chalk.redBright('Veuillez entrer un chemin de directory.'))
            } else {
                let [, ...args] = readlineSyncProcess
                args.forEach(elem => {
                    if (fs.existsSync(elem)) {
                        let statsCat = fs.statSync(elem)
                        if (!statsCat.isFile()) {
                            console.log(chalk.redBright(`Veuillez entrer un chemin de fichier pour '${elem}'.`))
                        } else {
                            console.log(command.cat(elem))
                        }
                    } else {
                        console.log(chalk.redBright(`Veuillez entrer un chemin valide pour l'argument '${elem}'.`))
                    }
                })
            }
        } else if (readlineSyncProcess[0] === 'cp') {
            if (readlineSyncProcess.length < 2) {
                console.log(chalk.redBright('Veuillez renseigner nom de fichier à copier.'))
            } else if (readlineSyncProcess.length < 3) {
                console.log(chalk.redBright('Veuillez renseigner un nom de fichier de destination.'))
            } else {
                if (fs.existsSync(readlineSyncProcess[1])) {
                    let statsCp = fs.statSync(readlineSyncProcess[1])
                    if (!statsCp.isFile()) {
                        console.log(chalk.redBright(`Vous ne pouvez copier que des fichiers.`))
                    } else {
                        command.copy(readlineSyncProcess[1], readlineSyncProcess[2])
                    }
                } else {
                    console.log(chalk.redBright(`Ce fichier n'existe pas.`))
                }
            }
        } else if (readlineSyncProcess[0] === 'apnd') {
            if (readlineSyncProcess.length < 3) {
                console.log(chalk.redBright('Veuillez renseigner au moins un fichier d\'origine et une destination.'))
            } else {
                let [, ...args] = readlineSyncProcess
                for (i = 0; i < args.length - 1; i++) {
                    let statsApnd1 = fs.statSync(args[i])
                    let statsApnd2 = fs.statSync(readlineSyncProcess[readlineSyncProcess.length - 1])
                    if (!fs.existsSync(args[i]) || !statsApnd1.isFile()) {
                        console.log(chalk.redBright(`Le fichier ${args[i]}n'existe pas.`))
                    } else if (!statsApnd2.isFile()) {
                        console.log(chalk.redBright(`Veuillez renseigner un bon format de fichier de destination.`))
                    } else {
                        command.append(args[i], args[args.length - 1])
                    }
                }
            }
        } else if (readlineSyncProcess[0] === 'tl') {
            if (readlineSyncProcess.length === 1) {
                console.log(chalk.redBright('Veuillez renseigner un fichier d\'origine.'))
            } else if (readlineSyncProcess.length === 2) {
                if (fs.existsSync(readlineSyncProcess[1])) {
                    let statsTail = fs.statSync(readlineSyncProcess[1])
                    if (!statsTail.isFile()) {
                        console.log(chalk.redBright(`Cette opération ne fonctionne que sur des fichiers.`))
                    } else {
                        console.log(command.tail(readlineSyncProcess[1], 10))
                    }
                } else {
                    console.log(chalk.redBright('Chemin erroné.'))
                }
            } else if (readlineSyncProcess.length === 3) {
                if (readlineSyncProcess[2] === '-n') {
                    console.log(chalk.yellow('Veuillez ajouter une valeur en argument supplémentaire.'))
                } else {
                    console.log(chalk.redBright(`'${readlineSyncProcess[2]}' n'est pas un argument de 'tail'. `))
                }

            } else if (readlineSyncProcess.length === 4) {
                if (fs.existsSync(readlineSyncProcess[1])) {
                    let statsTail = fs.statSync(readlineSyncProcess[1])
                    if (!statsTail.isFile()) {
                        console.log(chalk.redBright('Cette opération ne fonctionne que sur des fichiers.'))
                    } else {
                        let processToInt = parseInt(readlineSyncProcess[3])
                        if (!isNaN(processToInt) && readlineSyncProcess[2] === '-n') {
                            console.log(command.tail(readlineSyncProcess[1], processToInt))
                        } else {
                            console.log(chalk.redBright('Veuillez respecter ce format : -n (x).'))
                        }
                    }
                } else {
                    console.log(chalk.redBright('Veuillez respecter le format : path -n (x).'))
                }
            } else {
                console.log(chalk.redBright('Trop d\'arguments (4 maximum)'))
            }
        } else if (readlineSyncProcess[0] === 'wc') {
            if (readlineSyncProcess.length === 1) {
                console.log(chalk.yellow('Veuillez renseigner un chemin de fichier.'))
            } else if (readlineSyncProcess.length === 2) {
                if (fs.existsSync(readlineSyncProcess[1])) {
                    let statsWc1 = fs.statSync(readlineSyncProcess[1])
                    if (statsWc1.isFile()) {
                        console.log(command.wc(readlineSyncProcess[1]))
                    } else {
                        console.log(chalk.redBright('Cette opération ne fonctionne que sur des fichiers.'))
                    }
                } else {
                    console.log(chalk.redBright('Chemin erroné.'))
                }
            } else {
                if (fs.existsSync(readlineSyncProcess[2])) {
                    let statsWc2 = fs.statSync(readlineSyncProcess[2])
                    if (statsWc2.isFile()) {
                        if (readlineSyncProcess[1] === '-l') {
                            let result = command.wc(readlineSyncProcess[2])
                            console.log(`${result[0]}   ${readlineSyncProcess[2]}`)
                        } else if (readlineSyncProcess[1] === '-w') {
                            let result = command.wc(readlineSyncProcess[2])
                            console.log(`${result[1]}   ${readlineSyncProcess[2]}`)
                        } else if (readlineSyncProcess[1] === '-c') {
                            let result = command.wc(readlineSyncProcess[2])
                            console.log(`${result[2]}   ${readlineSyncProcess[2]}`)
                        } else {
                            console.log(chalk.redBright('Veuillez utiliser -l -w ou -c.'))
                        }
                    } else {
                        console.log(chalk.redBright('Cette opération ne fonctionne que sur des fichiers.'))
                    }
                } else {
                    console.log(chalk.redBright('Chemin erroné.'))
                }
            }
        } else if (readlineSyncProcess[0] === '.exit') {
            console.log(chalk.blue('----- Bye! -----'))
        } else {
            console.log(chalk.green('----- -----'))
            console.log(`Vous avez rentré ${readlineSyncProcess.length} arguments en ligne de commande:`)
            console.log(chalk.green('----- -----'))
            let [...args] = readlineSyncProcess
            console.log(args.toString().replaceAll(',', ' '))
        }
    }
    process.exit(1)
}