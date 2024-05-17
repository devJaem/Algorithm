function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let reportObject = {};
    let uniqueReport = new Set(report);
    
    id_list.forEach(id => {
        reportObject[id] = [];
    });
    
    uniqueReport.forEach(rep => {
        let [reporter, reported] = rep.split(' ');
        if (!reportObject[reported].includes(reporter)) {
            reportObject[reported].push(reporter);
        }
    });
    
    for (let reported in reportObject) {
        if (reportObject[reported].length >= k) {
            reportObject[reported].forEach(reporter => {
                answer[id_list.indexOf(reporter)]++;
            });
        }
    }
    
    return answer;
}