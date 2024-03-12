const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(nums, target) {
    const seen = new DoublyLinkedList();
    for(const num of nums){
        const diff = target - num;
        if(seen.contains(diff)){
            return [diff, num]
        }
        seen.append(num)
    }
    return null;
}
const nums = [2, 6, 3, 8, 10, 5];
const targetSum = 12;

const pair = findPairSum(nums, targetSum);
console.log(pair); 
module.exports = findPairSum;
