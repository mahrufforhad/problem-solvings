var username = readline();

function doWhatToDo(){
  var charArr = username.split('');
  charArr = [...new Set(charArr)];

  if(charArr.join('').length%2 === 0){
    print('CHAT WITH HER!')
  }
  else{
    print('IGNORE HIM!')
  }
}

doWhatToDo();