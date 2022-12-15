var line1 = readline().split(' ')
var line2 = readline().split(' ')
var line3 = readline().split(' ')
var line4 = readline().split(' ')
var line5 = readline().split(' ')
var ans = 0;

if(line1.includes('1')){
  for(var i = 0; i <  line1.length; i++){
    if(line1[i] === '1'){
      (3-(i+1)) > 0?
      ans = 2 + (3-(i+1))
      :
      ans = 2 + ((i+1)-3);
  
    }
  }

  print(ans)
}

if(line2.includes('1')){
  for(var i = 0; i <  line2.length; i++){
    if(line2[i] === '1'){
      (3-(i+1)) > 0?
      ans = 1 + (3-(i+1))
      :
      ans = 1 + ((i+1)-3);
    }
  }

  print(ans)
}

if(line3.includes('1')){
  for(var i = 0; i <  line3.length; i++){
    if(line3[i] === '1'){
      (3-(i+1)) > 0?
      ans = 0 + (3-(i+1))
      :
      ans = 0 + ((i+1)-3);
  
    }
  }
  print(ans)
}

if(line4.includes('1')){
  for(var i = 0; i <  line4.length; i++){
    if(line4[i] === '1'){
      (3-(i+1)) > 0?
      ans = 1 + (3-(i+1))
      :
      ans = 1 + ((i+1)-3);
  
    }
  }
  print(ans)
}

if(line5.includes('1')){
  for(var i = 0; i <  line5.length; i++){
    if(line5[i] === '1'){
      (3-(i+1)) > 0?
      ans = 2 + (3-(i+1))
      :
      ans = 2 + ((i+1)-3);
  
    }
  }
  print(ans)
}