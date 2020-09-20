function twoSum(nums, target){
  let answerIndex = []
  for (let i in nums) {
    for (let j in nums) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) {
        answerIndex.push(parseInt(i), parseInt(j));
      }
    }
  }
  let unique = [...new Set(answerIndex)]; 
  return unique;
}

console.log(twoSum([2, 7, 11, 15], 9)); 


/*
For example:
twoSum([2, 7, 11, 15], 9); 
Should returns: [0, 1] 
Because:
nums[0]+nums[1] is 9
*/