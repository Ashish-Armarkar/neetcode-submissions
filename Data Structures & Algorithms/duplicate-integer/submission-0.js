class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        const newSet = new Set();
        for (let i of nums){
            if(newSet.has(i)){
                return true
            }
            newSet.add(i)
        }
        return false;
    }
    
}
