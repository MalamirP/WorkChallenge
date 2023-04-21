function calculateJumps(n, k) {
    // n for the number of rows or columns in the garden
    // k for the number of carrots in each row and column.
    let jumps = 0;
    for (let i = 0; i < n; i++) {
        jumps += k; // add jumps for each row
    }
    return jumps;
}