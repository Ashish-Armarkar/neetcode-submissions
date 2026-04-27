class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const newSet = new Set(nums)
let longest = 0
        for(let num of newSet){
            
            if(!newSet.has(num-1)){
                let currentValue = num;
                let count = 1;
                while(newSet.has(currentValue + 1)){
                    currentValue = currentValue + 1
                    count = count + 1;
                }
                if(count > longest){
                    longest = count;
                }
            }
        }
        return longest;
    }
}
