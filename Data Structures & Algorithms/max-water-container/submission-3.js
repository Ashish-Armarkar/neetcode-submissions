class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let calc = 0;
        let l = 0;
        let r = heights.length-1;
        while(r>l){
            let diff =r-l
            let sm = heights[l] > heights[r] ? heights[r] : heights[l]
            let newCalc = sm * diff
            if(newCalc > calc){
                calc = newCalc
            }
            
            if(heights[l] > heights[r]){
                r--
            }else{
                l++
            }
        }
        return calc;
    }
}
