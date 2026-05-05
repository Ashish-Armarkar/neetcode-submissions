class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let unique = new Set()
        let longest = 0
        let left = 0;
        for(let i=0; i<s.length; i++){
              while(unique.has(s[i])){
                unique.delete(s[left])
                left++
              }
              unique.add(s[i])
              if(longest < i-left + 1){
                longest = i-left + 1
              }
            
        }
        return longest;
    }
}
