function solution(N, users) {
    var answer = [];
    let stageRate = [];
    
    //get failure rate for every stage
    for(let i = 1; i <= N; i++){
      let stage = {
        number: 0,
        rate: 0
      } 
      let numerator = 0;
      let denominator = 0;
        
      //calculate failure rate  
      for(let j = 0; j < users.length; j++){
        stage.number = i;
        if(i == users[j]){
          numerator++;
          denominator++;
        }else if(i < users[j]){
          denominator++;
        }
      }
      
      if(denominator == 0){
        //If no one reaches the stage, the failure rate is 0. 
        stage.rate = 0;
      }else{
        stage.rate = numerator/denominator;
      }
        
      //save stage object to array for sorting 
      stageRate.push(stage);
    }
    //sort the stage from biggest to lowest failure rate 
    stageRate.sort((a,b) => b.rate - a.rate);
    stageRate.forEach(a => answer.push(a.number));
        
    return answer;
}

