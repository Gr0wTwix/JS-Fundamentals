function smallesto3(x, y, z) {
    let smallest = Number.MAX_SAFE_INTEGER;

    smallest = smaller(x, smallest);
    smallest = smaller(y, smallest);
    smallest = smaller(z, smallest);

    function smaller(n, small) {
        return n < small ? n : small;
    }

    return smallest;

}
console.log(smallesto3(2,3,4));