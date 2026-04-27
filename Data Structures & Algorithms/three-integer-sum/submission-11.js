class Solution {
    threeSum(nums) {
        const result = [];
        const sortedNums = nums.sort((a,b) => a-b);

        for(let i=0; i<sortedNums.length-2; i++){
            if(i>0 && sortedNums[i] === sortedNums[i-1]) continue;
            let left = i+1;
            let right = sortedNums.length-1;
            while(right>left){

                
                let sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
                if(sum === 0){
                result.push([sortedNums[i], sortedNums[left], sortedNums[right]])
                while(right>left && sortedNums[left] === sortedNums[left+1]) left++;
                while(right>left && sortedNums[right] === sortedNums[right-1]) right--;
                left++;
                right--
                }else if(sum<0){
                    left++
                }else{
                    right--
                }
            }
        }

return result;
        
            }
}