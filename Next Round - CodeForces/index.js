var n = readline();
var k = readline();
var scores = [];
var result = 0;

async function doWhatToDo(){
  function a(){
    for(var i = 0; i < n; i++){
      scores.push(readline());
    }
  }

  function b(){
    for(var i = 0; i < scores.length; i++){
      if(scores[i] > k){
        result = result+1;
      }
    }
  }

  await a();
  await b();

  print(result)
}

doWhatToDo();