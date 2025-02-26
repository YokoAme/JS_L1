function bingo(ticket, win) {
    let miniWins = 0;
    
    for (let [str, num] of ticket) {
        if (str.split('').some(char => char.charCodeAt(0) === num)) {
            miniWins++;
        }
    }    
    return miniWins >= win ? "Winner!" : "Loser!";
}