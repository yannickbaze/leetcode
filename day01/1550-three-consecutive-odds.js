var threeConsecutiveOdds = function(arr) {
    for (let i = 0; i <= arr.length - 3; i++) {
        if (
            arr[i] % 2 !== 0 &&
            arr[i + 1] % 2 !== 0 &&
            arr[i + 2] % 2 !== 0
        ) {
            return true;
        }
    }
    return false;
};

console.assert(
    threeConsecutiveOdds([2, 6, 4, 1]) === false,
    "Test case 1 failed"
  );
  
  console.assert(
    threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]) === true,
    "Test case 2 failed"
  );
  