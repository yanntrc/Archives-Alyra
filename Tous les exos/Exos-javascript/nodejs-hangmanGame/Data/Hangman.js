exports.hangman = (isGameOn, isWin) =>{
const hangmanInGame = '\n\
       /------\\\n\
      /        \\\n\
     /    O     \\\n\
    /    /|\\     \\\n\
   /     / \\      \\\n\
  /||||||||||||||||\\\n\
 /                  \\'

const hangmanLoose = ['\n\
       /------\\\n\
      /        \\\n\
     /    O     \\\n\
    /    /|\\     \\\n\
   /     / \\      \\\n\
  /|||||     ||||||\\\n\
 /                  \\','\n\
       /------\\\n\
      /   |    \\\n\
     /    O     \\\n\
    /    /|\\     \\\n\
   /     / \\      \\\n\
  /|||||     ||||||\\\n\
 /                  \\', '\n\
       /------\\\n\
      /   |    \\\n\
     /    |     \\\n\
    /     O      \\\n\
   /     /|\\      \\\n\
  /||||| / \\ ||||||\\\n\
 /                  \\']

const hangmanWin = ['\n\
       /------\\\n\
      /        \\\n\
     /    O     \\\n\
    /    /|\\     \\\n\
   /     / \\      \\\n\
  /||||||||||||||||\\\n\
 /                  \\','\n\
       /------\\\n\
      /        \\\n\
     /    O     \\\n\
    /    \\|/     \\\n\
   /     / \\      \\\n\
  /||||||||||||||||\\\n\
 /                  \\']

if(isGameOn){
      console.log(hangmanInGame)
}
else{
    switch(isWin){
      case true :
        console.log(hangmanWin[1])
        break
      case false :
        console.log(hangmanLoose[2])
        break   
}
}
}