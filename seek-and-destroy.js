function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  
  function removeItem(item){
    for(let x = 1; x < args.length; x++){
      if(arr.includes(args[x])){
        arr.splice(arr.indexOf(args[x]), 1)
      }
    }
  }
  arr.filter(removeItem);
  return arr;
}

destroyer([ 2, 3, 2, 3], 2, 3);
