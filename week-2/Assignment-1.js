
function max(numbers) {
  let maxNumber;
  for (let index in numbers) {
    if (index == 0) {
      maxNumber = numbers[index];
    } else {
      if (numbers[index] > maxNumber) {
        maxNumber = numbers[index];
      }
    }
  }
  console.log(maxNumber);
} 

max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]);