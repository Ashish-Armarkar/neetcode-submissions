class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = {}
        for(let i = 0; i<nums.length; i++){
        
            if(hashMap.hasOwnProperty(nums[i])){
                hashMap[nums[i]] =  hashMap[nums[i]] + 1
            }else{
            hashMap[nums[i]] =  1
            }
        }
        console.log(hashMap)
        return Object.keys(hashMap).sort((a,b) => hashMap[b] - hashMap[a]).slice(0,k)
    }
}
