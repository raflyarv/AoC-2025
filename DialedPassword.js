// 1

let position = 50;
let counter = 0;

// R --> ADD
// L --> SUBTRACT

const dialedPassword = (instructions) => {
    for (const ins of instructions) {
        const direction = Array.from(ins)[0];
        let steps = parseInt(ins.slice(1), 10);

        steps %= 100;

        console.log(`dir: ${direction}, steps: ${steps}`)

        const delta = direction === 'R' ? steps : -steps;
        position = (position + delta + 100) % 100;

        console.log(position)

        if (position === 0) {
            counter++
        }
    }
}

const listedInstructions = [
    "L68",
    "L30",
    "R48",
    "L5",
    "R60",
    "L55",
    "L1",
    "L99",
    "R14",
    "L82"
]

dialedPassword(listedInstructions)

console.log('Times at 0: ', counter)