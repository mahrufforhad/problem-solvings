var sumString = readline();

function doWhatToDo(){
  var integers = sumString.split('+');

  integers.sort((a, b) => a - b);

  print(integers.join('+'))
}

doWhatToDo();