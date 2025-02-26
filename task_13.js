function longest(arr, n) {
    return arr
        .slice() 
        .sort((a, b) => b.length - a.length || arr.indexOf(a) - arr.indexOf(b))[n - 1];
}