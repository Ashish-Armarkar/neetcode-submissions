class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const boxesMap = {}
    
    for( let i = 0; i < 9; i++){
        const colMap = {};
        const rowMap = {};
        
        for( let j = 0; j < 9; j++) {
            const row = board[i][j]
            const col = board[j][i];
            if(colMap[col])return false;
            if(rowMap[row])return false;
            
            const key = '' + Math.floor(i/3) + Math.floor(j/3);
            console.log(key)
            if(!boxesMap[key]){
                boxesMap[key] = {}
            }
            if(boxesMap[key][col])return false;
            
            if(col !== '.'){
                boxesMap[key][col] = true;
                colMap[col] = true
            }
            if(row !== '.')rowMap[row] = true
        }
    }
    
    
    return true;
    }
}
