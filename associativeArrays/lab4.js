function solve () {
    let set = new Set([1,2,2,4,5]);
    // Set(4) {1,2,4,5}
    set.add(7); // Add value
    console.log(set.has(1));
    // Expected output: true
    
}
solve();