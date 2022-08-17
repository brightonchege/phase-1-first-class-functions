
function receivesAFunction(callback){
  return callback()
}

function returnsANamedFunction(){
 const fn =  function(){
  return function name(){
    return "random_function"
  }
 }
 return receivesAFunction(fn)
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log("random_function")
  }
}