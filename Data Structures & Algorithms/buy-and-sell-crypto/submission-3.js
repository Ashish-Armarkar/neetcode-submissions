class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(p) {

        let l = 0;
        let r = p.length-1;
        let nxt = 1;
        let maxP = 0;
        while(nxt<=r){
            if(p[l]>p[nxt]){
                l = nxt
                nxt++
            }else {
                if(maxP < p[nxt] - p[l]) maxP = p[nxt] - p[l];
                nxt++;
            }
        }
        return maxP
    }
}
