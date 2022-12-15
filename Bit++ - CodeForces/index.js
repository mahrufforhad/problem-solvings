var statement = readline();
var result = 0;

function main(){
  for(var i = 0; i <= statement; i++){
    var z = readline();

    if(z === "++X" || z === "X++"){
      result++;
    }
    else if(z === "--X" || z === "X--"){
      result--;
    }
  }

  print(result)
}

var arr = ['a', 'b', 'c', 'd']

main();