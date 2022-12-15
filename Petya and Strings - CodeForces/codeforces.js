var string1 = readline();
var string2 = readline();

if(string1.toLowerCase() === string2.toLowerCase()){
  print('0');
}
else{
  for(var i = 0; i < string1.length; i++){
    if(string1[i].toLowerCase() !== string2[i].toLowerCase()){
      if(string1[i].toLowerCase() > string2[i].toLowerCase()){
        print('1');
  
        break;
      }
  
      else{
        print('-1')
  
        break;
      }
    }
  }
}