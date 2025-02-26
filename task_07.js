function wave(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") continue;

        let word = str.split("");
        word[i] = word[i].toUpperCase(); 
        result.push(word.join("")); 
    }

    return result;
}
