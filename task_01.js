function hasTwoCubeSums(n) {
    let cubeSums = new Map(); 

    for (let a = 1; a ** 3 < n; a++) {
        for (let b = a + 1; a ** 3 + b ** 3 <= n; b++) {
            let sum = a ** 3 + b ** 3;

            if (sum === n) {
                if (cubeSums.has(sum)) {
                    return true;
                }
                cubeSums.set(sum, [a, b]); 
            }
        }
    }
    return false; 
}

