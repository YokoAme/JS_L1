function primeFactors(n) {
    let result = "";
    let factor = 2;

    while (factor * factor <= n) { 
        let count = 0;
        while (n % factor === 0) { 
            n /= factor;
            count++;
        }
        if (count > 0) {
            result += count > 1 ? `(${factor}**${count})` : `(${factor})`;
        }
        factor++;
    }

    if (n > 1) {
        result += `(${n})`;
    }

    return result;
}
