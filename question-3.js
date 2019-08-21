function solution(relation) {
    var answer = 0;
    let propertyLength = relation[0].length;
    let isValid = Array((1 << propertyLength)).fill(false);
    
    for(let binary = 1; binary < (1 << propertyLength); binary++){
      let valid = true;

      //check if value of property is unique
      for(let i = 0; i < relation.length; i++){
        for(let j = i+1; j < relation.length; j++){
          let same = true;
          
          for(let k = 0; k < propertyLength; k++){
            if((binary & (1 << k)) > 0 && relation[i][k] != relation[j][k]){
              same = false;
            }
          }
          if(same){
            valid = false;
          }
        }
      }

      //check minimality of combination
      for(let binary2 = 1; binary2 < binary; binary2++){
        let isSubset = ((binary2 & binary) == binary2);
        if(isSubset == true && isValid[binary2] == true){
          valid = false;
          break;
        }
      }

      if(valid){
        isValid[binary] = true;
        answer++;
      }
    }
    console.log(answer);
    return answer;
}


solution([['100','ryan','music','2'],
          ['200','apeach','math','2'],
          ['300','tube','computer','3'],
          ['400','con','computer','4'],
          ['500','muzi','music','3'],
          ['600','apeach','music','2']]);

          
