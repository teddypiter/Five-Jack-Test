function solution(N, users) {
    var answer = [];
    let stageRate = [];
    for(let i = 1; i <= N; i++){
      let stage = {
        number: 0,
        rate: 0
      }
      let numerator = 0;
      let denominator = 0;
      for(let j = 0; j < users.length; j++){
        stage.number = i;
        if(i == users[j]){
          numerator++;
          denominator++;
        }else if(i < users[j]){
          denominator++;
        }
      }
      stage.rate = numerator/denominator;
      stageRate.push(stage);
    }
    stageRate.sort((a,b)=>b.rate-a.rate);
    stageRate.forEach(a=>answer.push(a.number));
    console.log(answer);
    return answer;
}

solution(5,[2,1,2,6,2,4,3,3]);