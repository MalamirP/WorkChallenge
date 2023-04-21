// Declare an empty object to hold the counts of each color
let colors = {};

// Read input from the user until they enter "End"
while (true) {
    // Prompt the user for input
    let input = ''

    // If the input is "End", exit the loop
    if (input === "End") {
        break;
    }

    // Split the input string into color and count
    let [color, count] = input.split(": ");

    // If the color is not in the object, set the count to zero
    if (!colors[color]) {
        colors[color] = 0;
    }

    // Add the count to the appropriate color in the object
    colors[color] += parseInt(count);
}

// Find the smallest count in the object
let minCount = Infinity;
for (let color in colors) {
    if (colors[color] < minCount) {
        minCount = colors[color];
    }
}

// Print the smallest count
console.log("Take out " + minCount + " balls to be sure there is only one color left.");


