class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = []
        let perfix = 1; 

        for(let i = 0; i<nums.length; i++){
            res[i] = perfix;
            perfix = perfix * nums[i]
        }
        let sufix = 1;
        for(let i = nums.length-1; i>=0; i--){
            res[i] *= sufix;
            sufix = sufix * nums[i]
        }

        return res;
    }
}
