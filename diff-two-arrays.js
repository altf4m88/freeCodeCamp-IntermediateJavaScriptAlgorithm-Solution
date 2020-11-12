function diffArray(arr1, arr2) {
  var newArr = [];

  function checkArr1(item){
    if(arr2.indexOf(item) == -1){
      newArr.push(item);
    }
  }
  function checkArr2(item){
    if(arr1.indexOf(item) == -1){
      newArr.push(item)
    }
  }

  arr1.filter(checkArr1);
  arr2.filter(checkArr2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
