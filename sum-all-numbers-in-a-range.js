function sumAll(arr) {
  let startNum = arr[0];
  let endNum = arr[1];
  let result = 0;
  
  if(startNum <= endNum){
    for(startNum; startNum <= endNum; startNum++){
      result += startNum;
    }
  } else if(endNum <= startNum){
    for(startNum; startNum >= endNum; startNum--){
      result += startNum;
    }
  }
  
  console.log(result)
  return result;
}

sumAll([4, 1]);
