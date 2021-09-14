/*
function sortingby(arr) {
    arr.sort((a, b) => a.length - b.length);
    if (arr[0].length !== arr[1].length) {
        return arr.join('\r\n');
    } else {
        arr.sort();
        return arr.join('\r\n');
    }
*/

function sortArray(input) {
  input.sort(twoCriteriaSort);
  input.forEach(el => console.log(el));

  function twoCriteriaSort(cur, next) {
    if (cur.length === next.length) {
      return cur.localeCompare(next);
    }
    return cur.length - next.length;
  }
}
sortArray([`Deny`, `omen`, `test`, `Default`]);