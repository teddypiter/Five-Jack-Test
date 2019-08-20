function solution(relation) {
    var answer = 0;
    let all = [];
    let candidate = [];

    //get all combination for candidate key
    for(let i = 0; i < relation.length; i++){
      //recursion
      combination(0,[],relation[0].length,relation[i],all);
    }

    //remove any duplicate from all combination
    for(let i = 0; i < all.length; i++){
      let count = 0;
      for(let j = 0; j < all.length; j++){
        if(JSON.stringify(all[i])==JSON.stringify(all[j])){
          count++;
        }
      }
      if(count == 1){
        candidate.push(all[i]);
      }
    }

    //do something
    
    console.log(candidate);
    return answer;
}

function combination(index,subset,length,data,all){
  if(index == length){
    return all.push(subset);
  }else{
    combination(index+1, subset.concat(data[index]),length,data,all);  
    combination(index+1, subset,length,data,all);
  }
}

solution([['100','ryan','music','2'],
          ['200','apeach','math','2'],
          ['300','tube','computer','3'],
          ['400','con','computer','4'],
          ['500','muzi','music','3'],
          ['600','apeach','music','2']]);