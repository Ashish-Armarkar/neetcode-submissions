class Solution {
    groupAnagrams(strs) {
        const hashMap = {}
        for(let i = 0; i<strs.length; i++){
            const sortedVal = [...strs[i]].sort().join("");
           
            if(!hashMap[sortedVal]){
                hashMap[sortedVal] = []
            }
             hashMap[sortedVal] = [...hashMap[sortedVal],[strs[i]]]
        }
            
        return Object.values(hashMap)

    }
}
