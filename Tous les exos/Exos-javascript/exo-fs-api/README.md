# Node File System App
## Commands Available

* ### Cat
Displays content

format: cat path

* ### Cp
Allows you to copy/paste file

format: cp pathOrigin pathDestination

* ### Append
Appends content to destination file

format: apnd pathOrigin(one or more) pathDestination

* ### Tail
Displays content line by line from end of file. 

Default: displays 10 lines

format: tl path

alt: tl -n numberOfLinesDisplayed 

* ### Wc
Counts how many lines, words and characters are in the file

Default: displays all

format: wc path

alt: wc (-l lines; -w words; -c characters) path
* ### Echo
Displays arguments when none of the above

## User Manual
* ### One shot use
#### Exemple:

run by entering: node index.js cp file1.txt file2.txt

Or

run by entering: node index.js tl file1.txt -n 4

* ### Node App

run by entering: node index.js

then enter command
example: cp file1.txt file2.txt

exit with control+c or .exit