// function duplicate(nums){
//     for(let num of nums){
//         if(nums.indexOf(num) !== nums.lastIndexOf(num)){
//             return num;
//         }
//     }
//     return -1;
// }

// function duplicate(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i] === arr[j] && i !== j){
//                 return arr[i];
//             }
//         }
//     }
//     return -1;
// }

// ------ Floyd Cycle Detection

// reference : https://www.quora.com/How-does-Floyds-cycle-finding-algorithm-work-How-does-moving-the-tortoise-to-the-beginning-of-the-linked-list-while-keeping-the-hare-at-the-meeting-place-followed-by-moving-both-one-step-at-a-time-make-them-meet-at-starting-point-of-the-cycle?ch=10&share=461f9d8c&srid=RO3u

function duplicate(nums) {
  // detect cycle in the loop after constructing Linked nodes from nums array
  let tortoise = nums[0];
  let hare = nums[0];
  do {
    // move tortoise one step
    tortoise = nums[tortoise];
    // move hare two steps in the linked list
    hare = nums[nums[hare]];
  } while (tortoise !== hare);

  // make tortoise or hare point to start and detect the start of the cycle
  tortoise = nums[0];
  while (tortoise !== hare) {
    // move both one step till they meet
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  // return the point of meet
  return tortoise;
}

duplicate([3, 1, 3, 4, 2]);

module.exports = duplicate;
