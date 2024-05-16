function solution(park, routes) {
    const maxRow = park.length - 1;
    const maxCol = park[0].length - 1;
    
    let row = park.findIndex( (s) => s.includes("S"));
    let col = park[row].indexOf("S");
    
    routes.forEach( (move) => {
        
        const [a, b] = move.split(" ");
        
        let flag = true;
        let tempRow = row;
        let tempCol = col;
        
        
        for(let i=0; i<Number(b); i++){
            if(a ==="N"){
                tempRow--;
            }else if(a === "S"){
                tempRow++;
            }else if(a === "W"){
                tempCol--;
            }else if(a === "E"){
                tempCol++;
            }
        
        
            if(tempRow > maxRow || tempRow < 0 ||
                tempCol > maxCol || tempCol < 0 ||
                park[tempRow][tempCol] === "X"){
                flag = false;
                break;
            }
        }
        
        if(flag){
            col = tempCol;
            row = tempRow;
        }     
    });
    
    return [row, col];
}