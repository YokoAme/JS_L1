function expandedForm(num) {
    return num
        .toString()
        .split("")
        .map((digit, i, arr) => digit !== "0" ? digit + "0".repeat(arr.length - i - 1) : "")
        .filter(e => e !== "") 
        .join(" + "); 
}
