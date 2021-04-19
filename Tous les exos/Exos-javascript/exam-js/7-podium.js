const grades = [4, 7, 20, 19]
const podium = (gradesTab) => {
    const tmpTab = [...gradesTab]
    tmpTab.sort((a, b) => a - b)
    const finalTab = tmpTab.slice(-3)

    console.log(`1st: ${finalTab[finalTab.length-1]}`)
    console.log(`2nd: ${finalTab[finalTab.length-2]}`)
    console.log(`3rd: ${finalTab[finalTab.length-3]}`)

}
podium(grades)