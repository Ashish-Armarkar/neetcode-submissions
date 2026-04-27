class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sortedS = [...s].sort();
        let sortedT = [...t].sort();
        if(sortedS.join("") === sortedT.join(""))return true;
        else return false;  
    }
}
