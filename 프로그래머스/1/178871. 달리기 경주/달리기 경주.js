function solution(players, callings) {
    let playerObject = {};
    
    for(let i=0; i<players.length; i++){
        playerObject[players[i]] = i;
    }
    
    callings.forEach( (player) => {
        
        const callNameIndex = playerObject[player];
        const nextPlayer = players[callNameIndex - 1];
        
        players[callNameIndex -1] = player;
        players[callNameIndex] = nextPlayer;
        
        playerObject[player]--;
        playerObject[players[callNameIndex]]++;
    });
    
    
    return players;
}