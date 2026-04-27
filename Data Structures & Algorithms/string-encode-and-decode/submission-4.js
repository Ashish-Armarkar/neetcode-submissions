class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let myNewStr = "";
        for(let i=0; i<strs.length; i++){
            let numberOfChar = strs[i].length;
            if(i==0){
                myNewStr =`${numberOfChar}#${strs[i]}`
            }else
            myNewStr += `${numberOfChar}#${strs[i]}`
        }
        return myNewStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let newStr = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = Number(str.substring(i, j));
            newStr.push(str.substring(j + 1, j + 1 + length));
            i = j + 1 + length;
        }
        return newStr
    }
}
