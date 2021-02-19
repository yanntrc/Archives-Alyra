let numbers = [0x123,
    0123,
    0b10011001,
    0xdeadbeef,
    0xea7beef,
    0b1111111111111111,
    0777
];

for (let i = 0; i < 7; i++) {
    console.log(numbers[i].toString(10))
}