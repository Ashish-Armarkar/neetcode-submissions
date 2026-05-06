class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    let left = 0;
    let maxFreq = 0;
    let map = {};
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        map[char] = (map[char] || 0) + 1;
        maxFreq = Math.max(maxFreq, map[char]);
        if ((right - left + 1) - maxFreq > k) {
            map[s[left]]--;
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
    }
}
