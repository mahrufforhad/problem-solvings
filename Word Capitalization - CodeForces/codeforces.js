var word = readline();

function doWhatToDo(){
  fletter = word.slice(0, 1);
  var result = fletter.toUpperCase()+word.slice(1, word.length);

  print(result)
}

doWhatToDo();