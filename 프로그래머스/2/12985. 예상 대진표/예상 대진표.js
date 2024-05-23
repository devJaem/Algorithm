function solution(n,a,b){
    // 라운드를 체크하기 위한 변수
    let answer = 0;
    
    //  a와 b가 같아지면 만나는 것으로 가정한다.
    while(a !== b){
        // 나누기2를 올림한 값이 같으면, 토너먼트에서만나는 것으로 가정한다. 
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        // 반복문이 한번 돌아갈 때마다, 라운드를 증가해준다
        answer++;
    }

    return answer;
}