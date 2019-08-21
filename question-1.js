function solution(record) {
    var answer = [];
    let command = [];
    let user = {}; //hash table to save user id and username
    
    //get latest username from specific id
    for(let i = 0; i < record.length; i++){
      command.push(record[i].split(' ')); //make value of command easier to get 
      switch(command[i][0]){
        case 'Enter':
          user[command[i][1]] = command[i][2];//assign username
          break;
        case 'Leave':
          //leave command doesn't change username    
          break;
        case 'Change':
          user[command[i][1]] = command[i][2];//assign username
          break;  
      }
    }
    
    //make sentences from command and stored user data
    for(let i = 0; i < command.length; i++){
      switch(command[i][0]){
        case 'Enter':
          answer.push(user[command[i][1]] +' came in.');
          break;
        case 'Leave':
          answer.push(user[command[i][1]] +' has left.');
          break; 
      }
    }
    
    return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]);

