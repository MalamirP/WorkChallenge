function findSimilarLetters(str1, str2) {
    let letters1 = str1.split("");
    let letters2 = str2.split("");
    // spliting the string to can loop

    for (let i = 0; i < letters1.length; i++) {
        if (!letters2.includes(letters1[i])) {
            letters1.splice(i, 1);
            i--;
        }
    }
    // check index of first letter if it's === to the second letter index 

    for (let i = 0; i < letters2.length; i++) {
        if (!letters1.includes(letters2[i])) {
            letters2.splice(i, 1);
            i--;
        }
    }
    // check index of second letter if it's === to the first letter index


    return [letters1.join(""), letters2.join("")];
    // return array of string with simillar letters :)
}
console.log(findSimilarLetters("codewars", 'hackerrank'))