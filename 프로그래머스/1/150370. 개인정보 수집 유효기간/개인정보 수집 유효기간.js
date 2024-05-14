function solution(today, terms, privacies) {
    var answer = [];
    let todayArr = today.split(".").map(v => +v);
    let termsAll = {};
    
    terms.forEach(term => {
        let [type, len] = term.split(' ');
        termsAll[type] = parseInt(len);
    });
    
    privacies.forEach( (privacy, index) =>{
        let [date, type] = privacy.split(' ');
        let [y, m, d] = date.split(".").map(v => +v);
        m += termsAll[type];
        
        while (m >12){
            y += 1;
            m -= 12;
        }
        
        if(d===1){
            m -=1;
            d = 28;
            if(m === 0){
                y -= 1;
                m = 12;
            }
        } else {
            d -= 1;
        }
        
        if(y < todayArr[0] || (y === todayArr[0] && (m < todayArr[1] || (m === todayArr[1] 
                                                                         && d < todayArr[2])))){
            answer.push(index + 1);
        }
        
    });
    return answer;
}