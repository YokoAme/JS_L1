function findMissing(list) {
    let diff1 = list[1] - list[0];
    let diff2 = list[2] - list[1];
    let step = Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2; 
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] + step !== list[i + 1]) {
            return list[i] + step;
        }
    }
}
